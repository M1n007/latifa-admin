import React, { Component } from 'react'
import './assets/css/latifaCustom.css'

export default class Sidebar extends Component{
    
    render(){
        return(
            <div style={styles.wrap}>
                <div className="sidebarHeight">
                    <font>Latifa Admin</font>
                </div>
            </div>
        )
    }
}

var styles = {
    wrap:{
        background:"#34495e",
        height:"100%",
        width:"18%"
    }
}