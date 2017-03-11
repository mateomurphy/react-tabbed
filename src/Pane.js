import React, { Component, Children, PropTypes } from 'react'

export default function Pane({id, children}, {activeTab}) {
  if (id === activeTab) {
    return Children.only(children)
  } else {
    return null
  }
}

Pane.propTypes = {
  id: PropTypes.string.isRequired,
}

Pane.contextTypes = {
  activeTab: PropTypes.string
}
