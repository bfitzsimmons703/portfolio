import React from 'react';

function Work() {
    return (
        <section className="row experience">
            <h3 className="row-title">Work</h3>
            <ul className="work-list">
                <strong>
                    <a href="https://www.sporcle.com" target="_blank" rel="noreferrer">Sporcle, Inc.</a>
                </strong>
                <p>Software Engineer, 2017 - present</p>
                <li>Leveraged knowledge in JavaScript, HTML/CSS, PHP, and SQL to develop and debug full-stack features across Sporcle.com&apos;s desktop and mobile sites, helping it scale to 1.6M+ gameplays per day.</li>
                <li>Used Elasticsearch, Redis, and collaborative filtering with implicit datasets to build Sporcle&apos;s recommendation engine that serves personalized content to 500,000+ users.</li>
                <li>Collaborated with CTO and customers to develop a real-time scoring app for live, virtual trivia that generated over $450,000 during the pandemic in 2020.</li>
                <li>Learned Git, React Native, and mobile app development to create Sporcle Word Ladder, a mobile trivia game available on iOS and Android.</li>
                <li>Used Tableau and SQL (MySQL, Redshift) to produce graphs of Sporcle\&apos;s KPIs and investigate user behavior, bringing a data-centric/evidence-based approach to product development.</li>
            </ul>
            <ul className="work-list">
                <li>Projects</li>
            </ul>
        </section>
    )
}

export default Work;
