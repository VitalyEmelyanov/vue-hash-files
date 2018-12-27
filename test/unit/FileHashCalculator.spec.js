import waitForExpect from 'wait-for-expect';
import {FileHashCalculator} from '../../src/utils/FileHashCalculator';

const TEST_CONTENT = 'test contents';
const TEST_SHA256 = '94c4018d2dcf3327223159659ed0b4bc14461cf394fe1e180e2b5d663938743d';

describe('FileHashCalculator', () => {
  it('should calculate file SHA256', async () => {
    const file = new File([TEST_CONTENT], 'file.txt');
    const calculator = new FileHashCalculator(file);
    await waitForExpect(() => expect(calculator.completed).toBe(true));
    expect(calculator.hash).not.toBeNull();
    expect(calculator.hash).toBe(TEST_SHA256);
  });
  it('should output hashing progress', async () => {
    const file = new File([TEST_CONTENT], 'file.txt');
    const calculator = new FileHashCalculator(file);
    await waitForExpect(() => expect(calculator.completed).toBe(true));
    expect(calculator.progress).toBeGreaterThan(0);
  });
});
