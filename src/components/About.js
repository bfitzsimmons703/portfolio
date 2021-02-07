import React from 'react';

import { numberToWord } from '../helpers';

function About() {
  const yearsExperience = numberToWord((new Date()).getFullYear() - 2017);

  return (
    <section className="row about">
      <h3 className="row-title">About Me</h3>
      <div className="bio">
        <p>
          Welcome! I am a full-stack software enginner with {yearsExperience} years of experience, having worked as a freelancer and as a full-time employee of Sporcle, Inc.
          I work in a variety of domains ranging from data science and machine learning to mobile games, though I am most proficient as a web developer.
          I build frontend Javascript applications, backend APIs, real-time web apps, recommendation engines, and database solutions.
          <br />
          <br />
          I am completely self-taught, so these past {yearsExperience} have been busy!
          I have gone from simple Wordpress blogs and REST APIs to mobile apps with thousands of downloads and custom web features that get pinged millions of times per day.
          And in the future, I hope to explore game development and systems-level engineering. (Looking at you Rust!)
        </p>
        <p>
          In my spare time, I&apos;m probably working out or playing one of my several musical instruments.
          I dabble in ukulele and guitar and have played piano since kindergarten, so if programming does&apos;t work out, who knows, maybe I&apos;ll form a band!
          <br />
          <br />
          I&apos;m constantly hunting for new podcasts as well; my staples include The Daily, Radio Lab, and the whole suite of NPR shows. If it&apos;s science or politics, sign me up!
          <br />
          <br />
          Thank you for visiting my profile, and if you have any questions, feel free to reach out on my social media or the contact form below!
        </p>
      </div>
    </section>
  );
}

export default About;