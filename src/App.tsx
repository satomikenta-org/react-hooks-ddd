import React, { useContext, useReducer } from 'react';
import Home from './pages/Home';
import PrimaryLayout from './components/shared/PrimaryLayout';
import AppContext from './store/context';
import Reducer from './store/reducer';


function App() {
  const initialState = useContext(AppContext);
  const [ state, dispatch ] = useReducer(Reducer, initialState);

  return (
    <AppContext.Provider value={ { state, dispatch } }>
      <PrimaryLayout>
        <Home />
      </PrimaryLayout>
    </AppContext.Provider>
  );
}

export default App;
