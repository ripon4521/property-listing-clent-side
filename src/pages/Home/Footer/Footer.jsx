
import logo from './favicon.ico'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
       <div className='bg-[#F8F3FF]'>
         <div className='max-w-7xl mx-auto'>
         
         <div className='md:flex md:px-2 px-2 lg:pl-5 flex-row justify-between pt-20 items-center '>
         <div className='flex text-red-500 font-opanSans font-semibold  '>
  <img className='' src={logo} alt="" />
  <div className=''>
      <h2>Property</h2>
      <p>Finder</p>
  </div>
  </div>
  <div className=' my-5'>
      <h1 className='font-semibold font-opanSans mt-5 md:mt-0'>Property Finder</h1>
      <ul className='mt-5'>
          <li className='font-opanSans hover:underline cursor-pointer'>About us</li>
          <li className='font-opanSans hover:underline cursor-pointer mt-2'>Careers</li>
      </ul>
  </div>
  <div>
<h1 className='font-semibold font-opanSans mt-5 md:mt-0'>  Real estate professionals</h1>
<ul className='mt-5'>
  <li className='font-opanSans hover:underline cursor-pointer'>Agent Hub</li>
  <li className='font-opanSans hover:underline cursor-pointer mt-2'>PF Expert</li>
</ul>
  </div>
         </div>
         <div className='flex gap-4 ml-2 md:ml-8 md:mt-10 mt-5 flex-col md:flex-row md:justify-center lg:justify-start '>
          <img className='w-40 rounded-md h-10' src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg" alt="" />
          <img className='w-40 rounded-md h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN3IR789QVKneMt8qNTalw71CmNPuOfoIvtTCWXffTKgXTHzDIPSGuN9CCLBXCvuzpd1g&usqp=CAU" alt="" />
          <img className='w-40 rounded-md h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmDnD0La21SttzHWOpxlEk_yVZJUJGqVLEGk7kOeXu&s" alt="" />
         </div>
         <hr  className='mt-10'/>
         
         <div className='flex justify-between flex-col mb-10 lg:flex-row px-2 md:px-0 items-center'>
          <ul className='flex my-5 gap-5 font-opanSans'>
              <li className='hover:underline hover:cursor-pointer'>Terms & Conditions</li>
              <li className='hover:underline hover:cursor-pointer'>Privacy Policy</li>
              <li className='hover:underline hover:cursor-pointer'>Sitemap</li>
              <li className='hover:underline hover:cursor-pointer'>Cookies Policy</li>
          </ul>
          <div className='flex gap-5 items-center'>
              <span className='bg-purple-500 px-1 py-1 rounded-md text-white hover:cursor-pointer text-xl'><FaFacebookF/></span>
              <span className='bg-purple-500 px-1 py-1 rounded-md text-white hover:cursor-pointer text-xl'><FaInstagram/></span>
              <span className='bg-purple-500 px-1 py-1 rounded-md text-white hover:cursor-pointer text-xl'><FaTwitter/></span>
              <span className='bg-purple-500 px-1 py-1 rounded-md text-white hover:cursor-pointer text-xl'><FaLinkedin/></span>
          </div>
         </div>
         
      </div>
       </div>
    );
};

export default Footer;