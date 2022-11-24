import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from "../post-status-filter";
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn React', important: true, liked: true, id: uuidv4()},
                {label: 'That is so cool', important: false, liked: false, id: uuidv4()},
                {label: 'I need a break...', important: false, liked: false, id: uuidv4()}
            ],
            term: '',
            filter: 'all'
        };
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: uuidv4()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
            }
        });
    }

    onToggle = (id, e) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            let old = {...data[index]};
            const target = e.target;
            let newArr;
            if (target.classList.contains('app-list-item-label')) {
                newArr = [...data.slice(0, index), {...old, liked: !old.liked}, ...data.slice(index + 1)]
            } else if(target.classList.contains('btn-star') || target.classList.contains('fa-star')) {
                newArr = [...data.slice(0, index), {...old, important: !old.important}, ...data.slice(index + 1)]
            }
            
            return {
                data: newArr
            }
        });
    }

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.label.indexOf(term) > -1
        });
    }

    filterPost = (items, filter) => {
        if (filter === 'liked') {
            return items.filter(item => item.liked)
        } else {
            return items
        }
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        
        const isLiked = data.filter(item => item.liked).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <AppBlock>
                <AppHeader
                    isLiked={isLiked}
                    allPosts={allPosts}/>
                <PostAddForm
                    onAdd={this.addItem}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggle={this.onToggle}/>
            </AppBlock>
        )
    }
}