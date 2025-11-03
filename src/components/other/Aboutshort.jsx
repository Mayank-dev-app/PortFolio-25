
import codingImage from '../../assets/myimage/image.png' // aap local path ya direct URL use kar sakte ho

const Aboutshort = () => {
  return (
    <section className="flex items-center justify-center px-6 py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Laptop / Coding Image */}
        <div className="flex justify-center">
          <img
            src={codingImage}
            alt="Coding Laptop"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-yellow-400 
                       transition-transform duration-300 hover:scale-105 hover:shadow-yellow-400/60"
          />
        </div>

        {/* Right Side - Text */}
        <div className="text-white font-serif">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
            About Me
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded mb-6"></div>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I’m <span className="text-yellow-300 font-semibold">Mayank Sharma</span>, 
            a passionate Full Stack Developer who loves building
            modern, scalable, and user-friendly web applications.
            I specialize in <span className="text-yellow-300">React.js, Node.js, and Express</span>, 
            with hands-on experience in developing real-world projects.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            My focus is always on writing clean, maintainable code
            and creating interfaces that deliver a smooth user experience.
            Currently, I’m working on personal projects and preparing
            for engineering interviews to level up my career.
          </p>

          <button
            className="px-7 py-2 rounded-2xl font-medium shadow-md 
                       bg-yellow-400 text-black border border-yellow-400
                       transition-all duration-300 
                       hover:bg-transparent hover:text-yellow-400 hover:scale-105"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Aboutshort
