'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Are your products manufactured in-house?',
    answer:
      'No, we collaborate with reputed manufacturing companies that are certified and approved under GMP/WHO-GMP standards.',
  },
  {
    question: 'Can I become a distributor for your products?',
    answer:
      'Yes! Please contact us via the form or call us directly to discuss distribution opportunities.',
  },
  {
    question: 'Do you offer private label or white-label products?',
    answer:
      'At this stage, we only promote our own brand. However, we are open to bulk partnerships.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="px-4 sm:px-6 lg:px-20 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#001428] mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
