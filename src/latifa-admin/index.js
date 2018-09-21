import React, { Component } from 'react'
import Ionicon from 'react-ionicons'
import logo from './assets/icon/logo.svg'
import './assets/css/latifaCustom.css'

import Sidebar from './sidebar'
export default class IndexLatifa extends Component {
    state = {
        leftNav: false
    }

    handleLeftNav(){
        this.setState({
            leftNav:!this.state.leftNav
        })
    }
    render(){
        return(
            <div>
                <div className="latifa-header">
                    <div className="navbar">
                        <div className="header-left">
                            <div>
                                <img src={logo} className="logo"/>
                            </div>
                            <div style={styles.wrapNavRight}>
                                <div>
                                    <button style={styles.buttonIconMenu} onClick={()=>this.handleLeftNav()}>
                                        <Ionicon icon="ios-menu" fontSize="30px" color="#b8b8b8"/>
                                    </button>
                                </div>
                                <div style={{paddingLeft:15, alignSelf:'center'}}>
                                    <button style={styles.buttonIconMenu}>
                                        <font style={{color:"#b8b8b8"}}>Dashboard</font>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="header-right">
                            <button style={styles.buttonIconMenu}>
                                <Ionicon icon="ios-menu" fontSize="30px" color="#b8b8b8"/>
                            </button>
                        </div>
                    </div>
                </div>

                
                {
                    this.state.leftNav == true ? (
                        <div className="sidebarHeight">
                            <Sidebar/>
                        </div>
                    ):null
                }
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
    buttonIconMenu:{
        background:'transparent',
        border:0
    }
}
