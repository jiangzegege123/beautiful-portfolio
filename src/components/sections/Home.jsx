import { RevealOnScroll } from "../RevealOnScroll";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        {/* <div className="flex justify-center mb-6">
          <img
            src="/beautiful-portfolio/avatar.jpg" // 替换为你的头像路径
            alt="Johnny's Avatar"
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
          Hi, I'm Johnny
        </h1> */}

        <div className="flex flex-col md:flex-row items-center justify-center space-x-4 my-6">
          {/* 头像 */}
          <img
            src="/beautiful-portfolio/avatar.png" // 替换为你的头像路径
            alt="Johnny's Avatar"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-blue-500 shadow-lg"
          />

          {/* 文字 */}
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Hi, I'm Johnny
          </h1>
        </div>

        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I'm a UNSW Master of IT student. I'm passionate about hitting the
          courts for tennis 🎾 and badminton 🏸. And when it comes to food, I
          absolutely adore indulging in delicious all-you-can-eat buffets .
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
