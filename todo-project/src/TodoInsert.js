import React, { useState, useCallback, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert, initText, btn }) => {
  const [value, setValue] = useState('');
  //const [initText , setinitText] = useState('');
  //console.log(initText)
  useEffect(() => {
    setValue(initText);
  }, [initText]);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onClick = useCallback(() => {
    if (!value) {
      alert('값을 입력해주세요');
      return false;
    }
    const fValue = value.split('\n').map((line, i) => {
      return (
        <span key={i}>
          {line}
          <br />
        </span>
      );
    });

    onInsert(fValue);
    setValue(''); // value 초기화
  }, [onInsert, value]);

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (e.key === 'Enter' && e.shiftKey) {
        return;
      }
      onClick();
      e.preventDefault();
    }
  };

  /*const onModify = () => {
    setValue(value);
  }
  */
  return (
    <form className="TodoInsert">
      <textarea
        className="write"
        onChange={onChange}
        value={value}
        placeholder="할 일을 입력하세요"
        onKeyPress={onKeyPress}
        //onModify={onModify}
      ></textarea>
      {btn === true ? (
        <button type="button" onClick={onClick}>
          <MdAdd />
        </button>
      ) : (
        <button type="button" onClick={onClick}>
          수정하기
        </button>
      )}
    </form>
  );
};

export default TodoInsert;
