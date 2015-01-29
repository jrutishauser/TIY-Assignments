var assert = require('assert');



var solution = function (input) {
var sum = 0;
var counter = 0;
    
while ( counter < input ) {
    if (counter % 3 === 0){
        sum+=counter;
    }
    if (counter % 5 === 0){
        sum+=counter;
    }
    counter++;
}
return sum;
}




it('should have a `solution` function', function(){
  assert(solution);
  assert.equal(typeof solution, 'function');
});

it('should have a `solution` for (10, 20, 30)', function(){
  assert.equal(solution(10), 23);
  assert.equal(solution(20), 93);
  assert.equal(solution(30), 210);
});

it('should have a `solution` for 50', function(){
  assert.equal(solution(50), 633);
});

it('should have a solution for 100', function(){
  assert.equal(solution(100), 2633);
});
