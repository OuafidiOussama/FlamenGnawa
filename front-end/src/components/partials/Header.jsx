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
  const { cartItems } = useSelector((state) => state.cart);
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
      className={`bg-transparent font-main w-full h-20 flex flex-col gap-5 lg:bg-dark-purple lg:gap-0 py-4 lg:py-0 lg:flex-row justify-start  lg:items-center lg:px-10 flex-no-wrap relative shadow-md shadow-white/5 lg:flex-wrap lg:justify-between`}
    >
      <div className="flex z-10">
        <button
          className="block border-0 bg-transparent px-2 text-white lg:hidden"
          type="button"
          onClick={toggleMenu}
        >
          <Icon icon="material-symbols:menu" className="h-9 w-9" />
        </button>
        <NavLink
          className="flex w-screen lg:w-auto items-center gap-3 font-black text-3xl justify-center lg:justify-start"
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
          isMenuOpen ? "top-20" : "-top-[27rem]"
        } text-lg py-5 lg:py-0 transition-all duration-300 lg:top-0 flex lg:gap-0 xl:gap-5 gap-5 items-center lg:flex-row bg-dark-purple uppercase flex-col w-full lg:w-auto lg:bg-transparent absolute left-0 lg:relative z-30 `}
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
        {/* <li>
          <NavLink to={PathConstants.CART}>
            <div className="relative ">
              <div className="absolute -top-3 left-3">
                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red/80 p-3 text-xs text-white">
                  {cartItems.length}
                </p>
              </div>
              <Icon icon="mdi:cart" className="mt-3 h-6 w-6" />
            </div>
          </NavLink>
        </li> */}
        <li>
          {isAuthenticated ? (
            <div className="relative">
              <img
                onClick={toggleProfilMenu}
                src={user.profil_picture || logo}
                alt=""
                className="w-14 h-14 object-cover rounded-full bg-red/50 p-2 cursor-pointer"
              />
              {isProfilOpen ? (
                <div className="text-black font-description w-56 bg-white absolute top-16 right-2 p-2 rounded">
                  <p className="text-center border-b-2 border-border">
                    {user.first_name + " " + user.last_name}
                  </p>
                  {user && (user.role === "super" || user.role === "member") ? (
                    <NavLink
                      className="text-center py-2 hover:bg-red/70 hover:text-white duration-300 transition-all cursor-pointer flex items-center gap-2 px-2"
                      to={PathConstants.DASHBOARD}
                    >
                      <Icon icon="material-symbols:dashboard" />
                      dashboard
                    </NavLink>
                  ) : (
                    ""
                  )}
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
