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

        xit('calls add')
        xit('calls subtract')
        xit('calls multiply')
        xit('calls divide')
        xit('validates operation')
        xit('calls updateResult')
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
})