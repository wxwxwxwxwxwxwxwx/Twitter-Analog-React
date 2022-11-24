import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts, onDelete, onToggle}) => {


    const elements = posts.map(item => {
        const {id, e, ...itemProps} = item
        return (
            <div key={id} className="app-list-item-row">
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggle={(e) => onToggle(id, e)}
                    />
            </div>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;