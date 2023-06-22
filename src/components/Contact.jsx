import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.footer
      id="contact"
      className="bg-black text-neutral-400 p-5"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-3xl text-white font-bold">Contact Me</h1>
      <br />
      <p>
        <span className="text-white">GET IN TOUCH WITH ME!</span>
      </p>
      <a href="mailto:ZaireM21@gmail.com">
        <span className>ZAIREM21@GMAIL.COM</span>
      </a>
      <section>
        <br />
        <div className="text-lg">
          <p>
            <span>Zaire McAllister</span>
          </p>
          <p>
            <span>North Carolina</span>
          </p>
        </div>
        <br />
        <div className="text-lg">
          <p>
            <span>Built With</span>
          </p>
          <br />
          <p>React</p>
          <p>React Three Fiber</p>
          <p>Tailwind</p>
          <p>Framer Motion</p>
        </div>
        <br />
        <div className="flex gap-5 text-lg text-white font-bold">
          <a href="https://www.instagram.com/zy.mcallister/">INSTAGRAM</a>
          <a href="https://github.com/Zy5879">GITHUB</a>
        </div>
      </section>
    </motion.footer>
  );
}
