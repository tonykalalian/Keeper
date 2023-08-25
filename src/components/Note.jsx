import React from "react";
import notesData from "../note";

const Note = () => {
  return notesData.map((note) => (
    <div className="note" key={note.key}>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
    </div>
  ));
};

export default Note;
