import =Quotes from './=Quotes.js';

function Main({ quotes, handleDelete, handleUpdate }) {
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