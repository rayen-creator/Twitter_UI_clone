import logo from '../assets/logo.jpg';
import TweetWidget from './widgets/tweet_widget';

const Header = () => {
    return (<>

        <div>
            {/* header */}
            <div className="bg-white ">
                <h1 className="text-xl font-bold text-black p-3">Home</h1>
                <div className="grid grid-cols-2 border-b">
                    <div className="py-4 px-28 hover:bg-slate-600 hover:bg-opacity-5 ">
                        <h2 className="text-md font-bold">For you</h2>
                    </div>
                    <div className="py-4 px-28 hover:bg-slate-600 hover:bg-opacity-5 ">
                        <h2 className="text-md font-bold">Following</h2>
                    </div>
                </div>
            </div>
         

        </div>    </>);
}

export default Header;