import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const App = props => {
  const configClass = `l-app--config-${props.config}`;

  const classes = classNames(
    'l-app',
    { 'l-app--dense': props.dense, 'm-fullheight': props.full },
    configClass,
    props.className
  );

  return <div className={classes}>{props.children}</div>;
};

App.displayName = 'App';

App.defaultProps = {
  config: '1',
};

export default App;
