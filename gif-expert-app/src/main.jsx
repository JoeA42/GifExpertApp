import React from 'react';
import ReactDOM from 'react-dom/client';
import {GifExpertApp} from "./GifExpertApp";

import './styles.css';

/*React DOM main render*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)
