import { Canvas } from "@react-three/fiber";
import Macbook from "../three/Macbook";

export default function About() {
  return (
    <section className="bg-black text-white p-5">
      <h1 className="text-4xl">About Me</h1>
      <br />
      <p>
        My name is Zaire and I am highly motivated web developepr. I am
        proficient in working with React for frontend development, Express for
        backend development, and MongoDB for database management. These tools
        empower me to create unique and creative projects!{" "}
      </p>
      <br />
      <section className="flex gap-20">
        <div>
          <h2 className="font-bold">Frontend</h2>
          <br />
          <p>
            <span>Javascript</span>
          </p>
          <p>
            <span>React</span>
          </p>
          <p>
            <span>Typescript</span>
          </p>
          <p>
            <span>Redux & Redux Query</span>
          </p>
          <p>
            <span>React Three Fiber</span>
          </p>
        </div>
        <div>
          <h2 className="font-bold">Backend</h2>
          <br />
          <p>
            <span>Node</span>
          </p>
          <p>
            <span>Express</span>
          </p>
          <p>
            <span>MongoDB</span>
          </p>
          <p>
            <span>Firebase</span>
          </p>
        </div>
      </section>
      <div className="border-b mt-5"></div>
    </section>
  );
}
