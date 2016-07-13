import * as React from 'react';
import { connect, Provider } from 'react-redux';
import SamplePage from '../components/sample-page.tsx';
import { changeAsyncSampleText } from '../redux/example';

let select = ({ example }) => ({ sampleText: example.sampleText });

class App extends React.Component<{dispatch: any, sampleText: string}, {}> {

  handleSampleAction = () => {
    this.props.dispatch(changeAsyncSampleText(''));
  }

  render() {
    return (
      <SamplePage sampleText={this.props.sampleText} handleSampleAction={this.handleSampleAction} />
    );
  }

}

export default connect(select)(App);
