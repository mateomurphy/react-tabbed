# react-tabbed


## example

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
