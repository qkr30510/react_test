import React, { Component } from 'react';
import './App.css';


class App extends Component {
	render(){

		return(
         <div className="App">
            <div className="wrap">
              <nav><ul>
                <li><a href="">사람</a></li>
                <li><a href="">채팅칸</a></li>
              </ul></nav>
              <div className="friendBox">
                <div className="box_tit">
                  <div className="box_tit_up">
                    <h3>친구</h3>
                    <button>친구추가 아이콘</button>
                  </div>
                  <div className="search_icon">
                    <input type="text"/>
                  </div>
                </div>
                <div className="people_list_box">
                  <div className="myBox">
                    <div className="profile_img"><img src="" alt=""/></div>
                    <div className="profile_name">Lilo 주희</div>
                    <div className="profile_text">친구가..0명......</div>
                  </div>                 
                  <div className="friend_listBox">
                    <div className="profile_img"><img src="" alt=""/></div>
                    <div className="profile_name">Lilo 주희</div>
                    <div className="profile_text">친구가..0명......</div>                  
                  </div>   
                </div>
              </div>
              <div className="chatBox"></div>              
            </div>
         </div>
		)
	}
}


export default App;
