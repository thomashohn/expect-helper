# expect-helper

Expect helper for I.expect calls

Installation:

```sh
npm i @codeceptjs/expect-helper --save
```

Enable it inside codecept conf file:

```js
// inside codecept.conf.js/ts
{
  helpers: {
    Playwright: {...},
    ExpectHelper: {
      require: '@codeceptjs/expect-helper'
    },
  }
}
```

## Usage

### I.expectEqual

Asserts that the actual value is equal to the expected value.

```js
I.expectEqual(actualValue, expectedValue, customErrorMsg = '')
```

- `actualValue`: The actual value to be compared.
- `expectedValue`: The expected value to compare against.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectEqual(5, 5); // Passes
I.expectEqual('hello', 'hello'); // Passes
I.expectEqual(5, 10, 'Values are not equal'); // Fails with custom error message
```

### I.expectNotEqual

Asserts that the actual value is not equal to the expected value.

```js
I.expectNotEqual(actualValue, expectedValue, customErrorMsg = '')
```

- `actualValue`: The actual value to be compared.
- `expectedValue`: The expected value to compare against.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectNotEqual(5, 10); // Passes
I.expectNotEqual('hello', 'world'); // Passes
I.expectNotEqual(5, 5, 'Values should not be equal'); // Fails with custom error message
```

### I.expectDeepEqual

Asserts that the actual value is deeply equal to the expected value.

```js
I.expectDeepEqual(actualValue, expectedValue, customErrorMsg = '')
```

- `actualValue`: The actual value to be compared.
- `expectedValue`: The expected value to compare against.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectDeepEqual({ a: 1 }, { a: 1 }); // Passes
I.expectDeepEqual([1, 2, 3], [1, 2, 3]); // Passes
I.expectDeepEqual({ a: 1 }, { a: 2 }, 'Objects are not deeply equal'); // Fails with custom error message
```

### I.expectNotDeepEqual

Asserts that the actual value is not deeply equal to the expected value.

```js
I.expectNotDeepEqual(actualValue, expectedValue, customErrorMsg = '')
```

- `actualValue`: The actual value to be compared.
- `expectedValue`: The expected value to compare against.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectNotDeepEqual({ a: 1 }, { a: 2 }); // Passes
I.expectNotDeepEqual([1, 2, 3], [4, 5, 6]); // Passes
I.expectNotDeepEqual({ a: 1 }, { a: 1 }, 'Objects should not be deeply equal'); // Fails with custom error message
```

### I.expectContain

Asserts that the actual value contains the expected value.

```js
I.expectContain(actualValue, expectedValueToContain, customErrorMsg = '')
```

- `actualValue`: The actual value to be checked.
- `expectedValueToContain`: The value expected to be contained within the actual value.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectContain([1, 2, 3], 2); // Passes
I.expectContain('hello world', 'world'); // Passes
I.expectContain([1, 2, 3], 4, 'Array does not contain the value'); // Fails with custom error message
```

### I.expectNotContain

Asserts that the actual value does not contain the expected value.

```js
I.expectNotContain(actualValue, expectedValueToNotContain, customErrorMsg = '')
```

- `actualValue`: The actual value to be checked.
- `expectedValueToNotContain`: The value expected not to be contained within the actual value.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectNotContain([1, 2, 3], 4); // Passes
I.expectNotContain('hello world', 'universe'); // Passes
I.expectNotContain([1, 2, 3], 2, 'Array should not contain the value'); // Fails with custom error message
```

### I.expectStartsWith

Asserts that the actual value starts with the expected value.

```js
I.expectStartsWith(actualValue, expectedValueToStartWith, customErrorMsg = '')
```

- `actualValue`: The actual value to be checked.
- `expectedValueToStartWith`: The value expected to be at the start of the actual value.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectStartsWith('hello world', 'hello'); // Passes
I.expectStartsWith([1, 2, 3], 1); // Passes
I.expectStartsWith('hello world', 'world', 'String does not start with the value'); // Fails with custom error message
```

### I.expectNotStartsWith

Asserts that the actual value does not start with the expected value.

```js
I.expectNotStartsWith(actualValue, expectedValueToNotStartWith, customErrorMsg = '')
```

- `actualValue`: The actual value to be checked.
- `expectedValueToNotStartWith`: The value expected not to be at the start of the actual value.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectNotStartsWith('hello world', 'world'); // Passes
I.expectNotStartsWith([1, 2, 3], 2); // Passes
I.expectNotStartsWith('hello world', 'hello', 'String should not start with the value'); // Fails with custom error message
```

### I.expectEndsWith

Asserts that the actual value ends with the expected value.

```js
I.expectEndsWith(actualValue, expectedValueToEndWith, customErrorMsg = '')
```

- `actualValue`: The actual value to be checked.
- `expectedValueToEndWith`: The value expected to be at the end of the actual value.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectEndsWith('hello world', 'world'); // Passes
I.expectEndsWith([1, 2, 3], 3); // Passes
I.expectEndsWith('hello world', 'hello', 'String does not end with the value'); // Fails with custom error message
```

### I.expectNotEndsWith

Asserts that the actual value does not end with the expected value.

```js
I.expectNotEndsWith(actualValue, expectedValueToNotEndWith, customErrorMsg = '')
```

- `actualValue`: The actual value to be checked.
- `expectedValueToNotEndWith`: The value expected not to be at the end of the actual value.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectNotEndsWith('hello world', 'hello'); // Passes
I.expectNotEndsWith([1, 2, 3], 2); // Passes
I.expectNotEndsWith('hello world', 'world', 'String should not end with the value'); // Fails with custom error message
```

### I.expectJsonSchema

Asserts that the target data matches the provided JSON schema using AJV.

```js
I.expectJsonSchema(targetData, jsonSchema, customErrorMsg = '')
```

- `targetData`: The data to be validated against the schema.
- `jsonSchema`: The JSON schema to validate against.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'number' }
  },
  required: ['name', 'age']
};

I.expectJsonSchema({ name: 'John', age: 30 }, schema); // Passes
I.expectJsonSchema({ name: 'John' }, schema, 'Data does not match schema'); // Fails with custom error message
```

### I.expectJsonSchemaUsingAJV

Asserts that the target data matches the provided JSON schema using AJV with options.

```js
I.expectJsonSchemaUsingAJV(targetData, jsonSchema, customErrorMsg = '', ajvOptions = { allErrors: true })
```

- `targetData`: The data to be validated against the schema.
- `jsonSchema`: The JSON schema to validate against.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.
- `ajvOptions`: (Optional) AJV options to customize validation.

**Example:**

```js
const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'number' }
  },
  required: ['name', 'age']
};

const ajvOptions = { allErrors: true, verbose: true };

I.expectJsonSchemaUsingAJV({ name: 'John', age: 30 }, schema, '', ajvOptions); // Passes
I.expectJsonSchemaUsingAJV({ name: 'John' }, schema, 'Data does not match schema', ajvOptions); // Fails with custom error message
```

### I.expectHasProperty

Asserts that the target data has the specified property.

```js
I.expectHasProperty(targetData, propertyName, customErrorMsg = '')
```

- `targetData`: The data to be checked.
- `propertyName`: The property expected to be present in the target data.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectHasProperty({ name: 'John', age: 30 }, 'name'); // Passes
I.expectHasProperty({ name: 'John', age: 30 }, 'address', 'Property not found'); // Fails with custom error message
```

### I.expectHasAProperty

Asserts that the target data has a specified property.

```js
I.expectHasAProperty(targetData, propertyName, customErrorMsg = '')
```

- `targetData`: The data to be checked.
- `propertyName`: The property expected to be present in the target data.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectHasAProperty({ name: 'John', age: 30 }, 'age'); // Passes
I.expectHasAProperty({ name: 'John', age: 30 }, 'address', 'Property not found'); // Fails with custom error message
```

### I.expectToBeA

Asserts that the target data is of the specified type.

```js
I.expectToBeA(targetData, type, customErrorMsg = '')
```

- `targetData`: The data to be checked.
- `type`: The expected type of the target data.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectToBeA('hello', 'string'); // Passes
I.expectToBeA(123, 'number'); // Passes
I.expectToBeA('hello', 'number', 'Data is not of the expected type'); // Fails with custom error message
```

### I.expectToBeAn

Asserts that the target data is of the specified type.

```js
I.expectToBeAn(targetData, type, customErrorMsg = '')
```

- `targetData`: The data to be checked.
- `type`: The expected type of the target data.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectToBeAn([], 'array'); // Passes
I.expectToBeAn({}, 'object'); // Passes
I.expectToBeAn([], 'object', 'Data is not of the expected type'); // Fails with custom error message
```

### I.expectMatchRegex

Asserts that the target data matches the specified regex.

```js
I.expectMatchRegex(targetData, regex, customErrorMsg = '')
```

- `targetData`: The data to be checked.
- `regex`: The regex pattern to match against.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectMatchRegex('hello123', /^[a-z]+[0-9]+$/); // Passes
I.expectMatchRegex('hello', /^[a-z]+[0-9]+$/, 'Data does not match the regex'); // Fails with custom error message
```

### I.expectLengthOf

Asserts that the target data has the specified length.

```js
I.expectLengthOf(targetData, length, customErrorMsg = '')
```

- `targetData`: The data to be checked.
- `length`: The expected length of the target data.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectLengthOf([1, 2, 3], 3); // Passes
I.expectLengthOf('hello', 5); // Passes
I.expectLengthOf([1, 2, 3], 4, 'Data does not have the expected length'); // Fails with custom error message
```

### I.expectEmpty

Asserts that the target data is empty.

```js
I.expectEmpty(targetData, customErrorMsg = '')
```

- `targetData`: The data to be checked.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectEmpty([]); // Passes
I.expectEmpty(''); // Passes
I.expectEmpty([1, 2, 3], 'Data is not empty'); // Fails with custom error message
```

### I.expectTrue

Asserts that the target data is true.

```js
I.expectTrue(targetData, customErrorMsg = '')
```

- `targetData`: The data to be checked.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectTrue(true); // Passes
I.expectTrue(1 === 1); // Passes
I.expectTrue(false, 'Data is not true'); // Fails with custom error message
```

### I.expectFalse

Asserts that the target data is false.

```js
I.expectFalse(targetData, customErrorMsg = '')
```

- `targetData`: The data to be checked.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectFalse(false); // Passes
I.expectFalse(1 === 2); // Passes
I.expectFalse(true, 'Data is not false'); // Fails with custom error message
```

### I.expectAbove

Asserts that the target data is above the specified value.

```js
I.expectAbove(targetData, aboveThan, customErrorMsg = '')
```

- `targetData`: The data to be checked.
- `aboveThan`: The value that the target data should be above.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectAbove(10, 5); // Passes
I.expectAbove(10, 15, 'Data is not above the specified value'); // Fails with custom error message
```

### I.expectBelow

Asserts that the target data is below the specified value.

```js
I.expectBelow(targetData, belowThan, customErrorMsg = '')
```

- `targetData`: The data to be checked.
- `belowThan`: The value that the target data should be below.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectBelow(5, 10); // Passes
I.expectBelow(15, 10, 'Data is not below the specified value'); // Fails with custom error message
```

### I.expectLengthAboveThan

Asserts that the target data has a length above the specified value.

```js
I.expectLengthAboveThan(targetData, lengthAboveThan, customErrorMsg = '')
```

- `targetData`: The data to be checked.
- `lengthAboveThan`: The length that the target data should be above.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectLengthAboveThan([1, 2, 3, 4], 3); // Passes
I.expectLengthAboveThan('hello', 10, 'Data length is not above the specified value'); // Fails with custom error message
```

### I.expectLengthBelowThan

Asserts that the target data has a length below the specified value.

```js
I.expectLengthBelowThan(targetData, lengthBelowThan, customErrorMsg = '')
```

- `targetData`: The data to be checked.
- `lengthBelowThan`: The length that the target data should be below.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectLengthBelowThan([1, 2, 3], 5); // Passes
I.expectLengthBelowThan('hello', 3, 'Data length is not below the specified value'); // Fails with custom error message
```

### I.expectEqualIgnoreCase

Asserts that the actual value is equal to the expected value, ignoring case.

```js
I.expectEqualIgnoreCase(actualValue, expectedValue, customErrorMsg = '')
```

- `actualValue`: The actual value to be compared.
- `expectedValue`: The expected value to compare against.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectEqualIgnoreCase('Hello', 'hello'); // Passes
I.expectEqualIgnoreCase('WORLD', 'world'); // Passes
I.expectEqualIgnoreCase('Hello', 'World', 'Values are not equal ignoring case'); // Fails with custom error message
```

### I.expectDeepMembers

Asserts that the members of two arrays are deeply equal.

```js
I.expectDeepMembers(actualValue, expectedValue, customErrorMsg = '')
```

- `actualValue`: The actual array to be compared.
- `expectedValue`: The expected array to compare against.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectDeepMembers([{ a: 1 }, { b: 2 }], [{ a: 1 }, { b: 2 }]); // Passes
I.expectDeepMembers([{ a: 1 }, { b: 2 }], [{ a: 1 }, { b: 3 }], 'Arrays are not deeply equal'); // Fails with custom error message
```

### I.expectDeepIncludeMembers

Asserts that an array is a superset of another array.

```js
I.expectDeepIncludeMembers(superset, set, customErrorMsg = '')
```

- `superset`: The array expected to be a superset.
- `set`: The array expected to be included in the superset.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectDeepIncludeMembers([{ a: 1 }, { b: 2 }, { c: 3 }], [{ a: 1 }, { b: 2 }]); // Passes
I.expectDeepIncludeMembers([{ a: 1 }, { b: 2 }], [{ a: 1 }, { c: 3 }], 'Superset does not include all members'); // Fails with custom error message
```

### I.expectDeepEqualExcluding

Asserts that the members of two JSON objects are deeply equal, excluding some properties.

```js
I.expectDeepEqualExcluding(actualValue, expectedValue, fieldsToExclude, customErrorMsg = '')
```

- `actualValue`: The actual JSON object to be compared.
- `expectedValue`: The expected JSON object to compare against.
- `fieldsToExclude`: The properties to exclude from the comparison.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
const actual = { a: 1, b: 2, c: 3 };
const expected = { a: 1, b: 2, c: 4 };
I.expectDeepEqualExcluding(actual, expected, ['c']); // Passes
I.expectDeepEqualExcluding(actual, expected, ['b'], 'Objects are not deeply equal excluding properties'); // Fails with custom error message
```

### I.expectMatchesPattern

Asserts that a JSON object matches a provided pattern.

```js
I.expectMatchesPattern(actualValue, expectedPattern, customErrorMsg = '')
```

- `actualValue`: The actual JSON object to be checked.
- `expectedPattern`: The pattern to match against.
- `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
const actual = { name: 'John', age: 30 };
const pattern = { name: 'John' };
I.expectMatchesPattern(actual, pattern); // Passes
I.expectMatchesPattern(actual, { name: 'Doe' }, 'Object does not match the pattern'); // Fails with custom error message
```

### I.expectFail

Forces the current test to fail with an optional custom error message.

```js
I.expectFail(customErrorMsg = 'expect fail')
```

* `customErrorMsg`: (Optional) Custom error message to display when the assertion fails.

**Example:**

```js
I.expectFail('This step should not be reached'); // Fails with custom error message
```

### I.expectOk

Asserts that a value is truthy.

```js
I.expectOk(actualValue, customErrorMsg = '')
```

* `actualValue`: The value to check.
* `customErrorMsg`: (Optional) Custom error message to display if the assertion fails.

**Example:**

```js
I.expectOk(true); // Passes
I.expectOk(1); // Passes
I.expectOk('text'); // Passes
I.expectOk(false, 'Expected value to be truthy'); // Fails with custom error message
```


---

This documentation provides a comprehensive overview of the `ExpectHelper` class and its methods. Each method is designed to perform specific assertions, making it easier to write and maintain tests. The examples provided demonstrate how to use each method effectively.


### License MIT

MIT License
