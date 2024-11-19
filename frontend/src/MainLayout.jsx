import React from 'react';
import LeafletMapComponent from './LeafletMapComponent';
// import Categories from './Categories';
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { LuBrainCircuit } from "react-icons/lu";

const MainLayout = () => {
  return (
    <div className='h-screen bg-cover bg-center'
   >
    <div className="font-poppins w-full flex sm:items-center justify-center min-h-screen">
      <div 
        className="w-full sm:max-w-sm shadow-lg rounded-lg overflow-hidden p-6"
        style={{
            backgroundImage: `url('/bgcard2.avif')`,
            backgroundSize: 'cover',
        }}>
        {/* Header and Heading */}
        <div className="text-center">
          <nav className='mb-8'>
            <ul className="flex justify-center space-x-4 cursor-pointer">
              <li>
                <a href="#features" className="text-white hover:text-gray-800 transition">Features</a>
              </li>
              <li>
                <a href="#courses" className="text-white hover:text-gray-800 transition">Courses</a>
              </li>
              <li>
                <a href="#offer" className="text-white hover:text-gray-800 transition">We Offer</a>
              </li>
            </ul>
          </nav>
          
        </div>

        {/* Profile Section */}
        <div className="text-center mt-4 rounded-xl  py-4">
            <h2 className="text-2xl text-white  font-bold mt-2">VICTORY GROUP OF INSTITUTIONS</h2>
            <p className="text-[13px] text-gray-200">Beyond Boundaries! Discover Your Potential At Victory</p>
        
          <img
            src="/aviva_logo.png"
            alt=""
            className="mx-auto rounded-full w-24 h-24 border-3 border-gray-300"
          />
          <h3 className="text-xl text-gray-100 font-semibold mt-2">Dr. S Gajalakshmi</h3>
          <p className="text-sm text-gray-100 ">Founder & Director</p>
          <p className='flex justify-center text-sm animate-color-change-phone'><img src="/callicon.png" alt="" className='h-6 mr-1 w-6' /><a href='tel:+919047366444' className='mr-1 mt-[1px]'>+91 9047366444 </a> <span className='mt-[1.5px]'>|</span> <a href='tel:+917604885943' className='ml-1 mt-[1px]'>+91 7604885943</a></p>
        </div>

        {/* Quote/Description */}
        <div className="text-center mt-4 px-4">
          <p className="text-white text-[12px]">
          Victory Group of Institutions is a leading educational institution that offers a wide range of courses to help students achieve their academic and career goals. Our comprehensive curriculum, experienced faculty, and personalized approach ensure that students receive the best education and support to excel in their chosen field.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-4">
          <a
            href="https://wa.me/9047366444"
            target='_blank'
            className="animate-color-change-cta flex items-center justify-center bg-gray-200 py-2 rounded-full hover:bg-gray-300 transition">
                <div className='w-1/3 flex'>
                <img src="/wap_icon.png" className="w-6 h-6 mr-2" />
                <span>Whatsapp</span>
                </div>
          </a>

          <a
            href="http://vla.org.in/"
            target='_blank'
            className="animate-color-change-cta-rev flex items-center justify-center bg-gray-200 py-2 rounded-full hover:bg-gray-300 transition">
                <div className='w-1/3 flex'>
                <img src="/web_icon.png" className="w-6 h-6 mr-2" />
                <span>Website</span>
                </div>
          </a>

          <a
            href="mailto:victorygroupofinstitutions@gmail.com"
            className="animate-color-change-cta flex items-center justify-center bg-gray-200 py-2 rounded-full hover:bg-gray-300 transition">
            <div className='w-1/3 flex'>
                <img src="/mail_icon.webp" className="w-6 h-6 mr-2" />
                <span>Mail Us</span>
                </div>
          </a>
        </div>

        {/* Features */}
        <div id='features'>
        <h1 className='flex text-xl md:text-4xl mt-7 mb-7 text-white justify-center font-bold'>Features</h1>

            <div className=''>
                <div className="flex">
                    <div className='w-1/2'>
                        <div className='p-4 rounded-full mx-auto bg-[#0096FF] w-max text-white flex justify-center'><FaBookOpen className='text-3xl' /></div>
                        <h1 className='text-sm text-center font-semibold mt-2 flex justify-center mb-4'>Best Curriculum</h1>
                    </div>

                    <div className='w-1/2'>
                        <div className='p-4 rounded-full mx-auto bg-[#0096FF] w-max text-white'><IoPerson className='text-3xl'/></div>
                        <h1 className='text-sm text-center font-semibold mt-2 flex justify-center mb-4'>Online and Offline Classes</h1>
                    </div>
                </div>
                
                <div className="flex">
                    <div className='w-1/2'>
                        <div className='p-4 rounded-full mx-auto bg-[#0096FF] w-max text-white'><LuBrainCircuit className='text-3xl'/></div>
                        <h1 className='text-sm text-center font-semibold mt-2 flex justify-center mb-4'>Personalized Course Offerings</h1>
                    </div>

                    <div className='w-1/2'>
                        <div className='p-4 rounded-full mx-auto bg-[#0096FF] w-max text-white'><MdOutlineContactSupport className='text-3xl' /></div>
                        <h1 className='text-sm text-center font-semibold mt-2 flex justify-center mb-4'>1 to 1 Support</h1>
                    </div>
                </div>

                
            </div>
        </div>

        {/*We Offer */}
        <div id='offer'>
            <h1 className='flex text-xl md:text-4xl mt-7 mb-7 text-white justify-center font-bold'>We Offer</h1>
            
            <div className="w-[90%] mx-auto">
                <div className="flex gap-2">
                    <div className='cursor-pointer relative flex  items-center h-64 justify-center rounded bg-gradient-to-b from-cyan-400 to-cyan-600 px-3 sm:w-[49%] mb-3 overflow-hidden group'>
                        <h1 className='font-bold mt-2 text-2xl'>50+ Courses</h1>

                        <div className="text-[12px] absolute p-2 inset-0 flex items-center justify-center bg-gradient-to-b from-cyan-500 to-purple-400 text-white font-medium opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        We offer over 50 courses in a wide range of fields, including Computer Science, SAP, Tally, and Spoken Languages. Our diverse curriculum ensures comprehensive learning opportunities for students to excel in their chosen area of interest.
                        </div>
                    </div>

                    <div className='cursor-pointer relative flex items-center h-64 justify-center rounded bg-gradient-to-b from-cyan-500 to-purple-400 px-3 sm:w-[49%] mb-3 overflow-hidden group'>
                        
                        <h1 className='font-bold mt-2 text-2xl'>College Admissions</h1>

                        <div className="text-[12px] absolute p-2 inset-0 flex items-center justify-center bg-gradient-to-b from-cyan-400 to-cyan-600 text-white font-medium opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        We provide personalized college admission guidance to help students navigate the application process, choose the right institutions, and maximize their chances of success. Our expert support ensures students make informed decisions for their higher education.
                        </div>
                    </div>
                </div>
                
                <div className="flex gap-2">

                    <div className='cursor-pointer relative flex items-center h-64 justify-center rounded bg-gradient-to-b from-cyan-400 to-cyan-600 px-3 sm:w-[49%] mb-3 overflow-hidden group'>
                        
                        <h1 className='font-bold mt-2 text-2xl'>Open Schooling</h1>

                        <div className="text-[12px] absolute p-2 inset-0 flex items-center justify-center bg-gradient-to-b from-cyan-500 to-purple-400 text-white font-medium opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        Whether you prefer self-paced study or guidance, we've got you covered. We assist you in applying to NIOS Boards, ensuring a seamless journey from admissions to examinations. With our guidance and access to the board's portals, you can confidently navigate the entire process.
                        </div>
                    </div>

                    <div className='cursor-pointer relative flex items-center h-64 justify-center rounded bg-gradient-to-b from-cyan-500 to-purple-400 px-3 sm:w-[49%] mb-3 overflow-hidden group'>
                        
                        <h1 className='font-bold mt-2 text-2xl'>Job Bootcamps</h1>

                        <div className="text-[12px] absolute p-2 inset-0 flex items-center justify-center bg-gradient-to-b from-cyan-400 to-cyan-600 text-white font-medium opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        We offer comprehensive job training, including interview preparation, valuable tips, and expert guidance. Our programs are designed to equip students with the skills and confidence needed to succeed in the competitive job market.
                        </div>
                    </div>

                </div>
            </div>
        </div>

        
        {/* Address */}
        <div id='address'>
            <h1 className='text-lg font-semibold mt-5 text-gray-200'>Visit Us</h1>
            <LeafletMapComponent/>
            <p className='text-gray-200 mt-2 text-sm shadow p-2 bg-gray-800 rounded'>Address: 20/33,Ramakrishnapuram 3rd street, West Mambalam, Chennai, Tamil Nadu 600033</p>

        </div>

        <div className='flex text-[10px] justify-between text-white p-2'>
          <a className='flex' href='mailto:victorygroupofinstitutions@gmail.com'><img src="/mail_icon.webp" className="w-4 h-4 mr-1" />victorygroupofinstitutions@gmail.com</a>
          <a className='flex' href='https://vla.org.in/'> <img src="/web_icon.png" className="w-4 h-4 mr-1" />vla.org.in</a>
        </div>

        
      </div>
    </div>
    </div>
  );
};

export default MainLayout;