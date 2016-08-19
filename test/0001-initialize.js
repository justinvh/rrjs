// @flow

import 'babel-polyfill';
import chai from 'chai';
import { describe, it } from 'mocha';
// import path from 'path';
import * as RR from '../dist/rr';

chai.should();

describe('Test Rogue Reborn', () => {
  let instance = new RR.Application();
  it('returns true', () => {
    chai.assert.instanceOf(instance, RR.Application, 'Valid');
  });
});
