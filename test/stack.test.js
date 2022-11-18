class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop(){
    if (this.top >= 0) {
      let valueToReturn = this.items[this.top];
      
      if (this.top -1 == -1) {
        this.items = {};  
      }else{
        this.items[this.top] = null;
      }

      this.top -= 1;
      
      return valueToReturn;  
    }else{
      return null;
    }
    
  }

  mysum(a, b){
    return a+b;
  }
  
  mysub(a, b){
    return a-b;
  }

}

describe('My Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it('can push to the top', () => {
    stack.push('🥑');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('🥑');

    stack.push('🌽');
    expect(stack.top).toBe(1);
    expect(stack.peek).toBe('🌽');
  });

  it('can pop off', () => {
    stack.push('🥑');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('🥑');

    let myvalue = stack.pop();
    expect(myvalue).toBe('🥑')

    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});

    myvalue = stack.pop();
    expect(myvalue).toBeNull();
    expect(stack.top).toBe(-1);
  });

  it("Should return 2 given 1+1", () => {
    expect(stack.mysum(1,1)).toBe(2);
  })

});
