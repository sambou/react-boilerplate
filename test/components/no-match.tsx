import {assert, expect} from 'chai';
import * as React       from 'react';
import * as TestUtils   from 'react-addons-test-utils';
import NoMatch          from '../../src/components/no-match.tsx';

describe('NoMatch view aka 404 page', () => {

  it('should have props.children equal to "No Match.".', () => {
    var renderer = TestUtils.createRenderer();
    renderer.render(<NoMatch sampleText='hi' handleSampleAction={function() {}} />);
    var elem = renderer.getRenderOutput();

    assert.equal(elem.props.children[0].props.children, 'No Match.');
  });

});
