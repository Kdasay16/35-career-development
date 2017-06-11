'use strict'

const expect = require('chai').expect
const DLL = require('../lib/hash-table')

describe('DDL Hash Table', function() {
  beforeEach(done => {
    this.dLL = new DLL()
    done()
  })
  afterEach(done => {
    this.dLL = null
    done()
  })
})
describe('append method',() => {
  it('should append a new node', done => {
    let newNode = this.dLL('new')
    this.dLL.set('old', 'new')
    expect(this.dLL(newNode)).to.equal('new')
    done()
  })
})
