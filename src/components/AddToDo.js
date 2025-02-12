import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddToDo extends Component {

    state = {
        title: ""
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: "" });
    }

    onChange = (e) => this.setState({ title: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
                <input 
                    type="text" 
                    name="title" 
                    style={{ flex: "10", padding: "5xp" }}
                    placeholder="  Add Task..."  
                    value={this.state.title}     
                    onChange={this.onChange}                                                        
                />
                <input 
                    type="submit" 
                    value="submit" 
                    className="btn" 
                    style={{ flex: "1" }}   
                />
            </form>
        )
    }
}

// PropTypes
AddToDo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default AddToDo
