import { projects } from "../projects";
import { delay, motion } from "framer-motion";

export default function Projects() {
  const projectsSummary = projects.map((project, index) => {
    return (
      <motion.section
        key={index}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl mt-10 mb-5">{project.name}</h2>
        <div>
          <img className="bg-black" src={project.img} />
        </div>
        <div className="mt-5">
          <h3 className="text-3xl">Summary</h3>
          <p>{project.summary}</p>
        </div>
        <div>
          <h4 className="text-3xl mt-5">Technologies</h4>
          <p>
            <span>{project.tech}</span>
          </p>
        </div>
        <div className="mt-5">
          <p>
            <span className="font-bold">Date</span> {project.date}
          </p>
        </div>
        <div className="flex gap-5 mt-5">
          <button>LIVE LOOK</button>
          <button>SOURCE CODE</button>
        </div>
        <div className="border-b mt-5"></div>
      </motion.section>
    );
  });
  return (
    <div className="bg-black text-white p-6">
      <motion.h2
        className="text-5xl"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>
      <div className="border-b mt-10"></div>
      <br />
      {projectsSummary}
    </div>
  );
}

// <Canvas
//   className="touch-none"
//   camera={{ fov: 60, near: 0.1, far: 2000, position: [-3, 1.5, 4] }}
// >
//   <color args={["#28282B"]} attach="background" />
//   <Macbook
//     iframe={"https://zy5879.github.io/battleship/"}
//     color={"#5A5A5A"}
//     y={-1.2}
//     rx={-0.256}
//   />
// </Canvas>
