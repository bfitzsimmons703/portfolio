import React from 'react';

function Work() {
    return (
        <section className="row list-row">
            <h3 className="row-title">Work</h3>
            <ul className="work-list">
                <strong>
                    <a href="https://www.sporcle.com" target="_blank" rel="noreferrer">Sporcle, Inc.</a>
                </strong>
                <p>Software Engineer, Sept 2017 - April 2022</p>
                <li>Leveraged knowledge in JavaScript, PHP, SQL, and AWS to develop full-stack features across Sporcle.com&apos;s desktop and mobile sites, helping it scale to 1M+ gameplays per day.</li>
                <li>Project owner for Sporcle&apos;s recommendation engine. Used Elasticsearch, Redis, and collaborative filtering ML to serve personalized content to 550,000+ users.</li>
                <li>Collaborated with Sporcle CTO and customers to develop a real-time multiplayer scoring app for live trivia that now generates over $50,000 per week.</li>
                <li>Learned Git, React Native, and mobile app development to create Sporcle Word Ladder, a mobile trivia game available on iOS and Android with a 4.5 star rating.</li>
                <li>Learned Swift to build the majority of Sporcle&apos;s revamped iOS app, including in-app purchases, social authentication, web-view rendering, and backend infrastructure.</li>
                <li>Used Tableau and SQL (MySQL, Redshift) to produce graphs of Sporcle&apos;s KPIs and investigate user behavior, bringing a data-centric/evidence-based approach to product development.</li>
                <li>Designed a timeseries forecasting model that predicted Sporcle KPIs with 98% accuracy between 2020-2022.</li>
            </ul>
        </section>
    )
}

export default Work;
