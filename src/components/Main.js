import =Quotes from './=Quotes.js';

function Main({ notices, handleDelete, handleUpdate }) {
    return (
      <main>
        <=Quotes 
        quotes={quotes} 
        handleDelete={handleDelete}
        handleUpdate={handleUpdate} 
        />
      </main>
    );
}

export default Main;