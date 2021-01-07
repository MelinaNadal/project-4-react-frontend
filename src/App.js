import { useState, useEffect } from 'react';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  const [noticesState, setNoticesState] = useState({ notices: [] });

  useEffect(() => {
    getNotices();
  }, []);

  function getNotices() {
    fetch('/notices')
    .then(res => res.json())
    .then(json => setNoticesState({notices: json}))
    .catch(error => console.log(error));
  }

  function handleAdd(event, formInputs) {
    event.preventDefault();
    fetch('/notices', {
      body: JSON.stringify(formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdNotice => createdNotice.json())
    .then(jsonedNotice => { setNoticesState(prevState => 
      ({ notices: [jsonedNotice, ...prevState.notices] }))
    })
    .catch(error => console.log(error))
  }
  
  function handleDelete(deletedNotice) {
    fetch(`/notices/${deletedNotice.id}`, {
      method: 'DELETE',
      // headers: {
      //   'Accept': 'application/json, text/plain, */*',
      //   'Content-Type': 'application/json'
    }).then(() => {
      getNotices();
      })
      .catch(error => console.log(error));
    }
  
    function handleUpdate(event, formInputs) {
      event.preventDefault();
      fetch(`/notices/${formInputs.id}`, {
        body: JSON.stringify(formInputs),
        method: 'PUT',
        headers: {
          // 'Accept': 'application/json, text/plain, */*', doesnt need
          'Content-Type': 'application/json'
        }
      })
      .then(() => {
        getNotices();
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
          notices={noticesState.notices} 
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
