import { useState, useEffect } from 'react';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
// import Nav from './components/Nav';

function App() {
  const [quotesState, setQuotesState] = useState({ quotes: [] });

  useEffect(() => {
   getQuotes();
  }, []);

  function getQuotes() {
    fetch('/quotes')
    .then(res => res.json())
    .then(json => setQuotesState({quotes: json}))
    .catch(error => console.log(error));
  }

  function handleAdd(event, formInputs) {
    event.preventDefault();
    fetch('/quotes', {
      body: JSON.stringify(formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdNotice => createdNotice.json())
    .then(jsonedNotice => { setQuotesState(prevState => 
      ({ quotes: [jsonedNotice, ...prevState.quotes] }))
    })
    .catch(error => console.log(error))
  }
  
  function handleDelete(deletedNotice) {
    fetch(`/quotes/${deletedNotice.id}`, {
      method: 'DELETE',
      // headers: {
      //   'Accept': 'application/json, text/plain, */*',
      //   'Content-Type': 'application/json'
    }).then(() => {
     getQuotes();
      })
      .catch(error => console.log(error));
    }
  
    function handleUpdate(event, formInputs) {
      event.preventDefault();
      fetch(`/quotes/${formInputs.id}`, {
        body: JSON.stringify(formInputs),
        method: 'PUT',
        headers: {
          // 'Accept': 'application/json, text/plain, */*', doesnt need
          'Content-Type': 'application/json'
        }
      })
      .then(() => {
       getQuotes();
      })
      .catch(error => console.log(error));
    }

    return (
      <div className="App">
        <div className='container'>
          <Header />
          <Aside 
          handleSubmit={handleAdd} 
          />
          <Main 
          quotes={quotesState.quotes} 
          handleDelete={handleDelete}
          handleUpdate={handleUpdate} 
          />
          <Nav />
          <Footer />
        </div>
      </div>
    );
}

export default App;
