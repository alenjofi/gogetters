import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react"; // ✅ Added dumbbell icon import

// --- Data Abstraction ---
const CORE_VALUES = ['Innovation', 'Collaboration', 'Creativity', 'Impact'];

// --- Team Members Data (Simplified: No Images, Unique Taglines) ---
const TEAM_MEMBERS = [
  { name: 'Alen Jofi (Captain)', quote: "Leading with vision and passion." },
  { name: 'Aleena (Vice Captain)', quote: "Turning ideas into impact." },
  { name: 'Subin', quote: "Building logic with purpose." },
  { name: 'Joyal', quote: "Strategizing success, one step at a time." },
  { name: 'Riya', quote: "Designing experiences that speak." },
  { name: 'Shreya', quote: "Crafting words that connect hearts." },
  { name: 'Liza', quote: "Animating ideas into motion." },
  { name: 'Aksa', quote: "Researching insights that drive innovation." }
];

const PROJECT_HIGHLIGHTS = [
  {
    title: "GymX Advertisement Campaign",
    description:
      "A high-impact digital and social media campaign designed to energize and empower the GymX brand. From visuals to voice, Go Getters made GymX a lifestyle statement.",
  }
];

const AppHeader = () => (
  <header className="absolute top-0 left-0 w-full z-10 p-6 flex justify-between items-center">
    <div className="flex items-center gap-2">
      <span className="text-xl font-bold text-white">Go Getters</span>
    </div>
    <nav className="space-x-6">
      <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
      <a href="#team" className="text-gray-300 hover:text-white transition">Team</a>
      <a href="#projects" className="text-gray-300 hover:text-white transition">Work</a>
      <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
    </nav>
  </header>
);

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <AppHeader />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center bg-gray-900 text-white">
        <motion.h1
          className="text-7xl font-extrabold tracking-tight text-blue-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          GO GETTERS
        </motion.h1>
        <p className="mt-4 text-xl text-gray-300 max-w-xl">
          Meet the team that gets it done. We are Go Getters—a creative crew driven by passion,
          collaboration, and results.
        </p>
        <Button
          asChild
          className="mt-8 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-lg"
        >
          <a href="#about">Explore Our Story</a>
        </Button>
      </section>

      {/* About Us */}
      <motion.section
        id="about"
        className="py-20 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg text-gray-600 mb-10">
            Go Getters is a team of driven professionals brought together by our manager to deliver
            memorable solutions, fresh ideas, and unbeatable energy. We believe in achieving more—together.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {CORE_VALUES.map((value) => (
              <div key={value} className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-gray-50">
                <h3 className="text-xl font-semibold mb-2">{value}</h3>
                <p className="text-sm text-gray-500">Our core value at Go Getters.</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Meet the Team */}
      <motion.section
        id="team"
        className="py-20 bg-gray-100"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <Card key={member.name} className="hover:scale-105 transition-transform cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-500 mt-2">"{member.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects & Highlights */}
      <motion.section
        id="projects"
        className="py-20 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">What We Do</h2>
          <p className="text-lg text-gray-600 mb-10">
            We create memorable brand experiences and campaigns that move people and businesses forward.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PROJECT_HIGHLIGHTS.map((project) => (
              <Card key={project.title} className="shadow-md hover:shadow-xl transition-transform overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  {/* ✅ Dumbbell Icon Added */}
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center shadow-sm mb-6">
                    <Dumbbell className="w-12 h-12 text-gray-400" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        id="testimonials"
        className="py-20 bg-gray-50"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">What People Say</h2>
          <div className="text-lg text-gray-600 italic">
            “Working with Go Getters was a game-changer. Their creative energy is unmatched.”
          </div>
          <p className="mt-4 text-gray-500">– Client Partner</p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 bg-blue-600 text-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let’s Connect</h2>
          <p className="text-lg mb-8">Reach out, collaborate, or join the Go Getters family!</p>
          <form className="max-w-md mx-auto text-left">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input type="text" id="name" placeholder="Your Name" className="w-full p-3 rounded-md text-gray-800" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input type="email" id="email" placeholder="Your Email" className="w-full p-3 rounded-md text-gray-800" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea id="message" placeholder="Your Message" className="w-full p-3 rounded-md text-gray-800" rows="4"></textarea>
            </div>
            <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">Send Message</Button>
          </form>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 text-gray-400 text-center">
        <p>© {new Date().getFullYear()} Driven By Determination, United by Success.</p>
      </footer>
    </div>
  );
}
