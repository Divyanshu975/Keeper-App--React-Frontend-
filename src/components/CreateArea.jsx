import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const newValue = event.target.value;
    const name = event.target.name;
    setNote((prevValue) => ({ ...prevValue, [name]: newValue }));
  }

  function submitNote(event) {
    props.onClick(note);
    event.preventDefault();
    setNote({ title: "", content: "" });
  }

  return (
    <div className="createArea">
      <form>
        <input
        className="note-title"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
        className="note-content"
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={note.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
