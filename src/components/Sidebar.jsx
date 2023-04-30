import { useState } from "react";
import { BsBarChartLineFill } from "react-icons/bs";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {
  MdFastfood,
  MdLocalOffer,
  MdFeedback,
  MdOutlineManageAccounts,
} from "react-icons/md";

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", icon: <BsBarChartLineFill /> },
    { title: "Products", icon: <MdFastfood /> },
    { title: "Offers", icon: <MdLocalOffer /> },
    { title: "Feedback", icon: <MdFeedback /> },
    { title: "User ", icon: <AiOutlineUser /> },
    { title: "Admin ", icon: <MdOutlineManageAccounts /> },
    { title: "Setting ", icon: <AiOutlineSetting /> },
  ];

  const [isCurrent, setIsCurrent] = useState("Dashboard");
  const NavigateUser = (item) => {
    setIsCurrent(item);
    if (item === "Products") {
      navigate("/product");
    } else if (item === "Dashboard") {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex shadow-lg">
      <div
        className={` ${
          open ? "w-60" : "w-10"
        } bg-white h-screen p-5  pt-8 relative duration-300`}
      >
        <div>
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/hamburger-menu-2997247-2516285.png"
            className={`absolute cursor-pointer -right-3 top-4 w-7
         rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-6299539-5187871.png"
              className={`cursor-pointer w-100 h-10 duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-indigo-600 origin-left text-xl duration-200 font-bold ${
                !open && "scale-0"
              }`}
            >
              DASHBOARD
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                onClick={() => NavigateUser(Menu?.title)}
                key={index}
                className={`flex font-semibold  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 
        mt-2 ${
          Menu?.title === isCurrent && open
            ? "bg-indigo-600 text-white"
            : "bg-white text-indigo-600"
        } `}
              >
                {Menu?.icon}
                {/* <img src={`./src/assets/${Menu.src}.png`} /> */}
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
