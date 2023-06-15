// import { motion } from "framer-motion";
// import { projects } from "../projects";
// import { Sparkles } from "@react-three/drei";

// const Section = (props) => {
//   const { children } = props;

//   return (
//     <motion.section
//       className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//         transition: { duration: 1, delay: 0.6 },
//       }}
//     >
//       {children}
//     </motion.section>
//   );
// };

// const WelcomeSection = () => {
//   return (
//     <Section>
//       <Sparkles count={1000} />
//       <h1 className="text-4xl font-extrabold leading-snug">
//         <span>Zaire M.</span>
//       </h1>
//       <br />
//       <motion.p
//         className="text-lg"
//         initial={{ opacity: 0, y: 25 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 1.5 }}
//       >
//         Frontend Developer
//       </motion.p>
//     </Section>
//   );
// };

// const projectSummary = projects.map((project, index) => {
//   return (
//     <div className="flex" key={index}>
//       <div>{project.name}</div>
//       <div>
//         <img className src={project.img} />
//       </div>
//       <div>
//         Summary
//         <span> {project.summary}</span>
//       </div>
//       <div>
//         Technologies
//         <span> {project.tech}</span>
//       </div>
//       <div> Date {project.date}</div>
//     </div>
//   );
// });
// const ProjectSection = () => {
//   return (
//     <Section>
//       <h1>Projects</h1>
//     </Section>
//   );
// };

// const AboutSection = () => {
//   return (
//     <Section>
//       <h1 className="text-lg">About Me</h1>
//     </Section>
//   );
// };

// const ContactSection = () => {
//   return (
//     <Section>
//       <span>CONTACT ME</span>
//       <span>ZAIREM21@GMAIL.COM</span>
//       <br />
//       <span>Zaire McAllister</span>
//       <span>North Carolina</span>
//       <br />
//       <span>Github</span>
//       <span>Instagram</span>
//       <span>Twitter</span>
//     </Section>
//   );
// };

// export const Interface = () => {
//   return (
//     <div className="flex flex-col items-center w-screen">
//       <Section>
//         <WelcomeSection />
//       </Section>

//       <Section>
//         <ProjectSection />
//       </Section>

//       <Section>
//         <AboutSection />
//       </Section>

//       <Section>
//         <ContactSection />
//       </Section>
//     </div>
//   );
// };
