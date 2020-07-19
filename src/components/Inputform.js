import React from 'react';
import '../styles/formStyling.css'

function Inputform(props) {
    return (
        <div className="form-group col-md-8 col-12">
            <form onSubmit={(event) => props.submitForm(event)} className="form-inline">
                <input style={{ borderRadius: "7px 0 0 7px" }} type="text" className="form-control w-75 h-100" name="itemAdd" placeholder="Add a task" autoComplete="off" onChange={(event) => props.changeItem(event)} />
                <button style={{ borderRadius: "0 7px 7px 0" }} type="submit" className="w-25 btn btn-primary">Add</button>
            </form>
        </div>
    )
}

export default Inputform