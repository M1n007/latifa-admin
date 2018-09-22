import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Menu from './sidebarComponent/menu'
import Menu2 from './sidebarComponent/menu2'
import Menu3 from './sidebarComponent/menu3'

import './assets/css/latifaCustom.css'

const routes = [
    {
      path: "/",
      exact: true,
      main: () => <Menu/>
    },
    {
      path: "/menu2",
      main: () => <Menu2/>
    },
    {
      path: "/menu3",
      main: () => <Menu3/>
    }
  ];
  
class SidebarLatifa extends Component{
  render(){
    return(
      <Router>
      <div style={{ display: "flex" }}>
        {
          this.props.showSide == true ? (
            <div
              style={{
                padding: "10px",
                width: "15%",
                background: " #34495e",
                height:"100%"
              }}
            >
              <ul style={{ listStyleType: "none", padding: 0,}}>
                <li>
                  <Link to="/" style={{color:'white'}} >Home</Link>
                </li>
                <li>
                  <Link to="/menu2" style={{color:'white'}}>Menu 2</Link>
                </li>
                <li>
                  <Link to="/menu3" style={{color:'white'}}>Menu 3</Link>
                </li>
              </ul>
      
              {/* {routes.map((route, index) => (
                // You can render a <Route> in as many places
                // as you want in your app. It will render along
                // with any other <Route>s that also match the URL.
                // So, a sidebar or breadcrumbs or anything else
                // that requires you to render multiple things
                // in multiple places at the same URL is nothing
                // more than multiple <Route>s.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.sidebar}
                />
              ))} */}
            </div>
          ):null
        }
  
        <div style={{ flex: 1, padding: "10px", paddingLeft: "45px" }}>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </div>
    </Router>
    )
  }
}
  
  export default SidebarLatifa;
