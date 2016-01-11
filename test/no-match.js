import {assert, expect} from 'chai';
import NoMatch from '../src/no-match.js';

describe('NoMatch view aka 404 page', () => {

  it('should have props.children equal to "No Match.".', () => {
    assert.equal(NoMatch().props.children, 'No Match. No Match.');
  });

});
