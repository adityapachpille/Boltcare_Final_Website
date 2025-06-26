'use client';
import Image from "next/image";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Careers = () => {
  const [position, setPosition] = useState('');
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = formRef.current;
    if (!form) return;

    const formData = {
      full_name: form['full_name'].value,
      email: form['email'].value,
      phone: form['phone'].value,
      position: position,
      resume_link: form['resume_link'].value, // optional
    };

    try {
      await emailjs.send(
        'service_cjtpr2u',       // your EmailJS service ID
        'template_1figfwp',      // your template ID
        formData,
        'oOUEDp-V37t4F9rKP'      // your EmailJS public key
      );

      alert('Application submitted successfully!');
      form.reset();
      setPosition('');
    } catch (error) {
      console.error(error);
      alert('Failed to submit application. Please try again.');
    }

    setLoading(false);
  };

  return (
    <>
      {/* Hero Image */}
      <div className="relative w-full">
        <div className="hidden sm:block mt-16">
          <Image
            src="/careersimg.png"
            alt="Careers Hero"
            width={1920}
            height={962}
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div className="sm:hidden relative h-[160px] mt-24">
          <Image
            src="/careersimg.png"
            alt="Careers Mobile"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 bg-black/40">
          <h1 className="text-3xl sm:text-5xl font-bold">Careers at Boltcare Pharma</h1>
          <p className="text-lg sm:text-xl mt-2 max-w-2xl">Join us in building a healthier tomorrow.</p>
        </div>
      </div>

      {/* Main Section */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left: Open Positions */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Open Positions</h2>
            <ul className="space-y-6 text-gray-700">
              <li>
                <strong>Medical Representative (MR)</strong><br />
                Engage with doctors, pharmacists, and healthcare professionals to promote our products and drive prescription sales.
              </li>
              <li>
                <strong>Area Sales Manager (ASM)</strong><br />
                Lead a team of Medical Representatives, develop sales strategies, and achieve regional targets.
              </li>
              <li>
                <strong>Digital Marketing Executive (Intern)</strong><br />
                Handle online branding, SEO, and lead generation to increase visibility.
              </li>
              <li>
                <strong>Business Development Executive (Intern)</strong><br />
                Identify and onboard distributors, expand into new territories.
              </li>

               <li className="mt-20">
                📧 Email us at: boltcarepharma@gmail.com <br />

📱 Message us on WhatsApp: 9763714046
              </li>
            </ul>
          </div>

          {/* Right: Apply Form */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Apply Now</h3>
            <form className="space-y-4" ref={formRef} onSubmit={sendEmail}>
              <div>
                <label className="block mb-1 font-medium text-sm">Full Name</label>
                <input type="text" name="full_name" className="w-full border rounded-md px-4 py-2" placeholder="Your name" required />
              </div>
              <div>
                <label className="block mb-1 font-medium text-sm">Email</label>
                <input type="email" name="email" className="w-full border rounded-md px-4 py-2" placeholder="Your email" required />
              </div>
              <div>
                <label className="block mb-1 font-medium text-sm">Phone</label>
                <input type="tel" name="phone" className="w-full border rounded-md px-4 py-2" placeholder="Your phone number" required />
              </div>
              <div>
                <label className="block mb-1 font-medium text-sm">Position Applying For</label>
                <select 
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className="w-full border rounded-md px-4 py-2"
                  required
                >
                  <option value="">Select Position</option>
                  <option>Medical Representative</option>
                  <option>Area Sales Manager</option>
                  <option>Digital Marketing Executive (Intern)</option>
                  <option>Business Development Executive (Intern)</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 font-medium text-sm">Resume Link (Google Drive, etc.)</label>
                <input
                  type="url"
                  name="resume_link"
                  className="w-full border rounded-md px-4 py-2"
                  placeholder="Paste your resume link"
                />
              </div>
              <button
                type="submit"
                className="bg-gray-200 text-black px-6 py-2 rounded-lg hover:bg-[#94cace] transition duration-300 w-full"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
