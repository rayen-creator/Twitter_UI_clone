import Header from "./header";
import Posts from "./post";
import TweetWidget from "./widgets/tweet_widget";

const Home = () => {
    return ( <div className="flex flex-col h-screen">
        <Header />
        <div className="overflow-y-auto">
        <TweetWidget />
          <Posts />
        </div>
    </div> );
}
 
export default Home;