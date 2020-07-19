import React from 'react';
import '../styles/todo.css'

const completedItems = {
    textDecoration: "line-through",
    color: "rgb(71, 71, 71)"
}

function Todo(props) {
    let completedItemStyling = props.completed ? completedItems : null
    return (
        <div className="todoBox p-2 mt-2 mb-2 col-12 d-flex">
            <div className="col-1 col-md-1 d-table">
                <div className="d-table-cell align-middle">
                    <input
                        className="checkbox-round self-align-center mx-auto"
                        id={props.id}
                        type="checkbox"
                        checked={props.completed}
                        onChange={() => props.markCompleted(props.id)} />
                </div>
            </div>
            <div className="col-9 col-md-10 p-0 self-align-center" style={{ lineHeight: "100%" }}>
                <label style={completedItemStyling}>{props.item}</label>
            </div>
            <div className="col-2 col-md-1 p-0 mx-auto text-center self-align-center" style={{ lineHeight: "100%" }}>
                <label className="completeItem mx-auto" onClick={() => props.eliminateItem(props.id)}>&times;</label>
            </div>
        </div>
    )
}

export default Todo; 