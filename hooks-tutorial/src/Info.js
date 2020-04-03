import React from 'react';
import useInputs from './useInputs'

const Info = () => {
    const [state, onChange] = useInputs({
        names:'',
        nickname:''
    });
    const {names, nickname} = state ;
    

    return (
        <div>
            <div>
                <input type="text" name="names" value={names} onChange={onChange}/>
                <input type="text" name="nickname" value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>이름:</b>{names}
                </div>
                <div>
                    <b>닉네임:</b>{nickname}
                </div>
            </div>
        </div>
    )
}
export default Info;