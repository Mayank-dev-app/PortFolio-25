import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React.js', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 80 },
    { name: 'JavaScript (ES6+)', level: 95 },
    { name: 'Tailwind CSS / CSS3', level: 90 },
    { name: 'MongoDB', level: 80 },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-900/90 via-black/90 to-gray-900/90 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-yellow-400 mb-2">Technical Skills</h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-12 rounded"></div>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
          I specialize in building end-to-end web applications with a strong focus on clean code, scalable architecture, and efficient design.  
          Below are some of the technologies and tools I work with regularly to deliver high-quality solutions.
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="text-left text-white">
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div
                  className="bg-yellow-400 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
