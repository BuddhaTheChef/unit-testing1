describe('main.js', ()=>{
    describe('calculate()', () => {
        it('validates expression', () => {
            spyOn(window, 'updateResult').and.stub();
            calculate('a+3')
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