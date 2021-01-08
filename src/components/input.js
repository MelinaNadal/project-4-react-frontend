function Input({ 
    artist, 
    song, 
    quote, 
    value, 
    placeholder, 
    handleChange }) {
      return (
        <>
          <label htmlFor={artist}>{song}</label>
          <input
            id={artist}
            artist={artist}
            quote={quote}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
          />
        </>
      );
  }
  
  export default Input;
  