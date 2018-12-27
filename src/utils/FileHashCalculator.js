import CryptoJS from 'crypto-js';
import greenlet from 'greenlet';

const READER_CHUNK_SIZE = 1024 * 1024; // 1 MB

function _readFileChunk(file, offset, size) {
  return new Promise(resolve => {
    const reader = new FileReader();
    const data = file.slice(offset, size + offset);
    reader.onload = e => resolve(e.target.result);
    reader.readAsArrayBuffer(data);
  });
}

// Moved file reading into worker to reduce main thread usage
const readFileChunk = window.Worker ? greenlet(_readFileChunk) : _readFileChunk;

export class FileHashCalculator {
  file = null;
  hash = null;
  completed = false;
  progress = 0;
  timeSpent = 0;

  constructor(file) {
    this.file = file;
    this.calculateHash();
  }

  async calculateHash() {
    const startTime = Date.now();
    const sha256 = CryptoJS.algo.SHA256.create();
    const fileSize = this.file.size;

    for (let i = 0; i < fileSize; i += READER_CHUNK_SIZE) {
      const chunk = await readFileChunk(this.file, i, READER_CHUNK_SIZE);
      const wordArray = CryptoJS.lib.WordArray.create(chunk);
      sha256.update(wordArray);
      this.progress = 100 * (i + 1) / fileSize;
      this.timeSpent = (Date.now() - startTime) / 1000;
    }

    this.hash = sha256.finalize().toString();
    this.completed = true;
  }
}
