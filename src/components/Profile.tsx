//
import profilePic from "../assets/profilePic.jpg";

const Profile = () => {
  return (
    <div className='pb-4 lg:mb-36'>
      <div className='flex flex-wrap lg:flex-row-reverse'>
        <div className='w-1/2 flex justify-center mx-auto'>
          <div className='flex justify-center lg:p-8'>
            <img src={profilePic} alt='myPhoto' className='border border-stone-900 rounded-3xl ' />
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start mt-10'>
            <h2 className='pb-2 text-4xl tracking-tighter lg:text-8xl'>Saurabh Sharma Timilsina</h2>
            <span className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>
              FULL STACK DEVELOPER
            </span>
            <p className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>
              I am a passionate full stack developer with a knack for crafting robust and scalable
              web applications. With passion in web-development, I have honed my skills in front-end
              technologies like React.js , as well as back-end technologies like Node.js, MySQL,
              PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative
              solutions that drive business growth and deliver exceptional user experiences.
            </p>
            <a
              href='/resume.pdf'
              target='_'
              rel='noopener noreferrer'
              download
              className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10 hover:bg-stone-800 hover:text-white transition ease-in-out delay-200 hover:scale-110'
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
