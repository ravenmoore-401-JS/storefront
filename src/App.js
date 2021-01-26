import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Button variant="contained" color="primary">
        Hello New Ravenmoore Sales Page!
      </Button>
    </div>
  );
}

export default App;
