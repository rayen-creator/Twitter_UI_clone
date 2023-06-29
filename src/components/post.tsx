import TweetWidget from "./widgets/tweet_widget";
import logo from '../assets/logo.jpg';
import MoreButton from "./widgets/moreButton";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosStats } from "react-icons/io";
import { LuShare, LuRepeat2 } from "react-icons/lu";
import { postsList } from "../constants";
const Posts = () => {
    return (<>
        {/* tweet widget */}
{
    postsList.map((post)=>(
        <div className="flex flex-row p-3 hover:bg-slate-600 hover:bg-opacity-5 ">
        <img src={post.img} alt="profile pic" className="rounded-full w-12 h-11" />
        <div className="flex flex-col w-full">
            <div className="flex items-start px-2">
                <div className="text-lg font-bold px-1">{post.profile_name}</div>
                <div className="text-md text-gray-500 px-1">{post.ID}</div>
                <div className="text-md text-gray-500 px-1">·</div>
                <div className="text-md text-gray-500 hover:underline">{post.time}</div>
                <div className="flex-1"></div>
                <MoreButton />
            </div>
            {/* content */}
            <div className="text-base px-3">
            {post.content}            
            </div>
            {/* like comment etc */}
            <div className="flex flex-row  items-start  text-gray-500  ">
                <div className="hover:text-primary  p-2 flex items-center ">
                    <div className="hover:bg-primary hover:bg-opacity-5 rounded-full p-2">
                        <FaRegComment className="text-md" />
                    </div>
                    <span className="px-1"> {post.comment}</span>
                </div>
                <div className="hover:text-green-500  p-2 flex items-center mx-2">
                    <div className="hover:bg-green-500 hover:bg-opacity-5 rounded-full p-2">
                        <LuRepeat2 className="text-md" />
                    </div>
                    <span className="px-1"> {post.repost}</span>
                </div>
                <div className="hover:text-red-500  p-2 flex items-center mx-2">
                    <div className="hover:bg-red-500 hover:bg-opacity-5 rounded-full p-2">
                        <AiOutlineHeart className="text-md" />
                    </div>
                    <span className="px-1"> {post.like}</span>
                </div>
                <div className="hover:text-primary  p-2 flex items-center mx-2">
                    <div className="hover:bg-primary hover:bg-opacity-5 rounded-full p-2">
                        <IoIosStats className="text-md" />
                    </div>
                    <span className="px-1"> {post.stats}</span>
                </div>
                <div className="hover:text-primary  p-2 flex items-center">
                    <div className="hover:bg-primary hover:bg-opacity-5 rounded-full p-2">
                        <LuShare className="text-md" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    ))
}
       
    </>);
}

export default Posts;