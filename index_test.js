import { expect } from 'chai';
import sinon from 'sinon';
import ExpectHelper from './index.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { output } = require('codeceptjs');

let I;

const goodApple = {
  skin: 'thin',
  colors: ['red', 'green', 'yellow'],
  taste: 10,
}
const badApple = {
  colors: ['brown'],
  taste: 0,
  worms: 2,
}
const fruitSchema = {
  title: 'fresh fruit schema v1',
  type: 'object',
  required: ['skin', 'colors', 'taste'],
  properties: {
    colors: {
      type: 'array',
      minItems: 1,
      uniqueItems: true,
      items: {
        type: 'string',
      },
    },
    skin: {
      type: 'string',
    },
    taste: {
      type: 'number',
      minimum: 5,
    },
  },
}

describe('ExpectHelper', () => {
  let expectHelper;

  beforeEach(() => {
    I = expectHelper = new ExpectHelper();
    sinon.stub(output, 'step');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should assert equality', () => {
    expectHelper.expectEqual(1, 1);
  });

  it('should fail to assert equality', () => {
    expect(() => expectHelper.expectEqual(1, 2)).to.throw();
  });

  it('should assert inequality', () => {
    expectHelper.expectNotEqual(1, 2);
  });

  it('should fail to assert inequality', () => {
    expect(() => expectHelper.expectNotEqual(1, 1)).to.throw();
  });

  it('should assert deep equality', () => {
    expectHelper.expectDeepEqual({ a: 1 }, { a: 1 });
  });

  it('should fail to assert deep equality', () => {
    expect(() => expectHelper.expectDeepEqual({ a: 1 }, { a: 2 })).to.throw();
  });

  it('should assert deep inequality', () => {
    expectHelper.expectNotDeepEqual({ a: 1 }, { a: 2 });
  });

  it('should fail to assert deep inequality', () => {
    expect(() => expectHelper.expectNotDeepEqual({ a: 1 }, { a: 1 })).to.throw();
  });

  it('should assert containment', () => {
    expectHelper.expectContain([1, 2, 3], 2);
  });

  it('should fail to assert containment', () => {
    expect(() => expectHelper.expectContain([1, 2, 3], 4)).to.throw();
  });

  it('should assert non-containment', () => {
    expectHelper.expectNotContain([1, 2, 3], 4);
  });

  it('should fail to assert non-containment', () => {
    expect(() => expectHelper.expectNotContain([1, 2, 3], 2)).to.throw();
  });

  it('should assert starts with', () => {
    expectHelper.expectStartsWith('hello world', 'hello');
  });

  it('should fail to assert starts with', () => {
    expect(() => expectHelper.expectStartsWith('hello world', 'world')).to.throw();
  });

  it('should assert does not start with', () => {
    expectHelper.expectNotStartsWith('hello world', 'world');
  });

  it('should fail to assert does not start with', () => {
    expect(() => expectHelper.expectNotStartsWith('hello world', 'hello')).to.throw();
  });

  it('should assert ends with', () => {
    expectHelper.expectEndsWith('hello world', 'world');
  });

  it('should fail to assert ends with', () => {
    expect(() => expectHelper.expectEndsWith('hello world', 'hello')).to.throw();
  });

  it('should assert does not end with', () => {
    expectHelper.expectNotEndsWith('hello world', 'hello');
  });

  it('should fail to assert does not end with', () => {
    expect(() => expectHelper.expectNotEndsWith('hello world', 'world')).to.throw();
  });

  it('should assert JSON schema', () => {
    const schema = { type: 'object', properties: { a: { type: 'number' } } };
    expectHelper.expectJsonSchema({ a: 1 }, schema);
  });

  it('should fail to assert JSON schema', () => {
    const schema = { type: 'object', properties: { a: { type: 'number' } } };
    expect(() => expectHelper.expectJsonSchema({ a: '1' }, schema)).to.throw();
  });

  it('should assert JSON schema using AJV', () => {
    const schema = { type: 'object', properties: { a: { type: 'number' } } };
    expectHelper.expectJsonSchemaUsingAJV({ a: 1 }, schema);
  });

  it('should fail to assert JSON schema using AJV', () => {
    const schema = { type: 'object', properties: { a: { type: 'number' } } };
    expect(() => expectHelper.expectJsonSchemaUsingAJV({ a: '1' }, schema)).to.throw();
  });

  it('should assert has property', () => {
    expectHelper.expectHasProperty({ a: 1 }, 'a');
  });

  it('should fail to assert has property', () => {
    expect(() => expectHelper.expectHasProperty({ a: 1 }, 'b')).to.throw();
  });

  it('should assert has a property', () => {
    expectHelper.expectHasAProperty({ a: 1 }, 'a');
  });

  it('should fail to assert has a property', () => {
    expect(() => expectHelper.expectHasAProperty({ a: 1 }, 'b')).to.throw();
  });

  it('should assert type', () => {
    expectHelper.expectToBeA('hello', 'string');
  });

  it('should fail to assert type', () => {
    expect(() => expectHelper.expectToBeA('hello', 'number')).to.throw();
  });

  it('should assert type (an)', () => {
    expectHelper.expectToBeAn([], 'array');
  });

  it('should fail to assert type (an)', () => {
    expect(() => expectHelper.expectToBeAn({}, 'array')).to.throw();
  });

  it('should assert matches regex', () => {
    expectHelper.expectMatchRegex('hello', /^h/);
  });

  it('should fail to assert matches regex', () => {
    expect(() => expectHelper.expectMatchRegex('hello', /^b/)).to.throw();
  });

  it('should assert length', () => {
    expectHelper.expectLengthOf([1, 2, 3], 3);
  });

  it('should fail to assert length', () => {
    expect(() => expectHelper.expectLengthOf([1, 2, 3], 2)).to.throw();
  });

  it('should assert empty', () => {
    expectHelper.expectEmpty([]);
  });

  it('should fail to assert empty', () => {
    expect(() => expectHelper.expectEmpty([1])).to.throw();
  });

  it('should assert true', () => {
    expectHelper.expectTrue(true);
  });

  it('should fail to assert true', () => {
    expect(() => expectHelper.expectTrue(false)).to.throw();
  });

  it('should assert false', () => {
    expectHelper.expectFalse(false);
  });

  it('should fail to assert false', () => {
    expect(() => expectHelper.expectFalse(true)).to.throw();
  });

  it('should assert above', () => {
    expectHelper.expectAbove(10, 5);
  });

  it('should fail to assert above', () => {
    expect(() => expectHelper.expectAbove(5, 10)).to.throw();
  });

  it('should assert below', () => {
    expectHelper.expectBelow(5, 10);
  });

  it('should fail to assert below', () => {
    expect(() => expectHelper.expectBelow(10, 5)).to.throw();
  });

  it('should assert length above', () => {
    expectHelper.expectLengthAboveThan([1, 2, 3, 4], 3);
  });

  it('should fail to assert length above', () => {
    expect(() => expectHelper.expectLengthAboveThan([1, 2], 3)).to.throw();
  });

  it('should assert length below', () => {
    expectHelper.expectLengthBelowThan([1, 2], 3);
  });

  it('should fail to assert length below', () => {
    expect(() => expectHelper.expectLengthBelowThan([1, 2, 3, 4], 3)).to.throw();
  });

  it('should assert equal ignoring case', () => {
    expectHelper.expectEqualIgnoreCase('hello', 'HELLO');
  });

  it('should fail to assert equal ignoring case', () => {
    expect(() => expectHelper.expectEqualIgnoreCase('hello', 'WORLD')).to.throw();
  });

  it('should assert deep members', () => {
    expectHelper.expectDeepMembers([{ a: 1 }], [{ a: 1 }]);
  });

  it('should fail to assert deep members', () => {
    expect(() => expectHelper.expectDeepMembers([{ a: 1 }], [{ a: 2 }])).to.throw();
  });

  it('should assert deep include members', () => {
    expectHelper.expectDeepIncludeMembers([{ a: 1 }, { b: 2 }], [{ a: 1 }]);
  });

  it('should fail to assert deep include members', () => {
    expect(() => expectHelper.expectDeepIncludeMembers([{ a: 1 }], [{ b: 2 }])).to.throw();
  });

  it('should assert deep equal excluding fields', () => {
    expectHelper.expectDeepEqualExcluding({ a: 1, b: 2 }, { a: 1, b: 3 }, ['b']);
  });

  it('should fail to assert deep equal excluding fields', () => {
    expect(() => expectHelper.expectDeepEqualExcluding({ a: 1, b: 2 }, { a: 2, b: 3 }, ['b'])).to.throw();
  });

  it('should assert matches pattern', () => {
    expectHelper.expectMatchesPattern({ a: 1, b: 2 }, { a: 1, b: 2 });
  });

  it('should fail to assert matches pattern', () => {
    expect(() => expectHelper.expectMatchesPattern({ a: 1, b: 2 }, { a: 2, b: 3 })).to.throw();
  });
});


describe('#expectEqual', () => {
  it('should not show error', () => {
    I.expectEqual('a', 'a')
  })

  it('should show error', () => {
    try {
      I.expectEqual('a', 'b')
    } catch (e) {
      expect(e.message).to.eq("expected 'a' to equal 'b'")
    }
  })
})

describe('#expectNotEqual', () => {
  it('should not show error', () => {
    I.expectNotEqual('a', 'b')
  })

  it('should show error', () => {
    try {
      I.expectNotEqual('a', 'a')
    } catch (e) {
      expect(e.message).to.eq("expected 'a' to not equal 'a'")
    }
  })
})

describe('#expectContain', () => {
  it('should not show error', () => {
    I.expectContain('abc', 'a')
  })

  it('should show error', () => {
    try {
      I.expectContain('abc', 'd')
    } catch (e) {
      expect(e.message).to.eq("expected 'abc' to include 'd'")
    }
  })

  describe('#expectNotContain', () => {
    it('should not show error', () => {
      I.expectNotContain('abc', 'd')
    })

    it('should show error', () => {
      try {
        I.expectNotContain('abc', 'a')
      } catch (e) {
        expect(e.message).to.eq("expected 'abc' to not include 'a'")
      }
    })
  })

  describe('#expectStartsWith', () => {
    it('should not show error', () => {
      I.expectStartsWith('abc', 'a')
    })

    it('should show error', () => {
      try {
        I.expectStartsWith('abc', 'b')
      } catch (e) {
        expect(e.message).to.eq('Expected "abc" to start with "b"')
      }
    })
  })

  describe('#expectNotStartsWith', () => {
    it('should not show error', () => {
      I.expectNotStartsWith('abc', 'b')
    })

    it('should show error', () => {
      try {
        I.expectNotStartsWith('abc', 'a')
      } catch (e) {
        expect(e.message).to.eq('Expected "abc" not to start with "a"')
      }
    })
  })

  describe('#expectEndsWith', () => {
    it('should not show error', () => {
      I.expectEndsWith('abc', 'c')
    })

    it('should show error', () => {
      try {
        I.expectEndsWith('abc', 'd')
      } catch (e) {
        expect(e.message).to.eq('Expected "abc" to end with "d"')
      }
    })
  })

  describe('#expectNotEndsWith', () => {
    it('should not show error', () => {
      I.expectNotEndsWith('abc', 'd')
    })

    it('should show error', () => {
      try {
        I.expectNotEndsWith('abc', 'd')
      } catch (e) {
        expect(e.message).to.eq('Expected "abc" not to end with "c"')
      }
    })
  })

  describe('#expectJsonSchema', () => {
    it('should not show error', () => {
      I.expectJsonSchema(goodApple, fruitSchema)
    })

    it('should show error', () => {
      try {
        I.expectJsonSchema(badApple, fruitSchema)
      } catch (e) {
        expect(e.message).to.contain('expected data to match json-schema')
      }
    })
  })

  describe('#expectHasProperty', () => {
    it('should not show error', () => {
      I.expectHasProperty(goodApple, 'skin')
    })

    it('should show error', () => {
      try {
        I.expectHasProperty(badApple, 'skin')
      } catch (e) {
        expect(e.message).to.contain('expected { Object (colors, taste')
      }
    })
  })

  describe('#expectHasAProperty', () => {
    it('should not show error', () => {
      I.expectHasAProperty(goodApple, 'skin')
    })

    it('should show error', () => {
      try {
        I.expectHasAProperty(badApple, 'skin')
      } catch (e) {
        expect(e.message).to.contain('expected { Object (colors, taste')
      }
    })
  })

  describe('#expectToBeA', () => {
    it('should not show error', () => {
      I.expectToBeA(goodApple, 'object')
    })
  })

  describe('#expectToBeAn', () => {
    it('should not show error', () => {
      I.expectToBeAn(goodApple, 'object')
    })

    it('should show error', () => {
      try {
        I.expectToBeAn(badApple, 'skin')
      } catch (e) {
        expect(e.message).to.contain('expected { Object (colors, taste')
      }
    })
  })

  describe('#expectMatchRegex', () => {
    it('should not show error', () => {
      I.expectMatchRegex('goodApple', /good/)
    })

    it('should show error', () => {
      try {
        I.expectMatchRegex('Apple', /good/)
      } catch (e) {
        expect(e.message).to.contain('to match /good/')
      }
    })
  })

  describe('#expectLengthOf', () => {
    it('should not show error', () => {
      I.expectLengthOf('good', 4)
    })

    it('should show error', () => {
      try {
        I.expectLengthOf('Apple', 4)
      } catch (e) {
        expect(e.message).to.contain('to have a length')
      }
    })
  })

  describe('#expectTrue', () => {
    it('should not show error', () => {
      I.expectTrue(true)
    })

    it('should show error', () => {
      try {
        I.expectTrue(false)
      } catch (e) {
        expect(e.message).to.contain('expected false to be true')
      }
    })
  })

  describe('#expectEmpty', () => {
    it('should not show error', () => {
      I.expectEmpty('')
    })

    it('should show error', () => {
      try {
        I.expectEmpty('false')
      } catch (e) {
        expect(e.message).to.contain("expected 'false' to be empty")
      }
    })
  })

  describe('#expectFalse', () => {
    it('should not show error', () => {
      I.expectFalse(false)
    })

    it('should show error', () => {
      try {
        I.expectFalse(true)
      } catch (e) {
        expect(e.message).to.contain('expected true to be false')
      }
    })
  })

  describe('#expectAbove', () => {
    it('should not show error', () => {
      I.expectAbove(2, 1)
    })

    it('should show error', () => {
      try {
        I.expectAbove(1, 2)
      } catch (e) {
        expect(e.message).to.contain('expected 1 to be above 2')
      }
    })
  })

  describe('#expectBelow', () => {
    it('should not show error', () => {
      I.expectBelow(1, 2)
    })

    it('should show error', () => {
      try {
        I.expectBelow(2, 1)
      } catch (e) {
        expect(e.message).to.contain('expected 2 to be below 1')
      }
    })
  })

  describe('#expectLengthAboveThan', () => {
    it('should not show error', () => {
      I.expectLengthAboveThan('hello', 4)
    })

    it('should show error', () => {
      try {
        I.expectLengthAboveThan('hello', 5)
      } catch (e) {
        expect(e.message).to.contain('to have a length above 5')
      }
    })
  })

  describe('#expectLengthBelowThan', () => {
    it('should not show error', () => {
      I.expectLengthBelowThan('hello', 6)
    })

    it('should show error', () => {
      try {
        I.expectLengthBelowThan('hello', 4)
      } catch (e) {
        expect(e.message).to.contain('to have a length below 4')
      }
    })
  })

  describe('#expectLengthBelowThan', () => {
    it('should not show error', () => {
      I.expectEqualIgnoreCase('hEllo', 'hello')
    })

    it('should show error', () => {
      try {
        I.expectEqualIgnoreCase('hEllo', 'hell0')
      } catch (e) {
        expect(e.message).to.contain('expected \'hEllo\' to equal \'hell0\'')
      }
    })
  })

  describe('#expectDeepMembers', () => {
    it('should not show error', () => {
      I.expectDeepMembers([1, 2, 3], [1, 2, 3])
    })

    it('should show error', () => {
      try {
        I.expectDeepMembers([1, 2, 3], [3])
      } catch (e) {
        expect(e.message).to.contain('expected [ 1, 2, 3 ] to have the same members')
      }
    })
  })

  describe('#expectDeepIncludeMembers', () => {
    it('should not show error', () => {
      I.expectDeepIncludeMembers([3, 4, 5, 6], [3, 4, 5])
    })

    it('should show error', () => {
      try {
        I.expectDeepIncludeMembers([3, 4, 5], [3, 4, 5, 6])
      } catch (e) {
        expect(e.message).to.contain('expected [ 3, 4, 5 ] to be a superset of [ 3, 4, 5, 6 ]')
      }
    })
  })

  describe('#expectDeepEqualExcluding', () => {
    it('should not show error', () => {
      I.expectDeepEqualExcluding({ a: 1, b: 2 }, { b: 2, a: 1, c: 3 }, 'c')
    })

    it('should show error', () => {
      try {
        I.expectDeepEqualExcluding({ a: 1, b: 2 }, { b: 2, a: 1, c: 3 }, 'a')
      } catch (e) {
        expect(e.message).to.contain('expected { b: 2 } to deeply equal')
      }
    })
  })

  describe('#expectLengthBelowThan', () => {
    it('should not show error', () => {
      I.expectMatchesPattern('123', /123/)
    })

    it('should show error', () => {
      try {
        I.expectMatchesPattern('123', /1235/)
      } catch (e) {
        expect(e.message).to.contain("didn't match target /1235/")
      }
    })
  })

  describe('#expectFail', () => {
    it('should show error', () => {
      try {
        I.expectFail('custom failure message')
      } catch (e) {
        expect(e.message).to.contain('custom failure message')
      }
    })

    it('should show default error', () => {
      try {
        I.expectFail()
      } catch (e) {
        expect(e.message).to.contain('expect fail')
      }
    })
  })

  describe('#expectOk', () => {
    it('should not show error', () => {
      I.expectOk(true)
      I.expectOk(1)
      I.expectOk('text')
      I.expectOk({})
    })

    it('should show error', () => {
      try {
        I.expectOk(false, 'expected value to be ok')
      } catch (e) {
        expect(e.message).to.contain('expected value to be ok')
      }
    })

    it('should show default chai error', () => {
      try {
        I.expectOk(0)
      } catch (e) {
        expect(e.message).to.contain('expected +0 to be truthy')
      }
    })
  })


})
