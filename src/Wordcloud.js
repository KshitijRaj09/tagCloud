import React from 'react';
function Wordcloud({ cloudWords }) {
  function displayCloud() {
    return cloudWords.map(word => (
      <span
        className="word-span"
        key={word[0]}
        style={{
          display: 'inline-block',
          fontSize: `${word[1] * 14}px`,
          color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          transform: `rotate(${(Math.random() - 0.5) * 50}deg)`,
          cursor: 'pointer'
        }}
        onMouseOver={() => countShow(word[1])}
      >
        {word[0]}
        <span className="tooltip-text">Count {word[1]}</span>
      </span>
    ));
  }

  function countShow(e) {}

  return (
    <>
      {cloudWords.length > 0 && (
        <div className="wordCloud">{displayCloud()}</div>
      )}
    </>
  );
}

const WordcloudMemomized = React.memo(Wordcloud);
export default WordcloudMemomized;
