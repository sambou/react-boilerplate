import {assert, expect} from 'chai';
import * as React       from 'react';
import * as TestUtils   from 'react-addons-test-utils';
import SamplePage       from '../../../src/client/components/sample-page.tsx';

describe('SamplePage', () => {

  it('should have props.children equal to "Sample Page".', () => {
    var renderer = TestUtils.createRenderer();
    renderer.render(<SamplePage sampleText='hi' handleSampleAction={function() {}} />);
    var elem = renderer.getRenderOutput();

    assert.equal(elem.props.children[0].props.children, 'Sample Page');
  });

});
