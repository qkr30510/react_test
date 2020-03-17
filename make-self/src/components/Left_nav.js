import React, { Component } from 'react';
import './Left_nav.css';

class Left_nav extends Component {
    render(){
        const navs = ["person","chat"]
        const navList = navs.map((nav, index) => (<li key={index}><a href={nav+'.html'}>{nav}</a></li>) )
        return(
            <nav>
                <ul>
                    {navList}
             </ul>
          </nav>
        )
    }
}

export default Left_nav;
