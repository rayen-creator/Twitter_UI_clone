import { BiHomeCircle } from 'react-icons/bi'
import { FiSearch, FiBookmark } from 'react-icons/fi';
import { MdMailOutline } from 'react-icons/md';
import { CgList, CgMoreO } from 'react-icons/cg';
import { LuVerified } from "react-icons/lu";
import { HiOutlineUser } from 'react-icons/hi';
import { GrNotification } from 'react-icons/gr';
import logo from '../assets/logo.jpg';
import sarrah from '../assets/sarah.jpg';
import john from '../assets/john.jpg';
import Evelyn from '../assets/Evelyn.jpg';

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

export const trending = [

    { categorie: "Technology · Trending", hashtag: "#Python", nbtweet: "5,131" },
    { categorie: "Sports · Trending", hashtag: "GOAT", nbtweet: "1.5k" },
    { categorie: "Gaming · Trending", hashtag: "#VALORANT", nbtweet: "77.4K " },
    { categorie: "Technology · Trending", hashtag: "#tailwind", nbtweet: "2,131" },
    { categorie: "Entertainment · Trending", hashtag: "#DC_comics", nbtweet: "4,131" },
    { categorie: "Sports · Trending", hashtag: "#liverpool", nbtweet: "57.22k" },
    { categorie: "Technology Trending", hashtag: "#Python", nbtweet: "5,131" },
    { categorie: "Technology Trending", hashtag: "#Python", nbtweet: "5,131" },
]

export const users = [
    { img: john, name: "john doe", id: "@john_doe" },
    { img: Evelyn, name: "Evelyn Ortiz", id: "@evelyn_ortiz" },
    { img: sarrah, name: "Sarah Connor", id: "@sarah_connor" },

]

export const footer_items = [
    { text: "Terms of Service" },
    { text: "Privacy Policy" },
    { text: "Cookie Policy" },
    { text: "Accessibility" },
    { text: "Ads info" },
    { text: "More" },
    { text: "© 2023 X Corp." },
]