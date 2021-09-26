import React from 'react';
import ReactDOM from 'react-dom';

import 'terminal.css';
import './scss/app.scss';

import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';

import brianHeadshot from './assets/images/brian_headshot.jpg';

const App = () => (
  <div className="container">
    <Header />
    <hr />
    <div className="home">

      <section className="row">
        <div className="jumbotron">
          <img className="headshot-img" src={brianHeadshot} alt="Brian headshot" title="Brian headshot" />
          <h2>Brian Fitzsimmons</h2>
          <p>Software Engineer - Seattle, WA</p>
        </div>
      </section>

      <About />

      <Work />

      <Skills />

      <Contact />

    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
