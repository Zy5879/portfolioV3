import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Macbook from "../three/Macbook";
import { projects } from "../projects";

export default function Projects() {
  const projectsSummary = projects.map((project, index) => {
    return (
      <section key={index}>
        <div>{project.name}</div>
        <div>
          <img className="bg-black" src={project.img} />
        </div>
        <div>
          Summary
          <p>{project.summary}</p>
        </div>
        <div>
          <p>
            <span>Technologies</span>
          </p>
          <p>
            <span>{project.tech}</span>
          </p>
        </div>
        <div>
          <p>
            <span>Date</span> {project.date}
          </p>
        </div>
        <div>
          <button>LIVE LOOK</button>
          <button>SOURCE CODE</button>
        </div>
      </section>
    );
  });
  return (
    <div className="bg-black text-white">
      <h1>Projects</h1>
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
