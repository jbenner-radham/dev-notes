import { Viewer } from '@bytemd/react';
import gfm from '@bytemd/plugin-gfm';
import React from 'react';
import 'bytemd/dist/index.css';

function ViewNote() {
    const plugins = [gfm()];
    const value = '# Hello world!';

    return (
        <div className="ViewNote">
            <main>
                <Viewer value={value} plugins={plugins}/>
            </main>
        </div>
    );
}

export default ViewNote;
