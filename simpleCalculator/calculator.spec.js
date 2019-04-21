//Suite is a group of Specs(tests)
//Suites lets you organize specs
//Specs holds expectations

//to disable a spec just put an x in front of it
//to disable a suite (all specs) just put an x in front of describe

//a matcher is just a function(boolean comparison between an expected value vs the actual value)
// matcher is responsible to report to jasmine if the expected values is a passing or failing spec

describe('calculator.js', () => {
  describe('Calculator', () => {
    let calculator;
    let calculator2;
    
      beforeEach(() => {
        calculator = new Calculator();
        calculator2 = new Calculator();
      });

      afterEach(() => {

      });
    it('it can be intatiated', () => {
        //able to import custom matchers with jasmine
        jasmine.addMatchers(customMatchers);
        //toBe() wont work like toEqual() because toEqual compares if the refrences are the same
        expect(calculator).toBeCalculator(); //custom!
        expect(2).not.toBeCalculator();
        expect(calculator).toBeTruthy();
        expect(calculator2).toBeTruthy();
        expect(calculator).toEqual(calculator2);
        //toContain finds if a certain part of a method matches "if Constructor name Calculator contains Calc"
        expect(calculator.constructor.name).toContain('Calc')
    });

    it('should initialize the total', () => {
        expect(calculator.total).toBe(0);
        expect(calculator.total).toBeFalsy();
    });

    it('instantiates a unique object', () => {
        //this negates matchers because they are not the same it will create error
        //with the "not" keyword it expects them not to be equal so the value will come out truthy
        expect(calculator).not.toBe(calculator2);
    })

    //Primitive - Data that is not an object and has no methods
    it('has common operations', () => {
            //not defined and to be defined
        expect(calculator.add).toBeDefined();
        expect(calculator.subtract).toBeDefined();
        expect(calculator.divide).not.toBeUndefined();
        expect(calculator.multiply).not.toBeUndefined();
    })

    it('can overwrite total', ()=>{

        calculator.total = null;
        expect(calculator.total).toBeNull();
    })

    describe('add()', () => {

        it('should add numbers to total', ()=> {
            //expect total to be 5
            calculator.add(5)
            expect(calculator.total).toBe(5)
        });

        it('returns total', () => {
    
            calculator.total = 50;
    
            expect(calculator.add(20)).toBe(70);
            //checks to see if digits match wheter it be negative or positive
            expect(calculator.total).toMatch(/-?\d+/);
            expect(typeof calculator.total).toMatch('number');
            expect (calculator.total).toBeNumber();
            //asymetric matchers
            //not equal to each side
            //jasmine.anything will give you true for everything besides null or undefined
            expect(calculator.total).toEqual(jasmine.anything());
        })
    })

    describe('subtract()', () => {
        xit('should subtract numbers to total', ()=> {
            calculator.total = 10;
            calculator.subtract(5)
            expect(calculator.total).toBe(5)
        });
    
    })

    describe('multiply()', () => {
        it('should multiply numbers to total', ()=> {
            calculator.total = 100;
            calculator.multiply(2);
            expect(calculator.total).toBe(200);
        });


        it('does not handle NaN', () => {
            calculator.total = 20;
            calculator.multiply('a');

            expect(calculator.total).toBeNaN();
        })
    })

    describe('divide()', () => {
        it('should divide numbers to total', ()=> {
            calculator.total = 15;
            calculator.divide(5);
            expect(calculator.total).toBe(3);
        });
        it('handles divide by 0', () => {
            // handling specs that throws errors
            expect(()=>{calculator.divide(0)}).toThrow();
            expect(()=> {calculator.divide(0)}).toThrowError(Error);
            expect(()=> {calculator.divide(0)}).toThrowError(Error, 'Cannot divide by 0');
        })
    })
 })
});