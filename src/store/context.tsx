import React from 'react';

const AppContext = React.createContext<any>({
  tweets: [],
}); 

export default AppContext;
