import React, { Component } from 'react';
import './Weblist.css';
import Addweb from './Addweb';

class Weblist extends Component{

	render(){
  
    const {data} = this.props;
    const sitelist = data.map((item) => (
      <li>
       <a href="/"
          {...item}
          key={item.id}
          onClick={function(ev){
            ev.preventDefault();
          }}
        >
         {item.title}
        </a>
      </li>
     )
  );

		return(
          <section className="section">
           <ul>
             {sitelist}
           </ul>
           <Addweb></Addweb>           
         </section>			
		)
	}
}
export default Weblist;