
import { NavLink } from "react-router-dom";
const Navabr = () => {
    return (
        <div className="">
            <ul className="font-semibold flex gap-5 ">
                <li>
                <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
  }
>
  Home
</NavLink>
                </li>
                <li>
                <NavLink
  to="/donations"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
  }
>
Donations
</NavLink>
                </li>
                <li>
                <NavLink
  to="/statistics"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
  }
>
Statistics
</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navabr;