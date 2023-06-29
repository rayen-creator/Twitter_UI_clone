import { FiMoreHorizontal } from "react-icons/fi";
import { TfiSearch } from "react-icons/tfi";
import { footer_items, trending, users } from "../constants";
import MoreButton from "./widgets/moreButton";

const Rightbar = () => {


    return (<>

        <div className="flex flex-col w-1/3 h-screen  bg-white pl-6 pr-28 py-2 ">

            {/* search input */}
            <div className="bg-slate-100 rounded-full p-2 w-full flex flex-row justify-center items-center my-1">
                <div className="pl-2">
                    <TfiSearch className="text-lg  text-gray-600" />
                </div>
                <input type="search"
                    className="bg-transparent w-full pl-3 p-1 placeholder:text-gray-600 focus:ring-0 outline-none"
                    placeholder="Search Twitter" />
            </div>
            <div className="overflow-y-auto px-2">
                {/* get verified  */}
                <div className="bg-slate-100 flex flex-col text-black rounded-2xl p-3 my-3">
                    <h1 className="font-bold text-xl">Get Verified</h1>
                    <div className="font-bold text-md my-1">Subscribe to unlock new features.</div>
                    <button className="bg-black rounded-full text-white font-bold w-2/5 py-2 mt-1">
                        Get Verified
                    </button>
                </div>

                {/* trending */}
                <div className="bg-slate-100 flex flex-col text-black rounded-2xl  my-3">

                    <h1 className="font-bold text-xl pb-3 px-3 pt-1">Trends for you</h1>
                    {
                        trending.map((t) => (
                            <div className="flex flex-col p-3 hover:bg-slate-600 hover:bg-opacity-5 cursor-pointer">
                                <div className="text-sm text-slate-500 flex flex-row justify-between">
                                    <div>{t.categorie}</div>
                                    <MoreButton />
                                </div>
                                <h1 className="text-md text-black font-bold">{t.hashtag}</h1>
                                <h1 className="text-sm text-slate-500">{t.nbtweet} Tweets</h1>
                            </div>
                        ))
                    }
                    <div className="text-primary cursor-pointer p-3 hover:bg-slate-600 hover:bg-opacity-5 hover:rounded-b-2xl ">
                        Show more
                    </div>


                </div>

                <div className="bg-slate-100 rounded-2xl  text-black  my-5">
                    <h1 className="text-xl font-bold p-3">Who to follow</h1>
                    {
                        users.map((u) => (
                            <div className="flex flex-row justify-around items-center p-3 hover:bg-slate-600 hover:bg-opacity-5 ">
                               <img src={u.img} alt="profile pic" className="rounded-full w-12 h-11" />
                                <div className='flex flex-col flex-1 px-2 '>
                                    <div className='text-md font-bold hidden md:block'>{u.name}</div>
                                    <div className='text-sm font-medium text-gray-600 hidden md:block'>{u.id}</div>
                                </div>
                                <div className="bg-black text-white font-bold cursor-pointer rounded-full py-1 px-5">
                                    Follow
                                </div>
                            </div>
                        ))
                    }
                    <div className="text-primary cursor-pointer p-3 hover:bg-slate-600 hover:bg-opacity-5  hover:rounded-b-2xl ">
                        Show more
                    </div>
                </div>

                <div className="text-gray-600 text-sm p-2">
                    {
                        footer_items.map((f)=>(
                            <span className="p-2 hover:underline">
                           {f.text}
                        </span>
                        ))
                    }
                </div>
            </div>

        </div>
    </>); 
}

export default Rightbar;