const chai = require('chai');
const expect = chai.expect;
import add from './../../src/Common/add';
const a = 1;
const b = 2;
describe('add方法测试', () => {
  it('第一个测试', () => {
    expect(add(a, b)).to.be.equal(3);
  })
  it('第二个测试', () => {
    expect(add(a, b)).to.not.equal(4);
  })
})