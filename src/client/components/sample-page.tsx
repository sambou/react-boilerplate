import * as React from 'react';

export default React.createClass<{sampleText: string, handleSampleAction: () => void }, {}>({

  render() {
    return (
      <div>
        <h2>Sample Page</h2>
        <div>Random Github user: {this.props.sampleText}</div>
        <button onClick={this.props.handleSampleAction}>Click for random Github profile.</button>
      </div>
    );
  }

});
