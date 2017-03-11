import React, { Component, Children, PropTypes } from 'react'

export function Tab(props, {activeTab, changeTab}) {
  const onClick = (e) => {
    e.preventDefault()
    changeTab(props.for)
  }

  let active = props.for === activeTab

  if (props.render) {
    return(props.render({active, changeTab: () => changeTab(props.for) }))
  }

  let className = active ? 'active' : null

  return(
    <li key={props.for} role="tab" className={className}>
      <a href={`#${props.for}`} onClick={e => onClick(e)}>
        {props.children}
      </a>
    </li>
  )
}

Tab.propTypes = {
  for: PropTypes.string.isRequired,
  render: PropTypes.func
}

Tab.contextTypes = {
  activeTab: PropTypes.string,
  changeTab: PropTypes.func
}
