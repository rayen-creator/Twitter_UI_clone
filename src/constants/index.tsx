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
import IMDb from "../assets/IMDb.jpg";

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

    { key:1,categorie: "Technology · Trending", hashtag: "#Python", nbtweet: "5,131" },
    {key:2, categorie: "Sports · Trending", hashtag: "GOAT", nbtweet: "1.5k" },
    {key:3, categorie: "Gaming · Trending", hashtag: "#VALORANT", nbtweet: "77.4K " },
    {key:4, categorie: "Technology · Trending", hashtag: "#tailwind", nbtweet: "2,131" },
    { key:5,categorie: "Entertainment · Trending", hashtag: "#DC_comics", nbtweet: "4,131" },
    { key:6,categorie: "Sports · Trending", hashtag: "#liverpool", nbtweet: "57.22k" },
    { key:7,categorie: "Technology Trending", hashtag: "#Python", nbtweet: "5,131" },
    { key:8,categorie: "Technology Trending", hashtag: "#Python", nbtweet: "5,131" },
]

export const users = [
    {key:1, img: john, name: "john doe", id: "@john_doe" },
    {key:2, img: Evelyn, name: "Evelyn Ortiz", id: "@evelyn_ortiz" },
    { key:3,img: sarrah, name: "Sarah Connor", id: "@sarah_connor" },
]

export const footer_items = [
    {key:1, text: "Terms of Service" },
    {key:2, text: "Privacy Policy" },
    {key:3, text: "Cookie Policy" },
    {key:4, text: "Accessibility" },
    {key:5, text: "Ads info" },
    {key:6, text: "More" },
    {key:7, text: "© 2023 X Corp." },
]

export const postsList = [
    { key:1, img: logo, profile_name: "rayen oueslati", ID: "@rayenoueslati8",time:"10h",content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ut perspiciatis error, magnam vel amet nobis. Cupiditate non sunt inventore ea animi id ullam, deleniti quisquam ipsa vel voluptate molestias.", like: "30", comment: "52", repost: "8", stats: "25.2K" },
    { key:2, img: IMDb, profile_name: "IMDb", ID: "@IMDb",time:"5h", content: "What's the best movie you've seen so far this year?", like: "189", comment: "232", repost: "79", stats: "102.2K" },
    { key:3, img: IMDb, profile_name: "IMDb", ID: "@IMDb",time:"5h", content: "What's the best movie you've seen so far this year?", like: "189", comment: "232", repost: "79", stats: "102.2K" },
    { key:4, img: IMDb, profile_name: "IMDb", ID: "@IMDb",time:"5h", content: "What's the best movie you've seen so far this year?", like: "189", comment: "232", repost: "79", stats: "102.2K" },
    { key:5, img: IMDb, profile_name: "IMDb", ID: "@IMDb",time:"5h", content: "What's the best movie you've seen so far this year?", like: "189", comment: "232", repost: "79", stats: "102.2K" },
    { key:6, img: IMDb, profile_name: "IMDb", ID: "@IMDb",time:"5h", content: "What's the best movie you've seen so far this year?", like: "189", comment: "232", repost: "79", stats: "102.2K" },
    { key:7, img: IMDb, profile_name: "IMDb", ID: "@IMDb",time:"5h", content: "What's the best movie you've seen so far this year?", like: "189", comment: "232", repost: "79", stats: "102.2K" },
    { key:8, img: IMDb, profile_name: "IMDb", ID: "@IMDb",time:"5h", content: "What's the best movie you've seen so far this year?", like: "189", comment: "232", repost: "79", stats: "102.2K" },
]