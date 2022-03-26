import Box from '@mui/material/Box';
import { Editor, Viewer } from '@bytemd/react';
import gfm from '@bytemd/plugin-gfm';
import Paper from '@mui/material/Paper';
import React, { KeyboardEventHandler, SetStateAction, useState } from 'react';
import 'bytemd/dist/index.css';
// import showdown from 'showdown';
// import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';
import './App.css';
// import 'prismjs/themes/prism-dark.css'

// const Editor = styled(Paper)(({ theme }) => ({
//     color: theme.palette.text.secondary,
//     component: 'code',
//     padding: theme.spacing(1)
// }));

// const Preview = styled(Paper)(({ theme }) => ({
//     color: theme.palette.text.secondary,
//     padding: theme.spacing(1)
// }));

// function convert() {
//     const md = (document.getElementById('App__editor') as HTMLDivElement).innerText;
//     const target = document.getElementById('App__preview')
//     const converter = new showdown.Converter();

//     converter.setFlavor('github');

//     const html = converter.makeHtml(md);

//     target!.innerHTML = html;
// }

function App() {
    const plugins = [gfm()];
    const [value, setValue] = useState('');

    return (
        <Editor
            value={value}
            plugins={plugins}
            onChange={setValue}
        />
    )
    // return (
    //     <div className="App">
    //         <main>
    //             <Editor value={value} plugins={plugins} onChange={(v) => { setValue(v) }}/>
    //             {/* <Stack direction="row" spacing={2}> */}
    //                 {/* <Box component="div" sx={{ border: 5, borderColor: 'primary.main', minHeight: 'calc(50vh - 1rem)', width: '48%', padding: '2rem' }} contentEditable></Box> */}
    //                 {/* <Editor sx={{ height: 'calc(100vh - 3rem)', width: '48%' }} onKeyUp={convert}> */}
    //                     {/* <Box component="code" id="App__editor" className="language-markdown" sx={{ height: '100%', width: '100%' }} contentEditable></Box> */}
    //                 {/* </Editor> */}
    //                 {/* <Preview id="App__preview" sx={{ height: 'calc(100vh - 3rem)', textAlign: 'left', width: '48%' }}></Preview> */}
    //             {/* </Stack> */}
    //         </main>
    //     </div>
    // );
}

export default App;
