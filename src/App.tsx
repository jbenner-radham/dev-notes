import { Link, NavLink, Outlet } from 'react-router-dom';
import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header>
                <nav>
                    <ul className="App__links">
                        <li>
                            <NavLink className={({ isActive }) => 'App__link ' + (isActive ? 'App__link--active' : '')} to="/notes">Notes</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default App;
