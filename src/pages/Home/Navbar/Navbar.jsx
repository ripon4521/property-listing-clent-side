import { FaFacebook, FaGoogle } from "react-icons/fa";
import logo from "./favicon.ico";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navlink = (
    <div className="flex justify-start items-start font-opanSans flex-col lg:flex-row">
        <li className="hover:text-red-500">
        <Link to="/buy">Buy</Link>
      </li>
      <Link to="/rent" className="hover:text-red-500">
        <a>Rent</a>
      </Link>
      <li className="hover:text-red-500">
        <a>Commercial</a>
      </li>
      <li className="hover:text-red-500">
        <a>New Projects</a>
      </li>
      <li className="hover:text-red-500">
        <a>Find Agents</a>
      </li>
      <li className="hover:text-red-500">
        <a>Explore</a>
      </li>

      <li className="hover:text-red-500">
        <details>
          <summary className="hover:text-red-500">Explore</summary>
          <ul className="w-40">
            <li className="hover:text-red-500">
              <a>Explore With Data Guru</a>
            </li>
            <li className="hover:text-red-500">
              <a>Property Blog</a>
            </li>
            <li className="hover:text-red-500">
              {" "}
              <a>Know we rights</a>
            </li>
          </ul>
        </details>
      </li>
      <li className="hover:text-red-500">
        <a>Mortgases</a>
      </li>
    </div>
  );

  const largeDeviceNavlink = (
    <>
      <li className="hover:text-red-500"><Link to="/buy">Buy</Link> </li>
      <li className="hover:text-red-500"><Link to="/rent">Rent</Link></li>
      <li className="hover:text-red-500"><Link>Commercial</Link></li>
      <li className="hover:text-red-500"><Link>New Projects</Link></li>
      <li className="hover:text-red-500"><Link to="/findAgent">Find Agents</Link></li>


      <li>
        <details>
          <summary className="hover:text-red-500">Explore</summary>
          <ul className="w-40">
            <li className="hover:text-red-500">
              <Link>Explore With Data Guru</Link>
            </li>
            <li className="hover:text-red-500">
              <Link>Property Blog</Link>
            </li>
            <li className="hover:text-red-500">
              <Link>Know we rights</Link>
            </li>
          </ul>
        </details>
      </li>
      <li className="hover:text-red-500">
        <a>Mortgases</a>
      </li>
    </>
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlink}
            </ul>
          </div>
          <div className="flex text-red-500 font-opanSans font-semibold  ">
            <img className="" src={logo} alt="" />
            <div className="">
              <h2>Property</h2>
              <p>Finder</p>
            </div>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">{largeDeviceNavlink}</ul>
        </div>
        <div className="navbar-end  gap-5 flex">
          <CiHeart className="text-3xl text-black hover:text-red-500 cursor-pointer" />
          <a
            className="font-opanSans px-2 py-1 border rounded-md border-red-500 text-red-500 cursor-pointer"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Login
          </a>
        </div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_3" className="modal  ">
          <div className="modal-box ">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="text-lg font-opanSans mb-2">
              Welcome to Property Finder
            </h3>
            <hr />

            <div className="flex justify-between items-center gap-5 h-[300px]">
              <div className="w-[50%] flex flex-col gap-5">
                <img
                  src="https://www.propertyfinder.ae/static/icons/account-benefits.svg"
                  alt=""
                />
                <p className="font-opanSans">
                  View saved properties Keep search history across devices See
                  which properties you have contacted
                </p>
              </div>

              <div className="w-[50%] flex flex-col gap-2">
                <button className="px-2 py-2 bg-[#4285F4] flex text-white font-opanSans items-center justify-center gap-2 rounded-md">
                  <FaGoogle /> Continue With Google
                </button>
                <button className="px-2 py-2 bg-[#4267B2] flex text-white font-opanSans items-center justify-center gap-2 rounded-md">
                  <FaFacebook /> Continue With Facebook
                </button>
                <p className="text-center font-opanSans text-xl mt-2">Or</p>
                <form>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Email"
                    className="px-6 py-2 justify-center flex border border-gray-600 rounded-md mt-2  "
                  />
                  <button className="px-2 py-2 bg-[#4285F4] flex text-white font-opanSans w-full mx-auto my-2 justify-center gap-2 rounded-md">
                    Continue
                  </button>
                  <p className="text-xs text-center font-opanSans ">
                    By registering you accept our{" "}
                    <span className="text-red-500">Terms & Conditions</span> and
                    our <span className="text-red-500">privacy policy.</span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Navbar;
