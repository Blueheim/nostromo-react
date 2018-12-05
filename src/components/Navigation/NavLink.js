import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Link from '../Link/Link';

const NavLink = props => {
  const classes = classNames('nav__link', {}, props.className);

  return (
    <Link href={props.href} className={classes}>
      {props.children}
    </Link>
  );
};

NavLink.displayName = 'NavLink';

NavLink.defaultProps = {};

export default NavLink;
