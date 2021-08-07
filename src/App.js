import React, { useState } from 'react';
import Wordcloud from './Wordcloud';
import './style.css';

export default function App() {
  const [state, setState] = useState('');
  const [cloudWords, setCloudWords] = useState([]);

  function generate() {
    let obj = {};
    if (state.trim() === '') return;
    let wordsArray = state
      .toLowerCase()
      .replace(/\n/g, ' ')
      .replace(/\./g, '')
      .split(' ');
    for (let word of wordsArray) {
      if (word === '') continue;
      else if (word in obj) {
        obj[word]++;
      } else {
        obj[word] = 1;
      }
    }
    let freqArray = Object.entries(obj);
    console.log(obj);
    setCloudWords(freqArray);
  }

  return (
    <div className="mainDiv">
      <h1>Tag Cloud</h1>
      <textarea onChange={e => setState(e.target.value)} />
      {state.trim() !== '' ? (
        <button onClick={generate}>Generate Cloud</button>
      ) : null}
      <Wordcloud cloudWords={cloudWords} />
    </div>
  );
}
