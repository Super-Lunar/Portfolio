//
import profilePic from "../assets/profilePic.jpg";

const Profile = () => {
  return (
    <div className='pb-4 lg:mb-36'>
      <div className='flex flex-wrap lg:flex-row-reverse'>
        <div className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:p-8'>
            <img src={profilePic} alt='myPhoto' className='border border-stone-900 rounded-3xl' />
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start mt-10'>
            <h2 className='pb-2 text-4xl tracking-tighter lg:text-8xl'>Saurabh Sharma Timilsina</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
