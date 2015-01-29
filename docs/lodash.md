### [`_.every`](http://lodash.com/docs#every)

* _params:_
  * `Array`|`Object`|`String` `collection` to iterate over
  * `Function`|`Object`|`String` `predicate` considered for each iteration
    * a callback `Function`
      * is invoked with: `value`, `index`|`key`, `collection`
      * should return `Boolean` whether iteration passes `predicate`
    * an `Object` is compared like [`_.matches`](http://lodash.com/docs#matches)
    * a `String` is compared like [`_.property`](http://lodash.com/docs#property)
  * `thisArg` binding for `predicate`
* _returns:_
  * `Boolean` whether `predicate` passes for every `value` in `collection`
* _differences:_
  * not just for `Array`; can be run with `Object` and `String` as `collection`
  * `predicate` can be `Object` or `String`...?
  
  ### [`_.filter`]
  
  * iterates over elements of collection, returning an array of all elements predicate returns truthy for. the predicate is bound to thisArg and invoked with three arguments (value, index, key, collection)
  * collection `array object string`: the collection to iterate over
  * If an object is provided for predicate the created .matches style the callback returns true for elements that have properties of the given object
  * [predicate=_.identity] `function object string` the function invoked per iteration. If a property name or object is provided it is used to create a property or matches.
  * [thisArg] the this binding of predicate
  
  Returns the new filtered array with that passes.
  
  ### _.prototype.reverse()
  
  * Reverses the wrapped array so the first elemetn becomes the last, the second element becomes the second to last and so on.
  * this method mutates the wrapped array
  * returns the new reversed lodash object
  
  ### _.forEach()
  
  * iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg and invoked with three arguments, (value, index|key, collection) iterator functions may exit iteration early by explicitly returning false.
  * As with other collectons methods, objects with a length property are iterated like arrays. to avoid this behavior _.forIn or _.forOwn may be used for object iteration.
  * `array object string` the collection to iterate over
  * [iteratee=_.identity] Function: the function invoked per iteration
  * [thisArg] the this binding of iteratee
  * returns collection
  
  ### _.reject 
  
  * the opposite of filter. this method returns the elements of collection that predicate does not return truthy for
  * If a property name is provided for predicate the created property style callback returns the property value of the given element
  * If an object provided for predicate the created matches the style callback returns true for elemeents that have the peropertis of the given object else false.
  * arguments array/object/string
  * function invoked per iteration.  If a property name or object is provided it is used to create a .property or .matches style callback respectively.
  [thisArg] the this binding of predicate
  * returns the new filtered array
  
  ### _.where 
  
  * performs a deep comparison between each element in collection and the source object, returning an array of all elements that have equivalent property values.
  * arguments, array, object, string. the collection to search
  * source, object, the object of property values to match
  * returns the new filtered array.
  
  