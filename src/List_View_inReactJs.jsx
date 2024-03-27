import React from 'react';

const List_View_inReactJs =({ data })=> {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

// Example usage



export default  List_View_inReactJs;
