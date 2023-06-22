import { projects } from "../projects";
import { delay, motion } from "framer-motion";

export default function Projects() {
  const projectsSummary = projects.map((project, index) => {
    return (
      <>
        <motion.section
          key={index}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:flex md:items-center md:gap-10 md:mb-20"
        >
          <main className="md:w-2/4">
            <h2 className="text-3xl mt-10 mb-5">{project.name}</h2>
            <div>
              <img
                className="bg-black aspect-squre rounded-md bg-center bg-cover bg-no-repeat "
                src={project.img}
              />
            </div>
          </main>
          <aside className="md:w-2/4 md:mt-8">
            <div className="mt-5">
              <h3 className="text-3xl text-white font-bold">Summary</h3>
              <p className="text-neutral-400 text-sm md:text-base">
                {project.summary}
              </p>
            </div>
            <div>
              <h4 className="text-3xl mt-5 text-white font-bold">
                Technologies
              </h4>
              <p className="text-neutral-400 text-sm md:text-base">
                <span>{project.tech}</span>
              </p>
            </div>
            <div className="mt-5">
              <p className="text-white font-bold">
                Date{" "}
                <span className="text-neutral-400 text-sm font-normal ml-2 md:text-base">
                  {project.date}
                </span>
              </p>
            </div>
            <div className="flex gap-5 mt-5 text-sm font-bold md:text-base">
              <a>LIVE LOOK</a>
              <a>SOURCE CODE</a>
            </div>
          </aside>
        </motion.section>
        <motion.div
          className="border-b border-0 mt-10"
          initial={{ opacity: 0, x: -400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </>
    );
  });
  return (
    <div className="bg-black text-white p-6" id="projects">
      <motion.h2
        className="text-5xl"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="border-b border-0 mt-10"
        initial={{ opacity: 0, x: -400 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      ></motion.div>
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
