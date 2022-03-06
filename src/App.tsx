import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import React, { KeyboardEventHandler } from 'react';
import showdown from 'showdown';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import './App.css';

const Editor = styled(Paper)(({ theme }) => ({
    color: theme.palette.text.secondary,
    padding: theme.spacing(1)
}));

const Preview = styled(Paper)(({ theme }) => ({
    color: theme.palette.text.secondary,
    padding: theme.spacing(1)
}));

function convert() {
    const md = (document.getElementById('App__editor') as HTMLDivElement).innerText;
    console.log({ md })
    const target = document.getElementById('App__preview')
    const converter = new showdown.Converter();

    converter.setFlavor('github');

    const html = converter.makeHtml(md);

    target!.innerHTML = html;
}

function App() {
  return (
    <div className="App">
        <main>
            <Stack direction="row" spacing={2}>
                {/* <Box component="div" sx={{ border: 5, borderColor: 'primary.main', minHeight: 'calc(50vh - 1rem)', width: '48%', padding: '2rem' }} contentEditable></Box> */}
                <Editor id="App__editor" sx={{ height: 'calc(100vh - 3rem)', width: '48%' }} onKeyUp={convert} contentEditable></Editor>
                <Preview id="App__preview" sx={{ height: 'calc(100vh - 3rem)', padding: '2rem', textAlign: 'left', width: '48%' }}></Preview>
            </Stack>
        </main>
    </div>
  );
}

export default App;
