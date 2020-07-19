import React, { Component } from 'react';
import Header from './Header';
import Todo from './Todo';
import Inputform from './Inputform'
let newTodoItem = null;
let taskID = 1;
class App extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [
            ]
        }
        this.handleChangeItem = this.handleChangeItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.itemTodoComplete = this.itemTodoComplete.bind(this);
        this.deleteEntry = this.deleteEntry.bind(this);
    }
    handleChangeItem(event) {
        newTodoItem = {
            id: taskID,
            task: event.target.value,
            completed: false
        }
    }
    addItem(e) {
        e.preventDefault();
        let newArray = this.state.tasks.concat(newTodoItem);
        this.setState({ tasks: newArray });
        newTodoItem = null;
        e.target.itemAdd.value = "";
        taskID = taskID + 1;
    }
    itemTodoComplete(id) {
        this.setState(prevState => {
            const updatedState = prevState.tasks.map(item => {
                if (item.id === id) {
                    item.completed = !item.completed;
                }
                return item
            })
            return {
                tasks: updatedState
            }
        })
    }
    deleteEntry(id) {
        let newState = [];
        this.state.tasks.map(item => {
            if (item.id !== id) {
                newState.push(item)
            }
            return newState
        })
        this.setState(prevstate => {
            return {
                tasks: newState
            }
        })
    }


    render() {
        let todoItems = this.state.tasks.map(itemTodo => <Todo key={itemTodo.id} id={itemTodo.id} item={itemTodo.task} completed={itemTodo.completed} markCompleted={this.itemTodoComplete} eliminateItem={this.deleteEntry} />);
        return (
            <div>
                <Header />
                <div className="col-12 d-flex">
                    <div className="col-2 d-none d-md-block"></div>
                    <Inputform submitForm={this.addItem} changeItem={this.handleChangeItem} />
                    <div className="col-2 d-none d-md-block"></div>
                </div>
                <div className="col-12 d-flex">
                    <div className="col-2 d-none d-md-block"></div>
                    <div className="col-12 col-md-8">
                        {todoItems}
                    </div>
                    <div className="col-2 d-none d-md-block"></div>
                </div>
            </div>
        )
    }

}

export default App