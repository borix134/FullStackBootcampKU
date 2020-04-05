import React, { useState } from 'react';
const axios = require('axios');

function Book(props){
    function handleView(){
        window.location.href = props.url;
    }

    function handleSave(){
        axios.post("/api/books", {
            Author: props.author,
            Description: props.description,
            Image: props.image,
            Link: props.url,
            Title: props.title
        });
    }

    function handleRemove(){
        axios.post('/api/book_id',{
            Author: props.author,
            Description: props.description,
            Image: props.image,
            Link: props.url,
            Title: props.title
        }).then((res) => {
            console.log(res.data);
            axios.delete("/api/books/" + res.data.id);
        })
    }

    return (
        <div>
            <h2>{props.title}</h2><br />
            <h3>{props.author}</h3>
            <button onClick={handleView}>View</button>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleRemove}>Remove</button> <br />
            <img src={props.image} /> <p>{props.description}</p>
        </div>
    );
}

export default Book;
