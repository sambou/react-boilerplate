import * as React from 'react';

export default React.createClass<{sampleText: string, handleSampleAction: () => void }, {}>({

  render() {
    return (
      <div>
        <h2>No Match.</h2>
        <div>Your sampleText is: {this.props.sampleText}</div>
        <button onClick={this.props.handleSampleAction}>Click for new text.</button>
      </div>
    );
  }

});
