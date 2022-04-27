import React from 'react';

const skills = [
    {
        label: "Proficient",
        list: [
            "Javascript (ES6+)",
            "PHP",
            "Node.js",
            "SQL",
            "React/React Native",
            "Redis",
            "Amazon Web Services",
            "HTML/CSS",
            "Git",
        ],
    },
    {
        label: "Familiar",
        list: [
            'Python',
            'Machine Learning',
            'Elasticsearch',
            'Mobile Development',
            'Firebase',
            'Tableau',
            'Salesforce',
            'Swift',
            'Docker',
        ],
    },
];

function Skills() {
    return (
        <section className="row list-row">
            <h3 className="row-title">Skills</h3>
            <div className="skills">
                {skills.map(({ label, list }) => {
                    return (
                        <ul key={label} className="skill-column">
                            <strong>{label}</strong>
                            {list.map(skill => <li key={`${label}_${skill}`}>{skill}</li>)}
                        </ul>
                    )
                })}
            </div>
        </section>
    )
}

export default Skills;
