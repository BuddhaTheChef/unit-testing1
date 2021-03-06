describe('main.js', ()=>{
    describe('calculate()', () => {
        it('validates expression when the first number is invalid', () => {
            //and.stub is the default and can be omitted
            spyOn(window, 'updateResult').and.stub();
            
            calculate('a+3');

            //expects that the function has been called
            expect(window.updateResult).toHaveBeenCalled();
            //expect and argument to match the paramter thats been called
            expect(window.updateResult).toHaveBeenCalledWith('Operation not recognized');
            //Recives and argument a number of times a function is called
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        })

        it('validates expression when the second number is invalid', () => {
            spyOn(window, 'updateResult')
            
            calculate('3+a');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Operation not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        })

        it('validates expression when the operation is invalid', () => {
            spyOn(window, 'updateResult')
            
            calculate('3@4');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Operation not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        })

        it('calls add', () => {
            spyOn(Calculator.prototype, 'add');

            calculate('3+4');

            expect(Calculator.prototype.add).toHaveBeenCalledTimes(2);
            expect(Calculator.prototype.add).toHaveBeenCalledWith(3);
            expect(Calculator.prototype.add).toHaveBeenCalledWith(4);
        })

        it('calls subtract', () => {
            const spy = spyOn(Calculator.prototype, 'subtract');

            calculate('3-7')

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(7);
        })

        it('calls multiply', () => {
            const spy = spyOn(Calculator.prototype, 'multiply');

            calculate('3*4')
        
            expect(spy).toHaveBeenCalled();
            expect(spy).not.toHaveBeenCalledWith(3);
            expect(spy).toHaveBeenCalledWith(4);
        })

        it('calls divide', () => {
            const spy = spyOn(Calculator.prototype, 'divide');

            calculate('9/3')

            expect(spy).toHaveBeenCalled();
            expect(spy).not.toHaveBeenCalledWith(9);
            expect(spy).toHaveBeenCalledWith(3);
        })

        it('calls updateResult (example using and.callThrough)', () => {
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.callThrough();

            calculate('5*5');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(25);
        })

        it('calls updateResult (example using and.callFake)', () => {
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.callFake((number) => {
                return 'it works'
            });

            calculate('5*5');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('it works');
        })

        it('calls updateResult (example using and.returnValue)', () => {
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.returnValue('whatever [multiply] return');

            calculate('5*5');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('whatever [multiply] return');
        })

        it('calls updateResult (example using and.returnValues)', () => {
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'add').and.returnValues(null, 'whatever [add] returns' );

            calculate('5+5');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('whatever [add] returns');
        })
        
        it('does not handle errors', () => {
            spyOn(Calculator.prototype, 'multiply').and.throwError('Some Error');

            expect(() => {calculate('5*5')}).toThrowError('Some Error');
        })
    });

    describe('updateResult()', () => {
        let element;
        beforeAll(() => {
            //executed just once before everything
            element = document.createElement('div');
            element.setAttribute('id', 'result')

            document.body.appendChild(element);
        })
        afterAll(() => {
            //executed just once after everything

            document.body.removeChild(element)
        })
        it('adds result to the DOM element', () => {
            updateResult('5');
            expect(element.innerText).toBe('5')
        })
    })

    describe('showVersion()', () => {
        it('calls calculator.version', () => {
            spyOn(document, 'getElementById').and.returnValue({
                innerText: null
            });

            //save the spyOnProperty save it to a variable so you can refrence it later
            const spy = spyOnProperty(Calculator.prototype, 'version', 'get').and.returnValue(
                Promise.resolve()
            )

            showVersion();

            expect(spy).toHaveBeenCalled();
        })
    })
})