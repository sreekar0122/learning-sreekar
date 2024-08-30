const {multiply} = require('../multiplication');
describe("testing multiply", ()=> {
    test("should be multiplication 2 numbers",()=>{
        expect(multiply(4,5)).toEqual(20);
    });
    test("should be multiplication 2 negative numbers",()=>{
        expect(multiply(-4,6)).toEqual(-24);
    })
})