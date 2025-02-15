function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rouned-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
            <h3 className="text-xl font-bold mb-2"> WorldWise</h3>
            <div className="w-full border border-white/10 h-50 my-10 ">
              <img src="/beautiful-portfolio/world.png" alt="WorldWise" />
            </div>
            <p className="text-gray-200 mb-4">
              WorldWise is a travel tracking app where users can log visited
              places on a map. It uses <strong>Leaflet</strong> for maps,{" "}
              <strong>Context API</strong> for state management, and{" "}
              <strong>CSS Modules</strong> for styling. A login system allows
              personalized travel records.
            </p>
            <div className="my-6">
              {["Vite", "Context API", "Leaflet", "CSS Modules"].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text0sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
            <div className="flex justify-between items-center mt-3">
              <a
                href="https://github.com/jiangzegege123/WorldWise"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                target="_blank"
              >
                View Project →
              </a>
            </div>
          </div>{" "}
          <div className="p-6 rouned-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
            <h3 className="text-xl font-bold mb-2"> Fast-React-Pizza </h3>
            <div className="w-full border border-white/10 h-50 my-10">
              <img src="/beautiful-portfolio/pizza.png" alt="pizza" />
            </div>
            <p className="text-gray-200 mb-4">
              Fast-React-Pizza is an online pizza ordering app with login, order
              placement, and real-time order tracking. It uses{" "}
              <strong>Tailwind CSS </strong>
              for styling and <strong>Redux</strong> for state management,
              ensuring a smooth and responsive user experience. 🚀🍕
            </p>
            <div className="my-6">
              {["Vite", "Tailwind", "Redux"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text0sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center mt-5">
              <a
                href="https://github.com/jiangzegege123/fast-react-pizza"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                target="_blank"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
