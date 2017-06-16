import React from "react";
import PropTypes from 'prop-types';
import {routeNode, RouteView} from "react-mobx-router5";
import routes from "../../routes";

const routeNodeName = '';

class Main extends React.Component {
  render() {
    const {activeRoute} = this.props;
    return <RouteView route={activeRoute} routes={routes} routeNodeName={routeNodeName}/>;
  }
}

// Both injected by routeNode
Main.propTypes = {
  activeRoute: PropTypes.object.isRequired, // non-observable. plain js obj
  routerStore: PropTypes.object.isRequired
};


// higher-order component to wrap a route node component.
// '' if root node
export default routeNode(routeNodeName)(Main);
