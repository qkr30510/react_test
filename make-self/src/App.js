import React, { Component } from 'react';
import './App.css';
import Left_nav from './components/Left_nav';


class App extends Component {
	render(){

		return(
         <div className="App">
            <div className="wrap">
              <Left_nav></Left_nav>
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
                    <span>친구 0명</span>
                    <div className="friend_box">
                      <div className="profile_img"><img src="" alt=""/></div>
                      <div className="profile_name">친구이름</div>
                      <div className="profile_text">친구대화명</div>                  
                    </div>
                    <div className="friend_box">
                      <div className="profile_img"><img src="" alt=""/></div>
                      <div className="profile_name">친구2이름</div>
                      <div className="profile_text">친구2대화명</div>                  
                    </div>                    
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
