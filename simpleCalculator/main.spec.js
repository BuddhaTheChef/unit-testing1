describe('main.js', ()=>{
    describe('calculate()', () => {
        it('validates expression when the first number is invalid', () => {
            spyOn(window, 'updateResult').and.stub();
            
            calculate('a+3');

            expect(window.updateResult).toHaveBeenCalled();
        })

        it('validates expression when the second number is invalid', () => {
            spyOn(window, 'updateResult').and.stub();
            
            calculate('3+a');

            expect(window.updateResult).toHaveBeenCalled();
        })

        it('validates expression when the operation is invalid', () => {
            spyOn(window, 'updateResult').and.stub();
            
            calculate('3@4');

            expect(window.updateResult).toHaveBeenCalled();
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