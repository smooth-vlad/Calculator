import * as calculator from './calculator';

function calculate(input) {
	let tokens = calculator.parseTokens(input);
    let tree = calculator.parseTree(tokens);
    let result = calculator.calculateNode(tree);
	return result;
}

describe('Calculator', () => {
  it('2+2=4', () => expect(calculate("2+2")).toBe(4));
  it('(2+2)=4', () => expect(calculate("(2+2)")).toBe(4));
  it('2+2*2=6', () => expect(calculate("2+2*2")).toBe(6));
  it('-2+2*2=2', () => expect(calculate("-2+2*2")).toBe(2));
  it('-2-2*2=-6', () => expect(calculate("-2-2*2")).toBe(-6));
  it('-2-2*(-2)=2', () => expect(calculate("-2-2*(-2)")).toBe(2));
});