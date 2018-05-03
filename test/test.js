import { expect as expect } from 'chai';
import sampleWebpackStripLog from '../src/module.js';

describe('sampleWebpackStripLog', () => {
  it('should be runing without any problems', () => {
    expect(sampleWebpackStripLog).to.not.throw();
  });
});
