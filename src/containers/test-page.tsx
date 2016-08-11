import * as React from 'react';
const connect = require('react-redux').connect;
import Container from '../components/container';

interface ITestPageProps {
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}


class TestPage extends React.Component<ITestPageProps, void> {
  render() {

    return (
      <Container testid="counter" size={2} center>
      <h1>Hi there</h1>
      </Container>
  );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestPage);

