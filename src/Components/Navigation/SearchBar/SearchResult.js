import React from 'react'
import './SearchResult_Styles.css';

export const SearchResult = ({result}) => {
    return (
        <div className="search-result" onClick={(e) => alert(`Thanks, Gita! You clicked on ${result.name} :)`)}>
            {result.name}
        </div>
    )
};