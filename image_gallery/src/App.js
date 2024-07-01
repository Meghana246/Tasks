import React from 'react';
import Gallery from './Model';
import './index.css';

import l from './images/l.jpg.jpg';
import b from './images/b.jpg.jpg';
import c from './images/c.jpg.jpeg';
import d from './images/d.jpg.jpeg';
import e from './images/e.jpg.jpeg';
import f from './images/f.jpg.jpeg';
import g from './images/g.jpg.jpeg';
import h from './images/h.jpg.jpg';
import i from './images/i.jpg.jpg';
import j from './images/j.jpg';
import k from './images/k.jpg';


const App = () => {
    const images = [
        {url: l, name: 'Image 1'},
        {url: b, name: 'Image 2'},
        {url: c, name: 'Image 3'},
        {url: d, name: 'Image 4'},
        {url: e, name: 'Image 5'},
        {url: f, name: 'Image 6'},
        {url: g, name: 'Image 7'},
        {url: h, name: 'Image 8'},
        {url: i, name: 'Image 9'},
        {url: j, name: 'Image 10'},
        {url: k, name: 'Image 11'},
       
    ];

    return (
        <div>
            <h1>IMAGE GALLERY</h1>
            <Gallery images={images} />
        </div>
    );
};

export default App;
