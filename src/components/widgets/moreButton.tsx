import { FiMoreHorizontal } from "react-icons/fi";

const MoreButton = () => {
    return (
        <div className="hover:bg-primary  hover:text-primary hover:bg-opacity-5 cursor-pointer rounded-full p-1 text-xl">
            <FiMoreHorizontal />
        </div>
    );
}

export default MoreButton;