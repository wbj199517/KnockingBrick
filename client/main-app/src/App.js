import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Join from './component/chat-room/Join/Join';
import Chat from './component/chat-room/Chat/Chat';
import Navigation from './component/main-page/Navigation';

const App = () => (
    <Router>
        <Route path="/"  exact component={Navigation} />
        <Route path="/chat-room/join" exact component={Join} />
        <Route path="/chat-room/chat"  component={Chat} />
    </Router>
);

export default App;