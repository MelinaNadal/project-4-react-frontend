import Quote from './Quote.js';

function Notices({ quotes, handleDelete, handleUpdate }) {
    return (
      <div>
        {quotes.map(quote => 
          <Quote 
            key={quote.id} 
            quote={quote}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        )}
      </div>
    );
}

export default Quotes;
