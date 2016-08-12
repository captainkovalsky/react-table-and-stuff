import * as React from 'react';
const connect = require('react-redux').connect;
import JsonEditor from '../components/json-editor/index';
import Container from '../components/container/index';

interface ITestPageProps extends React.Props<any> {
  children?: React.Component<any, any>;
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

class Table extends React.Component<{
  config: Object
}, void> {
  render() {
    return (<span>{this.props.children}</span>);
  }

}

class TableHeader extends React.Component<ITestPageProps, void> {
  render() {
    return (<thead>
    <th>One column</th>
    <th>Two column</th>
    </thead>);
  }

}

class TestPage extends React.Component<ITestPageProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      tableConfig: {
        title: 'Hi ppc'
      }
    };
  }

  changeConfig(tableConfig: Object): void {
    this.setState({
      tableConfig
    });
  }

  render() {
    const { tableConfig } = this.state;
    return (
  <div>
        <Container testid="table" size={ 4 } left>
          <h1></h1>
          <Table config = {tableConfig}>
            <caption>{tableConfig.title}</caption>
            <TableHeader />
          </Table>
        </Container>
        <Container testid="editor" size={ 4 } left>
              <JsonEditor init={ tableConfig } onChange={(newConfig) => this.changeConfig(newConfig)}/>
        </Container>
  </div>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestPage);
