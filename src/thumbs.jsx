/*
thumbs are 56x56px w/ border radius ~5px
hovering over thumb puts a 2px black border and changes the image to the active in carosel
unselected thumbs have a white opaque overlay to fade it slightly
thumbs are aligned vertically along left side of screen, non-responsive
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

class Thumbs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>this is where the thumbs go</p>
    );
  }
}

export default Thumbs;