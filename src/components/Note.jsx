import React from "react";
import Notes from "../notes.js";

function Note(props){

    function handleClick(){
        props.onDel(props.id);
    }

    return <div className="note">
        <h1 className="note-title">{props.name}</h1>
        <p className="note-content">{props.desc}</p>
        <button className="del-button" onClick={handleClick}>Delete</button>
    </div>;
}

export default Note;