import React, { Component, Children, PropTypes } from 'react'

export default class Tabbed extends Component {
  constructor(props) {
    super()

    let activeTab = props.default

    if (props.useHash && window.location.hash !== '') {
      activeTab = window.location.hash.slice(1)
    }

    this.state = { activeTab }
  }

  getChildContext() {
    return {
      activeTab: this.state.activeTab,
      changeTab: (val) => this.changeTab(val)
    }
  }

  render() {
    return Children.only(this.props.children)
  }

  changeTab(newTab) {
    if (this.props.toggle && this.state.activeTab === newTab) {
      newTab = this.props.default
    }

    if (this.props.onChange) {
      this.props.onChange(newTab)
    }

    if (this.props.useHash) {
      window.location.hash = newTab
    }

    this.setState({activeTab: newTab})
  }
}

Tabbed.propTypes = {
  default: PropTypes.string,
  onChange: PropTypes.func,
  toggle: PropTypes.bool,
  useHash: PropTypes.bool
}

Tabbed.childContextTypes = {
  activeTab: PropTypes.string,
  changeTab: PropTypes.func
}
