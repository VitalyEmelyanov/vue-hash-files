import {FileHashCalculator} from '../utils/FileHashCalculator';

const ADD_FILES = 'ADD_FILES';

export default {
  namespaced: true,
  state: {
    fileQueue: []
  },
  getters: {
    fileQueue: state => state.fileQueue
  },
  mutations: {
    [ADD_FILES]: (state, data) => state.fileQueue.unshift(...data)
  },
  actions: {
    async addFiles({commit}, files) {
      const newFiles = files.map(file => ({
        file,
        sha256: new FileHashCalculator(file)
      }));

      commit(ADD_FILES, newFiles);
    }
  }
};
