import { BsTwitter } from 'react-icons/bs';
import { menu } from '../constants';
import { FiMoreHorizontal } from "react-icons/fi";
import logo from '../assets/logo.jpg';
import { FaFeatherAlt } from "react-icons/fa";

const Siderbar = () => {
    return (
            <div className="flex flex-col w-1/4 h-full justify-start items-start px-10 bg-white overflow-y-auto ">
                <div className='hover:bg-slate-200 cursor-pointer rounded-full p-2 my-1'>
                    <BsTwitter className="text-3xl text-primary " />

                </div>
                {
                    menu.map((menu) => (<div className='flex flex-row items-center hover:bg-slate-200 cursor-pointer rounded-full px-4 py-2 my-1 '>
                        <div className=''>
                            {menu.icon}
                        </div>
                        <div className='hidden text-xl font-normal hover:font-bold md:block'>{menu.menuName}</div>
                    </div>
                    ))
                }
                <div className=' rounded-full bg-primary hover:bg-hover_color my-2 p-3 text-white font-bold text-lg text-center md:w-full '>
                    <span className='hidden md:block'>Tweet</span>
                    <FaFeatherAlt className="md:hidden text-xl" />
                </div>
                <div className="my-5"></div>


                <div className='w-full hover:bg-slate-200 cursor-pointer rounded-full p-3 my-1 flex flex-row justify-around items-center'>
                    <img src={logo} alt="profile pic" className="rounded-full w-12" />
                    <div className='flex flex-col flex-1 px-2 '>
                        <div className='text-md font-bold hidden md:block'>rayen oueslati</div>
                        <div className='text-sm font-medium text-gray-600 hidden md:block'>@rayenoueslati8</div>
                    </div>

                    <div className='mx-4 hidden md:block'>
                        <FiMoreHorizontal />
                    </div>


                </div>
            </div>
          


    );
}

export default Siderbar;