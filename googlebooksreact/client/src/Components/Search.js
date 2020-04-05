import React, { useState } from 'react';
const axios = require('axios');

function Search(props){
    const [searchTerm, setSearchTerm] = useState('');

    function showSaved(event){
        event.preventDefault();
        var results = [];
        axios.get('/api/books').then((res) => {
            for (var i = 0; i < res.data.length; i++){
                const result = {};
                result.title = res.data[i].Title;
                result.author = res.data[i].Author;
                result.image = res.data[i].Image;
                result.link = res.data[i].Link;
                result.description = res.data[i].Description;
                results.push(result);
            }
            props.updateBooks(results);
        });
    }

    function handleSearch(event){
        event.preventDefault();
        var query = searchTerm.replace(/ /g,"+");
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+query).then((res) => {
            var results = [];
            for (var i = 0; i < res.data.items.length; i++){
                var result = {};
                console.log(i);
                result.title = res.data.items[i].volumeInfo.title;
                if (!Array.isArray(res.data.items[i].volumeInfo.authors)){
                    result.author = res.data.items[i].volumeInfo.author;
                }else{
                    result.author = res.data.items[i].volumeInfo.authors[0];
                }
                if (res.data.items[i].volumeInfo.imageLinks){
                    result.image = res.data.items[i].volumeInfo.imageLinks.thumbnail;
                }else{
                    result.image = "";
                }
                result.description = res.data.items[i].volumeInfo.description;
                result.link = res.data.items[i].volumeInfo.infoLink;
                results.push(result);
            }
            props.updateBooks(results);
        });
    }

    return (
        <form>
            <input onChange={event => setSearchTerm(event.target.value)}></input>
            <button onClick={handleSearch}>Search Google Books</button>
            <button onClick={showSaved}>Show Saved Books</button>
        </form>
    );
}

export default Search;
