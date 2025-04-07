import { useEffect, useState, useRef } from 'react';
import { Diamond, ArrowRight } from 'lucide-react';

const EnrollmentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  const benefits = [
    "NO TOP-UP*",
    "Get Tuition Fee Grants*",
    "DepEd Voucher & Tertiary Education Subsidy (TES) Accepted",
    "Scholarships Available"
  ];

  return (
    <div ref={bannerRef} className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content - Text */}
          <div className="w-full md:w-1/2 space-y-6">
            <div
              className={`transition-all duration-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-green-400 leading-tight">
                ENROLLMENT
                <br />
                ONGOING
              </h2>
            </div>
            <div
              className={`transition-all duration-700 ease-out delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <p className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">
                FOR SENIOR HIGH & COLLEGE | S.Y. 2025-26
              </p>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2 transition-all duration-700 ease-out transform delay-${(index + 1) * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                  <Diamond className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-800">{benefit}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500">*varies per SIIT campus</p>
            <div
              className={`transition-all duration-700 ease-out delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <a
                href="/admissions/apply"
                className="inline-flex items-center bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition-colors group"
              >
                Enroll Online
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          {/* Right Content - Image */}
          <div
            className={`w-full md:w-1/2 transition-all duration-700 ease-out delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-400 rounded-full -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-800 rounded-full -z-10" />
              <img src="/p8.jpg" alt="SIIT Students" className="w-full rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentBanner;