import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const ModalLayout = props => {
  const classes = classNames('l-modal', {}, props.className)

  return <div className={classes}>{props.children}</div>
}

ModalLayout.displayName = 'ModalLayout'

ModalLayout.defaultProps = {}

ModalLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default ModalLayout
