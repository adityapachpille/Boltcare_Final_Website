import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-200 text-gray-700 px-6 py-5 pt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* Logo & Social */}
        <div>
          <Image
            src="/newboltcarelogo.png"
            alt="Boltcare Pharma Logo"
            width={200}
            height={150}
            priority
          />

          <p className="mb-4 text-base">
            Committed to excellence in every formulation.
            Boltcare Pharma – Where trust meets innovation.
          </p>

          <p className="mb-4 text-xl font-semibold">Connect with us</p>
          <div className="flex space-x-4">
            <Link href="#" target="_blank">
              <FaFacebookF className="text-blue-600 hover:text-blue-800" size={24} />
            </Link>

            <Link href="https://wa.me/919763714046" target="_blank">
              <FaWhatsapp className="text-green-600 hover:text-green-800" size={24} />
            </Link>

            <Link href="https://www.instagram.com/boltcare_pharma/" target="_blank">
              <FaInstagram className="text-pink-500 hover:text-pink-700" size={24} />
            </Link>
          </div>
        </div>

        {/* Important Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Important Links</h2>
          <ul className="space-y-2 text-base">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/aboutus">About Us</Link></li>
            <li><Link href="/#product">Products</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contactus">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-3 text-base">
            <li className="flex items-center gap-3">
              <FiPhone size={20} />
              <span>+91 7218703367, +91 9763714046</span>
            </li>

            <li className="flex items-center gap-3">
              <FiMail size={20} />
              <span>boltcarepharma@gmail.com</span>
            </li>

            <li className="flex items-start gap-4">
              <FiMapPin size={24} />
              <span>
                SNO.32/5, Sai Aangan, Navecha Road, Gangotri Nagar,
                Pimple Gurav, Pimpri-Chinchwad, Maharashtra 411061
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-base text-gray-700 mt-10 border-t pt-4">
        Copyright © {currentYear}. All rights reserved by Boltcare Pharma |{' '}
        Design &amp; Developed by{' '}
        <a
          href="https://wa.me/918806112331"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:text-black"
        >
          ARP Digital Solutions
        </a>
      </div>
    </footer>
  )
}

export default Footer
