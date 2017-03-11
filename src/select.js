import React, { Component, Children, PropTypes } from 'react'

export default function select(WrappedComponent) {
  const wrapped = function(props, { activeTab, changeTab }) {
    let newProps = {
      active: props.for === activeTab,
      changeTab: () => changeTab(props.for)
    }

    return <WrappedComponent {...newProps} {...props} />
  }

  wrapped.propTypes = {
    for: PropTypes.string.isRequired
  }

  wrapped.contextTypes = {
    activeTab: PropTypes.string,
    changeTab: PropTypes.func
  }

  return wrapped
}
