const assert = require('chai').assert;
const index = require('../index');
sayHelloResult = index.sayHello();
addNumbersResult = index.addNumbers(10,5);

describe('Index', function(){
    describe('sayHello()', function(){
        it('sayHello should return hello', function(){
            assert.equal(sayHelloResult, 'hello');
        });

        it('sayHello should return string', function(){
            assert.typeOf(sayHelloResult, 'string');
        });
    });
    describe('addNumbers()', function(){
        it('addNumber should be above 5', function(){
            assert.isAbove(addNumbersResult, 5);
        });

        it('addNumber should return number', function(){
            assert.typeOf(addNumbersResult, 'number');
        });
    });
});