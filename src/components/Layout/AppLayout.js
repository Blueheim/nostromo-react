import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const AppLayout = props => {
  const configClass = `l-app--config-${props.config}`

  const classes = classNames(
    'l-app',
    { 'l-app--dense': props.dense, 'm-fullheight': props.full },
    configClass,
    props.className
  )

  return <div className={classes}>{props.children}</div>
}

AppLayout.displayName = 'AppLayout'

AppLayout.defaultProps = {
  config: '1'
}

AppLayout.propTypes = {
  config: PropTypes.string,
  dense: PropTypes.bool,
  full: PropTypes.full,
  children: PropTypes.node,
  className: PropTypes.string
}

export default AppLayout
