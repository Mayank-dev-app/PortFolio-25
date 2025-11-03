import  image  from "../../../assets/myimage/StudentImage.jpg"
export const Top = () => {

    const skills = [
        { name: 'React.js', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'MySQL / MongoDB', level: 80 },
    ]
    return (
        <section
            id="about"
            className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-20 px-6"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left - Profile Image */}
                <div className="flex justify-center">
                    <img
                        src={image} // Apni photo public/images me dalna
                        alt="Mayank Sharma"
                        className="rounded-2xl shadow-lg border-4 border-yellow-400 w-72 h-72 md:size-120 object-cover hover:scale-105 transition-all"
                    />
                </div>

                {/* Right - Introduction */}
                <div>
                    {/* Name & Role */}
                    <h2 className="text-4xl font-bold text-yellow-400 mb-2 font-serif">Mayank Sharma</h2>
                    <h3 className="text-xl text-gray-300 mb-4"> Full Stack Developer</h3>

                    {/* Tagline */}
                    <p className="text-yellow-300 text-lg italic mb-6">
                        "Building beautiful and functional web applications with modern tech."
                    </p>

                    {/* Short Bio */}
                    <p className="text-gray-300 leading-relaxed mb-6">
                        Hi, I’m <span className="text-yellow-400 font-semibold">Mayank</span>.
                        A passionate developer who loves solving real-world problems using
                        <span className="text-yellow-300"> React.js, Node.js, and modern web technologies</span>.
                        Currently, I’m sharpening my skills in full-stack development and
                        working on exciting projects.
                    </p>

                    {/* Skills */}
                    <h3 className="text-2xl font-bold font-serif text-yellow-400 mb-6 tracking-wide">
                        Skills
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {skills.map((skill, index) => (
                            <div key={index} className="text-left">
                                <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                                    <div
                                        className="h-3 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 transition-all duration-700 ease-out"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}