import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from './components/Header';
import { NotesList } from './components/NotesList';
import { NoteForm } from './components/NoteForm';
import { Footer } from './components/Footer';

const App = () => {
 // notas de la lista
  const [notes, setNotes] = useState([]);

  // useEffect hook para fetchear la data al cargar
  useEffect(() => {
    axios.get('/api/notes')
      .then(res => {
        setNotes(res.data.notes);
      });
  }, []);

  // funciones del CRUD
  const addNote = (note) => {
    axios.post('/api/notes', note)
      .then(res => {
        const newNotes = [res.data, ...notes];
        setNotes(newNotes);
      });
  };

  const updateNote = (id, title, text) => {
    const updatedNote = {
      title,
      text
    };
    axios.put('/api/notes/' + id, updatedNote)
      .then(res => {
        const newNotes = notes.map(note => note.id === id ? updatedNote : note);
        setNotes(newNotes);
      });
  };

  const removeNote = (id) => {
    axios.delete('/api/notes/' + id)
      .then(res => {
        const newNotes = notes.filter(note => note._id !== id);
        setNotes(newNotes);
      });
  };

  return (
    <>
      <Header title="Notas" />
      <div className="container mt-3">
        <NoteForm addNote={addNote} />
        <hr />
        <NotesList
          notes={notes}
          removeNote={removeNote}
          updateNote={updateNote}
        />
      </div>
      <Footer />
    </>
  );
};

export default App;