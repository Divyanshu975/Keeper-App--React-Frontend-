import React, {useState} from "react";
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Note from "./Note.jsx"
import Notes from "../notes.js"
import CreateArea from "./CreateArea.jsx"

function createNote(noteItem){
  return <Note  id={noteItem.key}
    name={noteItem.title}
    desc={noteItem.content} />
}



function App(){
    const [notesList,setNotesList]=useState([]); 

    function addNote(note){
        setNotesList(prevValue=>{return [...prevValue,note]});
        
    }

    function handleDel(id){
        console.log(id);
        setNotesList(notesList.filter((item,index)=>{return(index!==id)}));
    }

    return <div className="container">
        <Header />
        <CreateArea onClick={addNote}/>
        {notesList.map((item,index)=>{ return(<Note name={item.title} desc={item.content} key={index} id={index} onDel={handleDel}/>)
        })}
        {/* <Note name="10" desc="Ten" /> */}
        {/* {Notes.map(createNote)} */}
        <Footer />
    </div>;
}

export default App;