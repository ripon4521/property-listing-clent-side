import logo from '../../../../public/favicon.ico'
import { CiHeart } from "react-icons/ci";


const Navbar = () => {


    const navlink = <div className='flex justify-start items-start font-opanSans flex-col lg:flex-row'>
          
          <li className='hover:text-red-500'><a>Rent</a></li>
            <li className='hover:text-red-500'><a>Commercial</a></li>
            <li className='hover:text-red-500'><a>New Projects</a></li>
            <li className='hover:text-red-500'><a>Find Agents</a></li>
            <li className='hover:text-red-500'><a>Explore</a></li>
              
             <li className='hover:text-red-500'>
        <details>
          <summary className='hover:text-red-500'>Explore</summary>
          <ul className="w-40">
            <li className='hover:text-red-500'><a>Explore With Data Guru</a></li>
            <li className='hover:text-red-500'><a>Property Blog</a></li>
            <li className='hover:text-red-500'> <a>Know we rights</a></li>
          </ul>
        </details>
      </li>
      <li className='hover:text-red-500'><a>Mortgases</a></li>
             
    </div>

    const largeDeviceNavlink = <>
 <li className='hover:text-red-500'><a>Buy</a></li>
            <li className='hover:text-red-500'><a>Rent</a></li>
            <li className='hover:text-red-500'><a>Commercial</a></li>
            <li className='hover:text-red-500'><a>New Projects</a></li>
            <li className='hover:text-red-500'><a>Find Agents</a></li>
            <li className='hover:text-red-500'><a>Explore</a></li>
         
      <li >
        <details>
          <summary className='hover:text-red-500'>Explore</summary>
          <ul className="w-40">
            <li className='hover:text-red-500'><a>Explore With Data Guru</a></li>
            <li className='hover:text-red-500'><a>Property Blog</a></li>
            <li className='hover:text-red-500'><a>Know we rights</a></li>
          </ul>
        </details>
      </li>
      <li className='hover:text-red-500'><a>Mortgases</a></li>

    </>







    return (
        <div className='max-w-7xl mx-auto'>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navlink}
      </ul>
    </div>
    <div className='flex text-red-500 font-opanSans font-semibold  '>
    <img className='' src={logo} alt="" />
    <div className=''>
        <h2>Property</h2>
        <p>Finder</p>
    </div>
    </div>

  </div>

  <div className="navbar-center hidden lg:flex">

    <ul className="menu menu-horizontal">
{largeDeviceNavlink}
    </ul>
  </div>
  <div className="navbar-end  gap-5 flex">
    <CiHeart className='text-3xl text-black hover:text-red-500 cursor-pointer'/>
    <a className="font-opanSans px-2 py-1 border rounded-md border-red-500 text-red-500 cursor-pointer" >Login</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;