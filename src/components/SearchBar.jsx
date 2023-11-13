import React, { useRef } from 'react';

export default function SearchBar(props) {

  const inputRef = useRef();

  const event = () => {

    const userID = inputRef.current.value;

    props.onSearch(userID);
  }

   //console.log(props.onSearch)
  return (
        <div>
          <input type="search" ref={inputRef} />
          <button onClick={event}>Agregar</button>
        </div>
  );
}
