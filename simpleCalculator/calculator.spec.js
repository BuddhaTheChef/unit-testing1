//Suite is a group of Specs(tests)
//Suites lets you organize specs
//Specs holds expectations

//to disable a spec just put an x in front of it
//to disable a suite (all specs) just put an x in front of describe

//a matcher is just a function(boolean comparison between an expected value vs the actual value)
// matcher is responsible to report to jasmine if the expected values is a passing or failing spec

describe('calculator.js', () => {

  it('should add numbers to total', ()=> {
    const calculator = new Calculator();
    //expect total to be 5
    calculator.add(5)
    expect(calculator.total).toBe(5)
  });

  xit('should subtract numbers to total', ()=> {
    const calculator = new Calculator();
    calculator.total = 10;
    calculator.subtract(5)
    expect(calculator.total).toBe(5)
  });

  it('should multiply numbers to total', ()=> {
     const calculator = new Calculator();
     calculator.total = 100;
     calculator.multiply(2);
     expect(calculator.total).toBe(200);
    
  }); 

  it('should divide numbers to total', ()=> {
    const calculator = new Calculator();
    calculator.total = 15;
    calculator.divide(5);
    expect(calculator.total).toBe(3);
  });

  it('it can be intatiated', () => {
    const calculator = new Calculator();
    const calculator2 = new Calculator();
    //toBe() wont work like toEqual() because toEqual compares if the refrences are the same
    expect(calculator).toBeTruthy();
    expect(calculator2).toBeTruthy();
    expect(calculator).toEqual(calculator2);
  });

  it('should initialize the total', () => {
    const calculator = new Calculator();
    expect(calculator.total).toBe(0);
    expect(calculator.total).toBeFalsy();
  });

  it('instantiates a unique object', () => {
      const calculator1 = new Calculator();
      const calculator2 = new Calculator();
    //this negates matchers because they are not the same it will create error
    //with the "not" keyword it expects them not to be equal so the value will come out truthy
      expect(calculator1).not.toBe(calculator2);
  })

});