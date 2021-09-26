import React from 'react';

import { numberToWord } from '../helpers';

function About() {
  const yearsExperience = numberToWord((new Date()).getFullYear() - 2017);

  return (
    <section className="row about">
      <h3 className="row-title">About Me</h3>
      <div className="bio">
        <p>
          I&apos;m a self-taught software engineer with 4 years of experience building full-stack applications.
          <br />
          <br />
          I&apos;ve built cross platform mobile games, real-time multiplayer web-apps, ML-driven recommendation engines, and backend APIs that get millions of hits per day.
          <br />
          <br />
          In the future, I hope to explore game development and systems-level engineering. (Looking at you Rust.)
        </p>
        <p>
          Previously, I was an English teacher in South Korea, an aspiring food truck chef, and a WordPress developer.
          <br />
          <br />
          Outside of work you can find me playing piano and rewatching the Marvel movies.
        </p>
      </div>
    </section>
  );
}

export default About;