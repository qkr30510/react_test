import React from "react";
import './Message.scss';

const Message = ({ children}) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
            <div className="content">{children}</div>
        </div>
    );
};


export default Message;
