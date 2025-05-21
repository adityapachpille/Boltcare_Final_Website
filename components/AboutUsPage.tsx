import Image from 'next/image'
import React from 'react'
import { Handshake, Heart, TestTubeDiagonal,Lightbulb, Eye, Target } from 'lucide-react';

const AboutUspage = () => {
  return (
    <>
    <section  className="pt-28 md:pt-10 px-4 md:px-18 bg-white">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
    
    {/* Text */}
    <div className="w-full md:w-1/2 space-y-4">
      <h3 className="text-4xl font-semibold text-gray-700">Our Story</h3>
      <p className="text-gray-600 text-base leading-relaxed">
        We are an emerging pharmaceutical brand founded on a simple principle—healthcare should be affordable, accessible, and trustworthy. Instead of manufacturing in-house, we collaborate with reputed, certified manufacturers who follow strict international quality norms. Each product we bring to market is branded under our name and backed by science, testing, and compliance.
      </p>
      <p className="text-gray-600 text-base leading-relaxed">
         At Boltcare Pharma, we’re not just creating pharmaceutical products—we’re building a brand that people can trust. With a commitment to ethical business practices, continuous product development, and responsive customer support, we aim to become a reliable name in the Indian pharma landscape and a symbol of dependable healthcare.
      </p>
    </div>

    {/* Image */}
    <div className="mt-20 w-full md:w-1/2 h-[420px] relative">
      <Image 
        src="/about.jpg"
        alt="About Us"
        fill
        className="rounded-xl object-cover"
      />
    </div>

  </div>
</section>





    <section className="py-10 px-4 md:px-10 bg-white">
    
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Vision */}
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300">
          <div className="flex items-center gap-4 mb-4">
            <Eye className="text-themeColor text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Our Vision</h3>
          </div>
          <p className="text-gray-600 text-md">
          To become a trusted, go-to digital partner for startups, small businesses, and enterprises by delivering measurable results, fostering innovation, and building long-term relationships.
          </p>
          <p className="text-gray-600 text-md">
          We envision a future where technology and creativity go hand-in-hand, helping businesses of all sizes succeed in a digital-first world.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300">
          <div className="flex items-center gap-4 mb-4">
            <Target className="text-themeColor text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Our Mission</h3>
          </div>
          <p className="text-gray-600 text-md">
          To empower brands with tailored digital marketing strategies and cutting-edge technology solutions that drive growth, boost engagement, and create meaningful impact.
          </p>
          <p className="text-gray-600 text-md">
          We aim to simplify the digital journey for our clients by providing end-to-end services—from brand building and lead generation to custom software development and automation.
          </p>
        </div>
      </div>
    </section>








  
<section className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    
    {/* Feature 1 */}
    <div className="flex flex-col items-center text-center transition-all duration-300 rounded-xl p-4 hover:shadow-lg" style={{ boxShadow: '0 4px 20px #eff8fe' }}>
      <div className="w-14 h-14 mb-4 flex items-center justify-center bg-[#94cace] rounded-full">
        <Lightbulb className="text-white" size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-2">Innovation</h3>
      <p className="text-gray-600">Bringing modern, effective formulations to market.</p>
    </div>

    {/* Feature 2 */}
    <div className="flex flex-col items-center text-center transition-all duration-300 rounded-xl p-4 hover:shadow-lg" style={{ boxShadow: '0 4px 20px #eff8fe' }}>
      <div className="w-14 h-14 mb-4 flex items-center justify-center bg-[#94cace] rounded-full">
        <Handshake className="text-white" size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-2">Integrity</h3>
      <p className="text-gray-600">Transparent partnerships and honest practices.</p>
    </div>

    {/* Feature 3 */}
    <div className="flex flex-col items-center text-center transition-all duration-300 rounded-xl p-4 hover:shadow-lg" style={{ boxShadow: '0 4px 20px #eff8fe' }}>
      <div className="w-14 h-14 mb-4 flex items-center justify-center bg-[#94cace] rounded-full">
        <Heart className="text-white" size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-2">Empathy</h3>
      <p className="text-gray-600">We care about patients and partners alike.</p>
    </div>

    {/* Feature 4 */}
    <div className="flex flex-col items-center text-center transition-all duration-300 rounded-xl p-4 hover:shadow-lg" style={{ boxShadow: '0 4px 20px #eff8fe' }}>
      <div className="w-14 h-14 mb-4 flex items-center justify-center bg-[#94cace] rounded-full">
        <TestTubeDiagonal className="text-white" size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-2">Quality</h3>
      <p className="text-gray-600">Non-negotiable standard in every product we sell.</p>
    </div>

  </div>
</section>










    </>
  )
}

export default AboutUspage
