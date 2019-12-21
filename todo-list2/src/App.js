import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {

  id = 3 // 이미 0, 1, 2 가 존재하므로 3으로 설정

  state = {
    input:'',
    todos:[
      { id: 0, text: '리액트 소개', checked: false },
      { id: 1, text: '리액트 소개2', checked: true},
      { id: 2, text: '리액트 소개3', checked: false}
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input:'', // 인풋 비우고 
      // concat 을 사용하여 배열에 추가 
      todos: todos.concat({
        id : this.id++,
        text: input,
        checked: false
      })
    })
  }

  handleKeyPress = (e) => {
    //눌려진 키가 Enter 면 hanleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }
/* 
  1번째 방법

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selectde = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열으르 복사 

    // 기존의 값들을 복사하고, checked 값을 덮어 쓰기 
    nextTodos[index] = {
      ...selectde,
      checked: !selectde.checked
    };

    this.setState({
      todos: nextTodos
    });
  }
*/
  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    const selected = todos[index];

    this.setState({
      todos: [
        ...todos.slice(0, index),
        {
          ...selected,
          checked: !selected.checked
        },
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render(){
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
          />
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    )
  }
}

export default App;
