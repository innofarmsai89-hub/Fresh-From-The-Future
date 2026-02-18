import { FunctionComponent } from 'react';
import { MdBugReport, MdCheckCircle, MdRestaurant } from 'react-icons/md';

const FarmInformation: FunctionComponent = () => {
  const farmDetails = [
    { label: 'Farm Name:', value: 'INNOFarms.AI- Singapore & UAE Model Farm' },
    { label: 'Location:', value: 'Udyog Vihar, Sector 23, Gurugram' },
    { label: 'Farm Type:', value: 'Indoor AI-powered vertical farm' },
    { label: 'Started In:', value: '2024' },
    { label: 'Farm Size:', value: '62 m² growing area (One GrowZone)' },
  ];

  const certifications = [
    
   
    {
      icon: <MdBugReport className="text-[16px]" style={{ color: '#3D550C' }} />,
      title: 'Pesticide-Free Verified',
      description: '100% pesticide-free produce guaranteed'
    },
    
    {
      icon: <MdRestaurant className="text-[16px]" style={{ color: '#3D550C' }} />,
      title: 'Food Safety and Standards Authority of India (FSSAI) Certified',
      description: 'Compliant with global food safety regulations'
    },
  ];

  return (
    <div className="w-[98%] py-4">
      <div className="border border-[#3D550C] rounded-[6px]">
        <div className="p-3">
          {/* Farm Details Section */}
          <div
            className="text-[12px] font-semibold mb-3 text-black"
            style={{ fontFamily: 'Poppins' }}
          >
            Farm Details
          </div>

          <div className="grid grid-cols-12 gap-3 mb-4">
            {/* Farm Details - Left Side */}
            <div className="col-span-7">
              <div className="flex flex-col gap-3">
                {farmDetails.map((detail, index) => (
                  <div key={index}>
                    <div
                      className="text-[10px] font-semibold text-black mb-1"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      {detail.label}
                    </div>
                    <div
                      className="text-[11px] leading-[1.5] text-[#1E1E1E]"
                      style={{ fontFamily: 'Poppins', fontWeight: 400 }}
                    >
                      {detail.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Farm Photo - Right Side */}
            <div className="col-span-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="./fresh/Labs.png"
                alt="Farm Photo"
                className="w-full h-full max-h-[120px] rounded-[8px] object-cover border"
                style={{ borderColor: '#e0e0e0' }}
              />
            </div>
          </div>

          {/* Certification Section */}
          <div
            className="text-[12px] font-semibold mb-3 uppercase mt-4"
            style={{ color: '#3D550C', fontFamily: 'Poppins' }}
          >
            CERTIFICATION
          </div>

          {/* Certification List */}
          <div className="w-full p-0">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 border rounded-[8px] bg-white p-3"
                style={{
                  borderColor: '#e0e0e0',
                  marginBottom: index === certifications.length - 1 ? 0 : '8px',
                }}
              >
                <div className="min-w-[40px] flex justify-center">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(61, 85, 12, 0.1)' }}
                  >
                    {cert.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <div
                    className="text-[10px] font-semibold text-[#1E1E1E]"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    {cert.title}
                  </div>
                  <div
                    className="text-[10px] leading-[1.5] mt-1"
                    style={{ color: '#666', fontFamily: 'Poppins', fontWeight: 400 }}
                  >
                    {cert.description}
                  </div>
                </div>

                <div
                  className="ml-2 inline-flex items-center gap-1 h-[22px] rounded-full px-2"
                  style={{
                    backgroundColor: '#3D550C',
                    color: '#fff',
                    fontFamily: 'Poppins',
                    fontSize: '9px',
                    fontWeight: 600,
                    flexShrink: 0,
                  }}
                >
                  <MdCheckCircle className="text-[12px]" style={{ color: '#fff' }} />
                  Verified
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmInformation;