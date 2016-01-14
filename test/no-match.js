import {assert, expect} from 'chai';
import NoMatch from '../src/components/no-match.js';

describe('NoMatch view aka 404 page', () => {

  it('should have props.children equal to "No Match.".', () => {
    assert.equal(NoMatch({sampleText: 'Hi'}).props.children[0].props.children, 'No Match.');
  });

});
