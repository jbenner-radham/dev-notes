import { Outlet, Link } from 'react-router-dom';
import React from 'react';

function Notes() {
    return (
        <div className="Notes">
            <main>
                <ul>
                    <li>
                        <Link to="/notes/1">Note #1</Link>
                        <Outlet />
                    </li>
                </ul>
            </main>
        </div>
    );
}

export default Notes;
