import React from 'react';
import styled from 'styled-components';
import './app-header.css';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = ({isLiked, allPosts}) => {
    return (
        <Header as='a'>
            <h1>Anton Ushkov</h1>
            <h2>{allPosts} notes, was liked {isLiked}</h2>
        </Header>
    )
}

export default AppHeader