import React, {Component} from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {

    render() {
        const {label, onDelete, onToggle, important, liked} = this.props
        let classNames = 'app-list-item'
        if (important) {
            classNames += ' important'
        }
        if (liked) {
            classNames += ' like'
        }
        return (
            <li className={classNames}>
                <span onClick={onToggle} 
                      className="app-list-item-label">
                        {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                        <button 
                        type="button" 
                        className="btn-star btn-sm"
                        onClick={onToggle}>
                            <i className="fa fa-star"></i>
                        </button>
                        <button 
                        type="button" 
                        className="btn-trash btn-sm"
                        onClick={onDelete}>

                            <i className="fa fa-trash"></i>
                        </button>
                        <i className="fa fa-heart"></i>
                </div>
        </li>
        )
    }
}