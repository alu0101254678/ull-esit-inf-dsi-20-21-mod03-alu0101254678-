import 'mocha';
import {expect} from 'chai';
import {add} from '../src/index';

describe('Test de suma', () => {
  it('La suma es correcta', () => {
    expect(add(1, 2)).to.be.equal(3);
  });
});
