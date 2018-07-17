import React from 'react';
import Paper from '@material-ui/core/Paper';


import ListContainer from './components/todoList';
import FormContainer from './components/todoForm';
import './style.css';


function App() {
    return (
      <div className="wrapper">
        <Paper elevation={1} className="paper_item">
            <FormContainer />
            <ListContainer />
        </Paper>
      </div>
    );
}

export default App;
