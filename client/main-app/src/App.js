import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Join from './chat-room/component/Join/Join';
import Chat from './chat-room/component/Chat/Chat';
import Navigation from './main-page/Navigation';
import TrackerMainPage from './covid-19-tracker/TrackerMainPage/TrackerMainPage';
import YoutubeMainPage from './youtube/component/YoutubeMainPage/YoutubeMainPage';
import OpentableMainPage from './open-table/component/OpentableMainPage';

const App = () => (
    <Router>
        <Route path="/"  exact component={Navigation} />
        <Route path="/chat-room/join" exact component={Join} />
        <Route path="/chat-room/chat"  component={Chat} />
        <Route path="/covid-19/"  component={TrackerMainPage} />
        <Route path="/fake-youtube/" component={YoutubeMainPage}/>
        <Route path="/open-table/" component={OpentableMainPage}/>
    </Router>
);

export default App;