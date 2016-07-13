import * as React from 'react';

interface SampleProps {
  sampleText: string;
  handleSampleAction: () => void
};

export default (props: SampleProps) =>
  <div>
    <h2>Sample Page</h2>
    <div>Random Github user: {props.sampleText}</div>
    <button onClick={props.handleSampleAction}>
      Click for random Github profile.
    </button>
  </div>
