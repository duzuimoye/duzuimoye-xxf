const expect = require('chai').expect
const { add }= require('../index')

describe('hello-npm-script', () => {
    // 方方面面都考虑进去
    describe('zk',() => {
        it('should return sum when params are numbers',() =>{
            expect(add(0,1)).to.equal(1);
            expect(add(3,2)).to.equal(5);
        })
    }),
    //测试驱动开发
    describe('cjk', () =>{
        it('the params are illegal return NAN',() =>{
            expect(isNaN(add(3,'2'))).to.equal(true);
        })
    })
})