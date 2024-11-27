import { motion } from "framer-motion";
import ContactCard from "./cards/ContactCard";

const Contact = () => {
  return (
    <section className="border-t border-stone-900 pb-20" id="contactus">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>

      <div className="text-center tracking-tighter">
        <p className="my-4">Email : Sharmasaurabh4476@gmail.com</p>
      </div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ContactCard />
      </motion.div>
    </section>
  );
};

export default Contact;
