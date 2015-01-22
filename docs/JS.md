### [Primative: Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

* _symbol_: `null`
* _pronunciation_: "null", "null value", "is null"
* _examples_:
```javascript
null // how exciting
```

### Boolean

* _symbol_: `true` or `false`
* _pronunciation_: "boolean"
* _examples_:
```javascript
5 < 100 // returns true
```

### Numeric

*_symbol_: `decimal` `binary` `octal` `hexadecimal`
* _pronunciation_: "42"
* _examples:
```javascript
2314 // returns 2314
```

### Array

*_symbol_: [an, array, of, strings]
* _pronunciation_: "a ray"
* _examples:
```javascript
[another, array, of, strings]
```
### String

*_symbol_: `"hello"`
* _pronunciation_: "string"
* _examples:
```javascript
"look at this string"
```

### Object

*_symbol_: `new Object([value])` `{[namevalue1[,name2[, name3]]]}
* _pronunciation_: `obj-ect`
* _examples:
```javascript
var David = {relation:"instructor", enjoys:"trolling students", transportation:"train"}
```
### Infinity

*_symbol_: `infinity` `a sideways 8`
* _pronunciation_: `in-fin-i-tee`
* _examples:
```javascript
infinity * 2 = infinity
```
### NaN

*_symbol_: `NaN`
* _pronunciation_: `not a number` 
* _examples:
```javascript
"fdsajfd" == NaN
```
### Undefined

*_symbol_: `undefined`
* _pronunciation_: `un-de-fine-d` 
* _examples:
```javascript
undefined
```
### [Operator: Addition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition_(.2B))

* _symbol_: `+`
* _pronunciation_: "plus", "added to"
* _examples_:
```javascript
1 + 2 + 3 // 6, of course
'1' + 2 + 3 // '123', obviously... WTF?
```

### Equal

* _symbol_: `==`
* _pronunciation_: "double equal"
* _examples_:
```javascript
3 == 3 // returns true
```

### Not Equal

* _symbol_: `!=`
* _pronunciation_: "not equal"
* _examples_:
```javascript
3 != 5 // returns true
```

### Strict equal 

* _symbol_: `===`
* _pronunciation_: `three equals` `strict equal`
* _examples_:
```javascript
3 === "3" // returns false
```

### Strict not equal

* _symbol_: `!==`
* _pronunciation_: "not double equal" "not strict equal"
* _examples_:
```javascript
3 !== "3" // returns true
```

### Greater than

* _symbol_: `>`
* _pronunciation_: "greater than"
* _examples_:
```javascript
5 > 2 // returns true
```

### Greater than or equal to

* _symbol_: `>=`
* _pronunciation_: "greater than or equal to"
* _examples_:
```javascript
5 >= 5 // returns true
```

### Less than

* _symbol_: `<`
* _pronunciation_: "less than"
* _examples_:
```javascript
5 < 2 // returns false
```

### Less than or equal to

* _symbol_: `<=`
* _pronunciation_: "less than or equal to"
* _examples_:
```javascript
5 <= 2 // returns false
```

### Modulus 

* _symbol_: `%`
* _pronunciation_: "mod-you-luss"
* _examples_:
```javascript
12 % 5 // returns 2
```

### Increment

* _symbol_: `++`
* _pronunciation_: "adds one to its operand"
* _examples_:
```javascript
var x = 3;
x++;      // x is 4
```

### If statement 

* _symbol_: `if`
* _pronunciation_: `if`
* _examples_:
```javascript
if ( 3 === 3) {
"do this" // do this is done
}
```

### else statement 

* _symbol_: `else`
* _pronunciation_: "else"
* _examples_:
```javascript
if ( 4 === 5 ) {
    "do this"
} else { "do these" } // do these are done
```

### switch statement

* _symbol_: `switch`
* _pronunciation_: "switch"
* _examples_:
```javascript
switch (expression) {
   case label_1:
      statements_1
      [break;]
   case label_2:
      statements_2
      [break;]
   ...
   default:
      statements_def
      [break;]
}                      // if a case item matches it is run, if there is no case for the item the default is run
```

### Return statement

* _symbol_: `return`
* _pronunciation_: "return"
* _examples_:
```javascript
return;
return true;
return false;
return x;      // ends function execution and specifies a value to be returned
```

### for statement

* _symbol_: `for ( [initialExpression]; [condition]; [incrementExpression] )`
* _pronunciation_: "for"
* _examples_:
```javascript
for ( var i = 0; i < 5; i++ ) {
    console.log(i);
}                      // console logs 0-4 in a line
```

### do while statement 

* _symbol_:    `do -statement- while (condition);`
* _pronunciation_: "do while"
* _examples_:
```javascript
do {
    i += 1;
    console.log(i);
    } while ( i < 3);
}
    
              // consoles until i is no longer less than 3
```