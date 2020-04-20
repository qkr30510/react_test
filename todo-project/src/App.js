import React, { useReducer, useRef, useCallback, useState } from 'react';
import Message from './Message';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
      isModify: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': // 새로 추가
      //{type: 'INSERT', todo: {id: 1, text: 'todo', checked:false}}
      return todos.concat(action.todo);
    case 'REMOVE': //제거
      //{type:'REMOVE', id:1}
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE': //토글
      //{type: 'TOGGLE'}
      return todos.map(
        (todo) =>
          todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
        // 삼한연산자 todo.id 값이 action.id 값과 같으면 { ...todo, checked: !todo.checked } 실행하고 그렇지 않으면 값을 리턴
      );
    case 'FIX': //수정
      console.log(action.fixtodo);
      return todos;

    default:
      return todos;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  const fixtodo = { ...todos };
  //console.log("fixtodos",fixtodos)

  // const [onModify, setOnModify] = useState('');
  const [initText, setinitText] = useState([]);
  const [btn, Setbtn] = useState('true');
  //Setbtn(!btn) 불리언은 이런식으로 바로 해결!

  //initText는 현재 값, setinitText는 생성될 값

  //고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(3);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
      isModify: false,
    };

    dispatch({ type: 'INSERT', todo });
    nextId.current += 1; // nextId 1씩 더하기
  }, []);

  const fnInsert = (initText, value, setValue) => {
    // console.log(todos[initText[1] - 1]);
    // const NextTodo = {
    //   id: initText[1],
    //   text: value,
    //   checked: false,
    //   isModify: false,
    // };

    const NextTodo = { ...todos[initText[1] - 1], text: value };

    const fixtodo = todos.splice(initText[1] - 1, 1, NextTodo);
    // const fixtodo = todos.filter((v) => {
    //   console.log(initText[1], v.id === initText[1], value )
    //   return v.id === initText[1] ? {
    //         ...v,
    //         text: value,
    //       } : v;
    // }
    setValue('');
    dispatch({ type: 'FIX', fixtodo });
  };
  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  const onFix = useCallback((id, text, isModify) => {
    setinitText([text, id]);
    Setbtn(isModify);
    // 현재 생성되어있는 id와 text 값을 onFix에 담고 setinitText(생성될 값)에 text로 담아라
  }, []);

  const ModifyClick = (btn, value, onInsert, setValue, id) => {
    //Setbtn(!btn);
    if (!value) {
      alert('값을 입력해주세요');
      Setbtn(btn);
      return false;
    } else {
      Setbtn(!btn);
    }
    // const fValue = value.split('\n').map((line, i) => {
    //   return (
    //     <span key={i}>
    //       {line}
    //       <br />
    //     </span>
    //   );
    // });
    //const fValue = value;
    // setValue(''); // value 초기화
    //todos.id === id ? fnInsert(fValue):onInsert(fValue);

    todos.id === id ? fnInsert(initText, value, setValue) : onInsert(value, id);
  };

  // console.log("dddd"+initText)
  return (
    <Message>
      <TodoInsert
        onInsert={onInsert}
        initText={initText}
        btn={btn}
        ModifyClick={ModifyClick}
      />
      <TodoList
        todos={todos}
        fixtodo={fixtodo}
        onRemove={onRemove}
        onToggle={onToggle}
        onFix={onFix}
        btn={btn}
      />
    </Message>
  );
};

export default App;
