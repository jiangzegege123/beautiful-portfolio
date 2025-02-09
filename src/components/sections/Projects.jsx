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
            <h3 className="text-xl font-bold mb-2"> Cloud Platform</h3>
            <div className="w-full border border-white/10 h-50 my-6">
              <img src="" alt="" />
            </div>
            <p className="text-gray-200 mb-4">
              sdasdadas sadsa sadsa sadxasd dsada sda
            </p>
            <div>
              {["React", "Node.js"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text0sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center mt-3">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Project →
              </a>
            </div>
          </div>{" "}
          <div className="p-6 rouned-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
            <h3 className="text-xl font-bold mb-2"> Cloud Platform</h3>
            <div className="w-full border border-white/10 h-50 my-6">
              <img src="" alt="" />
            </div>
            <p className="text-gray-200 mb-4">
              sdasdadas sadsa sadsa sadxasd dsada sda
            </p>
            <div>
              {["React", "Node.js"].map((tech, key) => (
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
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors"
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
