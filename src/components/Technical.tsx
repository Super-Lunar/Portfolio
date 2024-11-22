import { BiLogoPostgresql, BiLogoPython } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";

const Technical = () => {
  return (
    <div className='pb-24'>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div>
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </div>
        <div className='p-4'>
          <FaNodeJs className='text-7xl text-green-500' />
        </div>
        <div className='p-4'>
          <BiLogoPython className='text-7xl ' />
        </div>
        <div className='p-4'>
          <SiMysql className='text-7xl text-[#00758F]' />
        </div>

        <div className='p-4'>
          <SiTailwindcss className='text-7xl text-[#38BDF8]' />
        </div>
        <div className='p-4'>
          <SiMongodb className='text-7xl text-cyan-500' />
        </div>
        <div className='p-4'>
          <BiLogoPostgresql className='text-7xl text-sky-700' />
        </div>
      </div>
    </div>
  );
};

export default Technical;
