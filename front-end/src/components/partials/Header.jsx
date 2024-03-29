import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import PathConstants from "../../routes/PathConstants";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

export default function Header() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfilOpen, setIsProfilOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  const toggleProfilMenu = () => {
    setIsProfilOpen(!isProfilOpen);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav
      className={`transparent font-main w-full h-20 flex flex-col gap-5 md:gap-0 py-4 md:py-0 md:flex-row justify-start  md:items-center md:px-10 flex-no-wrap relative shadow-md shadow-white/5 md:flex-wrap md:justify-between`}
    >
      <div className="flex z-10">
        <button
          className="block border-0 bg-transparent px-2 text-white md:hidden"
          type="button"
          onClick={toggleMenu}
        >
          <Icon icon="material-symbols:menu" className="h-9 w-9" />
        </button>
        <NavLink
          className="flex items-center gap-3 font-black text-3xl"
          to={PathConstants.HOME}
        >
          <p>
            <span className="text-red">F</span>lamen
          </p>
          <img src={logo} alt="logo" className="w-8" />
          <p>Gnawa</p>
        </NavLink>
      </div>
      <ul
        className={`${
          isMenuOpen ? "top-20" : "-top-80"
        } text-lg py-5 md:py-0 transition-all duration-300 md:top-0 flex gap-5 items-center md:flex-row uppercase flex-col w-full md:w-auto bg-indigo-950 md:bg-transparent absolute left-0 md:relative z-10 `}
      >
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-white text-red py-2 px-4 rounded-md"
                : "py-2 px-4 rounded-md"
            }
            to={PathConstants.HOME}
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-white text-red py-2 px-4 rounded-md"
                : "py-2 px-4 rounded-md"
            }
            to={PathConstants.MEMBERS}
          >
            members
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-white text-red py-2 px-4 rounded-md"
                : "py-2 px-4 rounded-md"
            }
            to={PathConstants.SHOP}
          >
            shop
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-white text-red py-2 px-4 rounded-md"
                : "py-2 px-4 rounded-md"
            }
            to={PathConstants.BLOG}
          >
            blog
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-white text-red py-2 px-4 rounded-md"
                : "py-2 px-4 rounded-md"
            }
            to={PathConstants.EVENTS}
          >
            events
          </NavLink>
        </li>
        <li>
          {isAuthenticated ? (
            <div className="relative">
              <img
                onClick={toggleProfilMenu}
                src={user.picture || logo}
                alt=""
                className="w-14 h-14 object-cover rounded-full bg-red/50 p-2 cursor-pointer"
              />
              {isProfilOpen ? (
                <div className="text-black font-description w-56 bg-white absolute top-16 right-2 p-2 rounded">
                  <p className="text-center border-b-2 border-border">
                    {user.first_name + " " + user.last_name}
                  </p>
                  <p className="text-center py-2 hover:bg-red/70 hover:text-white duration-300 transition-all cursor-pointer flex items-center gap-2 px-2">
                    <Icon icon="iconamoon:profile-fill" />
                    profil
                  </p>
                  <p
                    className="text-center py-2 hover:bg-red/70 hover:text-white duration-300 transition-all cursor-pointer flex items-center gap-2 px-2"
                    onClick={handleLogout}
                  >
                    <Icon icon="streamline:logout-1-solid" />
                    logout
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <NavLink to={PathConstants.LOGIN}>
              <button className="rounded-full py-2 px-8 bg-red">LOGIN</button>
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}
