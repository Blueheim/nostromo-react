import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavSearch = props => {
  const classes = classNames('nav__search', {}, props.className);

  return (
    <form className={classes}>
      <div class="control">
        <input type="text" class="control__input control__input--2" placeholder="Rechercher" />
        <button class="control__action">
          <i class="fa fa-search icon" />
        </button>
      </div>
    </form>
  );
};

NavSearch.displayName = 'NavSearch';

NavSearch.defaultProps = {};

export default NavSearch;
