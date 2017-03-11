import React, { Component, Children, PropTypes } from 'react'

import select from './select'

function Tab(props) {
  const onClick = (e) => {
    e.preventDefault()
    props.changeTab()
  }

  let className = props.active ? 'active' : null

  return(
    <li key={props.for} role="tab" className='nav-item'>
      <a href={`#${props.for}`} className={'nav-link ' + className} onClick={e => onClick(e)}>
        {props.children}
      </a>
    </li>
  )
}

export default select(Tab)
