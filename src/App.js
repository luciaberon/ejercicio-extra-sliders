import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React  from 'react';
import CreationComponent from './components/container/character_creation';
import CharactersList from './components/container/character_list';
import { ContextProvider } from './context/Context'

function App() {

  return (
    <ContextProvider>    
      <CreationComponent />
      <CharactersList/>
    </ContextProvider>
  );
}

export default App;

