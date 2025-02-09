function About() {
  const frontendSkills = ["React", "TailwindCss"];

  const backendSkills = ["Node.js"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            A young person who constantly jumps around between different
            industries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, id) => (
                  <span
                    key={id}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text0sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, id) => (
                  <span
                    key={id}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text0sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rouned-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S. in Swedish</strong>
                  <p>- Shanghai International Studies University (2015-2019)</p>
                </li>
                <li>
                  <strong>M.S. in Information Technology</strong>
                  <p>- University of New South Wales (2024-Present)</p>
                </li>
              </ul>
            </div>
            <div className="p-6 rouned-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Content Operations Specialist</strong>
                  <p>- SAIC Volkswagen Automotive (2020-2021)</p>
                </li>
                <li>
                  <strong>Marketing Specialist/ English Teacher</strong>
                  <p>- New Oriental Education (2022-2024)</p>
                </li>
              </ul>
            </div>
            {/* 
            <div className="p-6 rouned-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Content Operations Specialist at SAIC Volkswagen Automotive
                    (2020-2021)
                  </h4>
                  <p>
                    -Managed content posted by in-app accounts, topics, and
                    influencer accounts
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Marketing Specialist/ English Teacher at New Oriental
                    Education (2022-2024)
                  </h4>
                  <p>
                    -Planned and execute offline large-scale lectures,
                    consultation sessions and other events.
                  </p>
                  <p>-Served as an English teacher to instruct students</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
