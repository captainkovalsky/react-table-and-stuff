import * as React from 'react';
const connect = require('react-redux').connect;
const Link = require('react-router').Link;

import { loginUser, logoutUser } from '../actions/session';
import Content from '../components/content';
import Navigator from '../components/navigator';
import NavigatorItem from '../components/navigator-item';

interface IAppProps extends React.Props<any> {
  session: any;
};

function mapStateToProps(state) {
  return {
    session: state.session,
    router: state.router,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(loginUser()),
    logout: () => dispatch(logoutUser()),
  };
}

class App extends React.Component<IAppProps, void> {
  render() {
    const { children, session } = this.props;

    return (
      <div>
        <Navigator testid="navigator">
          <NavigatorItem>
            <Link to="/about">About Us</Link>
          </NavigatorItem>
          <div className="flex flex-auto"></div>
        </Navigator>
        <Content isVisible={ true }>
          { children }
        </Content>
      </div>
    );
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
