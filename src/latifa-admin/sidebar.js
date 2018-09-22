import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Ionicon from 'react-ionicons'

import Menu from './sidebarComponent/menu'
import Menu2 from './sidebarComponent/menu2'
import Menu3 from './sidebarComponent/menu3'

import './assets/css/latifaCustom.css'
import './assets/css/latifaSidebar.css'

const routes = [
    {
      path: "/home",
      exact: true,
      main: () => <Menu/>
    },
    {
      path: "/projects",
      main: () => <Menu2/>
    },
    {
      path: "/calendar",
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
            <div className="main-sidebar">
              <ul style={{ listStyleType: "none", padding: 0,}}>
                <li>
                  <NavLink to="/home" className="link" activeClassName="link-active">
                    <div className="icon-and-title">
                      <Ionicon icon="ios-home" color="#fff" className="icon"/>
                      <font className="title">Home</font>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects" className="link" activeClassName="link-active">
                    <div className="icon-and-title">
                      <Ionicon icon="ios-briefcase" color="#fff" className="icon"/>
                      <font className="title">Project</font>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/calendar" className="link" activeClassName="link-active">
                    <div className="icon-and-title">
                      <Ionicon icon="ios-calendar" color="#fff" className="icon"/>
                      <font className="title">Calendar</font>
                    </div>
                  </NavLink>
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
          ):(
            <div className="main-sidebar-icon">
              <ul style={{ listStyleType: "none", padding: 0,}}>
                <li>
                  <NavLink to="/home" className="link" activeClassName="link-icon-active">
                    <div className="icon-and-title">
                      <Ionicon icon="ios-home" color="#fff" className="icon"/>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects" className="link" activeClassName="link-icon-active">
                    <div className="icon-and-title">
                      <Ionicon icon="ios-briefcase" color="#fff" className="icon"/>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/calendar" className="link" activeClassName="link-icon-active">
                    <div className="icon-and-title">
                      <Ionicon icon="ios-calendar" color="#fff" className="icon"/>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          )
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
