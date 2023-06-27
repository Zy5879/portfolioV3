import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="bg-black text-white p-5"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl">About Me</h1>
      <br />
      <p className="text-neutral-400 md:text-2xl">
        My name is Zaire and I am highly motivated Frontend Developer. I am
        proficient in working with React for frontend development, Express for
        backend development, and MongoDB for database management. These tools
        empower me to create unique and creative projects!{" "}
      </p>
      <br />
      <section className="flex gap-20">
        <div className="text-neutral-400 md:text-lg">
          <h2 className="font-bold text-white md:text-xl">Frontend</h2>
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
        <div className="text-neutral-400 md:text-lg">
          <h2 className="font-bold text-white md:text-xl">Backend</h2>
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
      <motion.div
        className="border-b mt-5"
        initial={{ opacity: 0, x: -400 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      ></motion.div>
    </motion.section>
  );
}
