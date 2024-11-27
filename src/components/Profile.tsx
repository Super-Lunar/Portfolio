import { motion } from "framer-motion";
import profilePic from "../assets/profilePic.jpg";

const containerVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const childVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const buttonVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 1.5,
    },
  },
};

const Profile = () => {
  return (
    <div className="pb-12 lg:mb-36 text-white font-sans overflow-hidden">
      <div className="flex flex-wrap lg:flex-row-reverse items-center w-full overflow-hidden">
        {/* Profile Picture */}
        <div className="w-full lg:w-1/2 flex justify-center mx-auto">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Profile Picture"
              width={650}
              height={650}
              className="border-4 border-stone-900 rounded-3xl shadow-xl max-w-full"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </div>

        {/* Profile Information */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariant}
            className="flex flex-col items-center lg:items-start mt-10 px-6"
          >
            <motion.h2
              variants={childVariant}
              className="pb-2 text-4xl lg:text-8xl tracking-tight text-white"
            >
              Saurabh Sharma Timilsina
            </motion.h2>
            <motion.span
              variants={childVariant}
              className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={childVariant}
              className="my-6 max-w-lg text-lg leading-relaxed tracking-tight text-gray-300"
            >
              I am a passionate full stack developer with a knack for crafting robust and scalable
              web applications. With a passion for web development, I have honed my skills in
              front-end technologies like React.js, as well as back-end technologies like Node.js,
              MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create
              innovative solutions that drive business growth and deliver exceptional user
              experiences.
            </motion.p>
            <motion.a
              variants={buttonVariant}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="mt-4 inline-block bg-white text-stone-800 rounded-full px-6 py-3 text-sm font-medium shadow-md hover:bg-stone-800 hover:text-white transition-transform duration-300 transform hover:scale-105"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
