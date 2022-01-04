import React, { Component } from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text !== '') {
            this.props.onAdd(this.state.text)
        }        
        this.setState({
            text: ''
        })

    }

    render() {
        return (
            <form 
                className="bottom-panel"
                onSubmit={this.onSubmit}
                >
                <input
                    type="text"
                    placeholder="About what are you thinking now?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn-outline-firstly"
                    >
                    Add</button>
            </form>
        )
    }
}