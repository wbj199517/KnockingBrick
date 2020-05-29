import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return(
        <div>
        <h1>Main Page</h1>
        <Link  to={'/chat-room/join'}>
        <button>chat room</button>
        </Link>

        <Link  to={'/covid-19/'}>
        <button>covid-19 tracker</button>
        </Link>
        </div>
    )
}

export default Navigation;
 