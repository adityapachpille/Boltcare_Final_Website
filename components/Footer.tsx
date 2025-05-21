import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer  className='bg-gray-200 text-gray-700 px-6 py-5 pt-10'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>

                {/* Logo & Social */}
                <div>
                    <div>
                              <Image src="/newboltcarelogo.png" alt="Logo" width={200} height={150} />
                            </div>
                            <p className='mb-4 text-base'>Committed to excellence in every formulation.
Boltcare Pharma – Where trust meets innovation.</p>
                    
                    <p className='mb-4 text-xl font-semibold'>Connect with us</p>
                    <div className='flex space-x-4'>
                        <Link href='#' target='_blank'>
                            <FaFacebookF className='text-blue-600 hover:text-blue-800' size={24} />
                        </Link>
                        <Link href='https://wa.me/917559337386' target='_blank'>
                            <FaWhatsapp className='text-green-600 hover:text-green-800' size={24} />
                        </Link>
                        <Link href='https://www.instagram.com/boltcare_pharma/' target='_blank'>
                            <FaInstagram className='text-pink-500 hover:text-pink-700' size={24} />
                        </Link>
                    </div>
                </div>

                {/* Important Links */}
                <div>
                    <h2 className='text-2xl font-semibold mb-4'>Important Links</h2>
                    <ul className='space-y-2 text-lg'>
                        <li><Link href='/' className='hover:text-black text-base'>Home</Link></li>
                        <li><Link href='/aboutus' className='hover:text-black text-base'>About Us</Link></li>
                        <li><Link href='/#product' className='hover:text-black text-base'>Products</Link></li>
                        <li><Link href='/careers' className='hover:text-black text-base'>Careers</Link></li>
                        <li><Link href='/contactus' className='hover:text-black text-base'>Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className='text-2xl font-semibold mb-4'>Contact Us</h2>
                    <ul className='space-y-3  text-base'>
                        <li className='flex items-center gap-3'>
                            <FiPhone size={20} /> <span>+91 7559337386</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <FiMail size={20} /> <span>boltcarepharma@gmail.com</span>
                        </li>


                        <li className="flex items-start gap-4">
  <div className="pt-1">
    <FiMapPin size={24} className="text-themeColor" />
  </div>
  <span className='text-justify'>
    SNO.32/5, Sai Aangan, Navecha Road, Gangotri Nagar, Pimple Gurav, Pimpri-Chinchwad, Maharashtra 411061
  </span>
</li>

                    </ul>
                </div>

            </div>

            {/* Bottom line */}
           
            <div className='text-center text-base text-gray-700 mt-10 border-t pt-4'>
  Copyright © {new Date().getFullYear()}. All rights reserved by Boltcare Pharma | 
  Design & Developed by  
  <a
    href="https://wa.me/918806112331"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span></span>   ARP Digital Solutions
  </a>.
</div>

        </footer>
    )
}

export default Footer
