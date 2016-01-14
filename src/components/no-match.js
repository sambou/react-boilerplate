import React from 'react';

export default (props) => {
  return (
    <div>
      <h2>No Match.</h2>
      <div>Your sampleText is: {props.sampleText}</div>
      <a onClick={props.handleSampleAction}>Click for new text.</a>
    </div>
  );
};
