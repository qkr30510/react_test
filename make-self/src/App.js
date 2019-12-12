import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header';
import Weblist from './Component/Weblist';
import Clicksite from './Component/Clicksite';


class App extends Component {
  state = {
    selected_content_id:0,
    contents:[
      {id:0, title:'네이버'},
      {id:1, title:'다음'},
      {id:2, title:'구글'},
      {id:3, title:'네이트'}
    ]
  }
  getSelectedContent(){
    var i = 0;
    while(i < this.state.contents.length){
      var data = this.state.contents[i];
      if (this.state.selected_content_id === data.id){
        return data;
      }
        i = i + 1;        
    }
  }
	render(){
    //var content = this.getSelectedContent();
    //console.log(content);
		return(
         <div className="App">
            <Header title="한국인이 좋아하는 웹 사이트들"></Header>
            <Weblist data={this.state.contents}></Weblist>
            <Clicksite>{this.getSelectedContent}</Clicksite>
         </div>
		)
	}
}


export default App;
