import { useState, useEffect } from 'react';
import Input from './Input.js';

function Form(props) {
    const [formState, setFormState] = useState({
     song:'',
      artist:'',
      quote:''
    });

    useEffect(() => {
      if(props.quote) {
        setFormState({
         song: props.quote.song,
          artist: props.quote.artist,
          quote: props.quote.quote,
          id: props.quote.id
        })
      }
    }, [props.quote]);

  function handleChange(event) {
    setFormState(prevState => ({
      ...prevState,
      [event.target.id] : event.target.value
    }));
  }

  function handleSubmit(event){
    event.preventDefault();
    if(props.quote) formState.id = props.quote.id
    props.handleSubmit(event, formState);
  }
    return (
      <form onSubmit={handleSubmit}>
        <Input
          handleChange={handleChange}
          name="artist"
          placeholder=" ?"
          type="text"
          value={formState.artist}
          id="artist"
         />
         <Input
           handleChange={handleChange}
           name="artist"
           placeholder="Notice Author"
           type="text"
           value={formState.artist}
           id="artist"
        />
        <Input
          handleChange={handleChange}
          name="artist"
          placeholder="quote"
          type="text"
          value={formState.quote}
          id="artist"
       />
       <input type="submit" value={props.quote ? 'Edit quote' : 'Add quote'}/>
      </form>
    );
  }

export default Form;
