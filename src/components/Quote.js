import { useState } from 'react';

import Form from './Form';

function Notice(props) {
  
  const [formVisible, setFormVisible] = useState(false);

  function toggleForm() {
    setFormVisible(!formVisible);
  }

  function handleUpdate(event, quote) {
    toggleForm();
    props.handleUpdate(event, quote);
  }
  

    return (
      <>
      {
        formVisible ?
        <>
        <Form quote={props.quote} handleSubmit={handleUpdate} />
        <button onClick={toggleForm}>Cancel</button>
        </>
        : <div className="quote">
            <h3>{props.quote.title}</h3>
            <p>{props.quote.author}</p>
            <small>{props.quote.phone}</small>
            <button onClick={() => props.handleDelete(props.quote)}>X</button>
            <button onClick={toggleForm}>Edit This Quote</button>
       </div>
      }
       </>
    );
}

export default Quote;
