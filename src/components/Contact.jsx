import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.footer
      className="bg-black text-white p-5"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <p>
        <span>GET IN TOUCH WITH ME!</span>
      </p>
      <a href="mailto:ZaireM21@gmail.com">
        <span>ZAIREM21@GMAIL.COM</span>
      </a>
      <section>
        <br />
        <div>
          <p>
            <span>Zaire McAllister</span>
          </p>
          <p>
            <span>North Carolina</span>
          </p>
        </div>
        <br />
        <div>
          <p>
            <span>Built With</span>
          </p>
          <br />
          <p>React</p>
          <p>React Three Fiber</p>
          <p>Tailwind</p>
        </div>
        <br />
        <div className="flex gap-5">
          <a href="https://www.instagram.com/zy.mcallister/">INSTAGRAM</a>
          <a href="https://github.com/Zy5879">GITHUB</a>
        </div>
      </section>
    </motion.footer>
  );
}
