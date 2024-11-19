import React from 'react';
import LeafletMapComponent from './LeafletMapComponent';
// import Categories from './Categories';

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
                <a href="#" className="text-white hover:text-gray-800 transition">Features</a>
              </li>
              <li>
                <a href="#cats" className="text-white hover:text-gray-800 transition">Courses</a>
              </li>
              <li>
                <a href="#address" className="text-white hover:text-gray-800 transition">We Offer</a>
              </li>
            </ul>
          </nav>
          
        </div>

        {/* Profile Section */}
       
        <div className="text-center mt-4 border">
            <h2 className="text-2xl text-white font-bold mt-2">VICTORY GROUP OF INSTITUTIONS</h2>
            <p className="text-[13px] text-gray-200">Beyond Boundaries! Discover Your Potential At Victory</p>
        
          <img
            src="/aviva_logo.png"
            alt="Aviva Organics"
            className="mx-auto rounded-full w-24 h-24 border-3 border-gray-300"
          />
          <h3 className="text-xl text-gray-100 font-semibold mt-2">Dr. S Gajalakshmi</h3>
          <p className="text-sm text-gray-200">Founder & Director</p>
          <p className='flex justify-center text-sm animate-color-change-phone'><img src="/callicon.png" alt="" className='h-4 mr-1 w-4' /><a href='tel:+919047366444' className='mr-1'>+91 9047366444 </a> | <a href='tel:+917604885943' className='ml-1'>+91 7604885943</a></p>
        </div>

        {/* Quote/Description */}
        <div className="text-center mt-4 px-4">
          <p className="text-gray-200 text-[10px]">
          Aviva Organics is your one-stop destination for fresh, natural products that celebrate health and sustainability. Offering a curated selection of organic foods, skincare, and wellness essentials, Aviva Organics ensures quality and purity in every item. Discover a vibrant community dedicated to holistic living and embrace a healthier lifestyle today!
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
            href="http://avivaorganics.in/"
            target='_blank'
            className="animate-color-change-cta-rev flex items-center justify-center bg-gray-200 py-2 rounded-full hover:bg-gray-300 transition">
                <div className='w-1/3 flex'>
                <img src="/website_icon.png" className="w-6 h-6 mr-2" />
                <span>Website</span>
                </div>
          </a>

          <a
            href="mailto:avivaorganicstores@gmail.com"
            className="animate-color-change-cta flex items-center justify-center bg-gray-200 py-2 rounded-full hover:bg-gray-300 transition">
            <div className='w-1/3 flex'>
                <img src="/mail_icon.png" className="w-6 h-6 mr-2" />
                <span>Mail Us</span>
                </div>
          </a>
        </div>

        <div id='cats'>
        {/* <Categories/> */}
        </div>
        

        <div id='address'>
            <h1 className='text-lg font-semibold mt-5 text-gray-200'>Visit Us</h1>
            <LeafletMapComponent/>
            <p className='text-gray-200 mt-2 text-sm shadow p-2 bg-gray-800 rounded'>Address: 20/33,Ramakrishnapuram 3rd street, West Mambalam, Chennai, Tamil Nadu 600033</p>

        </div>

        <div className='flex text-[10px] justify-between text-white p-2'>
          <a className='flex' href='mailto:avivaorganicstores@gmail.com'><img src="/mail_icon.png" className="w-4 h-4 mr-1" />avivaorganicstores@gmail.com</a>
          <a className='flex' href='https://avivaorganics.in/'> <img src="/website_icon.png" className="w-4 h-4 mr-1" />avivaorganics.in</a>
        </div>

        
      </div>
    </div>
    </div>
  );
};

export default MainLayout;