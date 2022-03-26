import { Editor as BytemdEditor } from '@bytemd/react';
import gfm from '@bytemd/plugin-gfm';
import React, { useState } from 'react';
import 'bytemd/dist/index.css';

function Editor() {
    const plugins = [gfm()];
    const [value, setValue] = useState('');

    return (
        <div className="Editor">
            <main>
                <BytemdEditor value={value} plugins={plugins} onChange={setValue}/>
            </main>
        </div>
    );
}

export default Editor;
