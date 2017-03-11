# react-tabbed

Flexible, markup agnostic tab component for React.

## Example

```js
import React from 'react'
import ReactDOM from 'react-dom'

import { Tabbed, Tab, Pane } from 'react-tabbed'

const App = React.createClass({
  render() {
    return (
      <Tabbed defaultValue='foo'>
        <div>
          <h1>Basic example</h1>

          <ul className='nav nav-tabs'>
            <Tab for='foo'>Foo</Tab>
            <Tab for='bar'>Bar</Tab>
            <Tab for='baz'>Baz</Tab>
          </ul>

          <Pane id='foo'>
            <div>
              <h2>Foo content</h2>
            </div>
          </Pane>

          <Pane id='bar'>
            <div>
              <h2>Bar content</h2>
            </div>
          </Pane>

          <Pane id='baz'>
            <div>
              <h2>Baz content</h2>
            </div>
          </Pane>
        </div>
      </Tabbed>
    )
  },
})

ReactDOM.render(<App />, document.getElementById('app'))
```

## API

### `<Tabbed>`

Sets up the context for tabs and panes.

#### props

* `defaultValue` (String): The initially selected tab
* `useHash` (Boolean): Turns on hash mode, where the `defaultValue` will be read from the url, and clicking on a tab will update the url
* `toggle` (Boolean): Turns on toggle mode, where clicking on a currently selected tab will reverb the active tab to the `defaultValue`
* `onChange` (Function): If given, will be called with the value of any clicked tab

### `<Tab>`

Renders a tab using bootstrap 4 styling. Use the `select` function to create your own tab component if you need different styling.

#### props

* `for` (String): The id of the `Pane` to connect the tab to

### `<Pane>`

Wraps content that you want displayed via the panes.

#### props

* `id` (String): An id for the pane, will be connect to the `Tab` with the same `for` value

### `select`

A Higher order component for creating tabs. Using it will inject `active` and `changeTab` into the wrapped component. See the source for `Tab` for details.

