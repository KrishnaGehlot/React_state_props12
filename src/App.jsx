import React from 'react'
import List_View_inReactJs from './List_View_inReactJs';
const  App = () => {
    

        const data =  [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' }
          ];
   

      
      

    return (
      <div>
        <h1>List View Example</h1>
        <List_View_inReactJs data={data} />
      </div>
    );
  }

export default App