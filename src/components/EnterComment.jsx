import React from "react";

function EnterComment({ value, onChange }) {
    return (
        <div>
            <label htmlFor="comment"></label>
            <textarea placeholder='Введите комментарий...' id="comment" value={value} onChange={onChange}>

            </textarea>
        </div>
    );
}

export default EnterComment;