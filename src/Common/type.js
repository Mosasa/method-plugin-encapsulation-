function is (value) {
    let resultStr = Object.prototype.toString.call(value);
    let result = resultStr.substring(8, resultStr.length - 1);
    return result;
  }
  function isArray (value) {
    return is(value) === 'Array'
  }
  function isString (value) {
    return is(value) === 'String'
  }
  function isBool (value) {
    return is(value) === 'Boolean'
  }
  function isObject (value) {
    return is(value) === 'Object'
  }
  function isNumber (value) {
    return is(value) === 'Number'
  }
  function isNull (value) {
    return is(value) === 'Null'
  }
  function isUndefined (value) {
    return is(value) === 'Undefined'
  }
  function isFunction (value) {
    return is(value) === 'Undefined'
  }
  