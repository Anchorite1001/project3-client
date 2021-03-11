import React from 'react';
import { HashRouter, Route} from 'react-router-dom';
import Join from './Join';
import Chat from './Chat';

import "xp.css/dist/XP.css";

const App = () => {

  return (
    <HashRouter>
      <Route exact path = '/' component = { Join } />
      <Route path = '/chat' component = { Chat } />
      { /*no 'exact' because of different chatrooms*/ }
    </HashRouter>
  )

}

export default App;
