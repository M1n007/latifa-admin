import React, { Component } from 'react'
import Ionicon from 'react-ionicons'
import logo from './assets/icon/logo.svg'
import iconProfile from './assets/icon/blank.jpg'
import './assets/css/latifaCustom.css'

import Sidebar from './sidebar'
export default class IndexLatifa extends Component {
    state = {
        leftNav: false,
  
    }

    handleLeftNav(){
        this.setState({
            leftNav:!this.state.leftNav,
            
        })
    }
    render(){
        return(
            <div>
                <div className="latifa-header">
                    <div className="navbar">
                        <div className="header-left">
                            <div>
                                <img src={logo} className="logo" alt="logo"/>
                            </div>
                            <div style={styles.wrapNavRight}>
                                <div>
                                    <button className="buttonStyle" onClick={()=>this.handleLeftNav()}>
                                    {
                                        this.state.leftNav == false ? (
                                            <Ionicon icon="ios-menu" fontSize="30px" color="#b8b8b8"/>
                                        ):(
                                            <Ionicon icon="ios-close" fontSize="30px" color="#b8b8b8" className="closeAnim"/>
                                        )
                                    }
                                    
                                    </button>
                                </div>
                                <div style={{paddingLeft:15, alignSelf:'center'}}>
                                    <button className="buttonStyle">
                                        <font style={{color:"#b8b8b8"}}>Dashboard</font>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="header-right">
                            <button className="buttonStyle">
                                <Ionicon icon="ios-notifications-outline" fontSize="30px" color="#b8b8b8" />
                            </button>
                            <button className="dropdown buttonStyleDrop" style={{float:'right'}}>
                                <img className="iconProfile dropbtn"  src={iconProfile} alt="icon profile"/>
                                <div class="dropdown-content">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                
                <Sidebar showSide={this.state.leftNav}/>
            </div>
        )
    }
}

var styles = {
    wrapNavRight:{
        paddingLeft:16,
        flexDirection: 'row',
        display: 'flex',
    },
    openStyle : {
        transform: 'translate(0, 20)'
    }
}