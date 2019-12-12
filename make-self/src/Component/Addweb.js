import React, { Component } from 'react';

class Addweb extends Component{
	render(){
		return(
           <div className="add_web">
             <input type="button" value="추가하기" />
             <input type="button" value="삭제하기" />
           </div>
		)
	}
}

export default Addweb;