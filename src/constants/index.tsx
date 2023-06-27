import { BiHomeCircle } from 'react-icons/bi'
import { FiSearch, FiBookmark } from 'react-icons/fi';
import { MdMailOutline } from 'react-icons/md';
import { CgList, CgMoreO } from 'react-icons/cg';
import { LuVerified } from "react-icons/lu";
import { HiOutlineUser } from 'react-icons/hi';
import {GrNotification} from 'react-icons/gr';

export const menu = [
    { icon: <BiHomeCircle className="mr-2 text-xl " />, menuName: "Home" },
    { icon: <FiSearch className="mr-2 text-xl " />, menuName: "Explore" },
    { icon: <GrNotification className="mr-2 text-xl" />, menuName: "Notifications" },
    { icon: <MdMailOutline className="mr-2 text-xl" />, menuName: "Messages" },
    { icon: <CgList className="mr-2 text-xl" />, menuName: "Lists" },
    { icon: <FiBookmark className="mr-2 text-xl" />, menuName: "Bookmarks" },
    { icon: <LuVerified className="mr-2 text-xl" />, menuName: "Verified" },
    { icon: <HiOutlineUser className="mr-2 text-xl" />, menuName: "Profile" },
    { icon: <CgMoreO className="mr-2 text-xl" />, menuName: "More" },

]