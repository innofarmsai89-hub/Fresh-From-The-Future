import { FunctionComponent } from 'react';
import { MdBugReport, MdCheckCircle, MdRestaurant } from 'react-icons/md';

const FarmInformation: FunctionComponent = () => {
  const farmDetails = [
    { label: 'Farm Name:', value: 'INNOFarms.AI- Singapore & UAE Model Farm' },
    { label: 'Location:', value: 'Udyog Vihar, Sector 23, Gurugram' },
    { label: 'Farm Type:', value: 'Indoor AI-powered vertical farm' },
    { label: 'Started In:', value: '2024' },
    { label: 'Farm Size:', value: '1,200 m² growing area (One GrowZone)' },
  ];

  const certifications = [
    {
      icon: '/images/display-page/check.png',
      title: 'HACCP Certified',
      description: 'Hazard Analysis and Critical Control Points certification ensures food safety'
    },
    {
      icon: '/images/display-page/fblike.png',
      title: 'GAP (Good Agricultural Practices)',
      description: 'Certified sustainable and responsible farming practices'
    },
    {
      icon: '/images/display-page/coackroach.png',
      title: 'Pesticide-Free Verified',
      description: '100% pesticide-free produce guaranteed'
    },
    {
      icon: '/images/display-page/sprout.png',
      title: 'Beyond Organic',
      description: 'Meets international organic farming standards'
    },
    {
      icon: '/images/display-page/vegan.png',
      title: 'Food Safety Certified',
      description: 'Compliant with global food safety regulations'
    },
  ];

  return (
    <div className="w-full">
      <div className="border border-[#3D550C] rounded-[14px] p-5 shadow-sm">
        {/* Farm Details Section */}
        <h2
          className="text-[20px] font-bold mb-4"
          style={{ color: '#3D550C', fontFamily: 'Poppins' }}
        >
          Farm Details
        </h2>

        <div className="flex flex-row justify-between items-start gap-4 mb-8">
          <div className="flex-1 flex flex-col gap-3">
            {farmDetails.map((detail, index) => (
              <div key={index} className="flex flex-col">
                <div
                  className="text-[11px] font-bold text-black flex-shrink-0"
                  style={{ fontFamily: 'Poppins' }}
                >
                  {detail.label}
                </div>
                <div
                  className="text-[11px] text-[#4F4F4F] leading-[1.3] mt-0.5"
                  style={{ fontFamily: 'Poppins' }}
                >
                  {detail.value}
                </div>
              </div>
            ))}
          </div>

          <div className="flex-shrink-0">
            <img
              src="/images/display-page/farmi.png"
              alt="Farm Photo"
              className="w-[110px] h-[130px] rounded-[14px] object-cover"
            />
          </div>
        </div>

        {/* Certification Section */}
        <div
          className="text-[18px] font-bold mb-4 uppercase"
          style={{ color: '#3D550C', fontFamily: 'Poppins' }}
        >
          CERTIFICATION
        </div>

        {/* Certification List */}
        <div className="flex flex-col gap-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border border-[#E0E0E0]/60 rounded-[12px] bg-white p-3 shadow-xs"
            >
              <div className="w-[35px] h-[35px] flex-shrink-0">
                <img src={cert.icon} alt={cert.title} className="w-full h-full object-contain" />
              </div>

              <div className="flex-1 min-w-0">
                <div
                  className="text-[11.5px] font-bold text-black leading-tight"
                  style={{ fontFamily: 'Poppins' }}
                >
                  {cert.title}
                </div>
                <div
                  className="text-[9.5px] text-[#666] mt-0.5 leading-snug"
                  style={{ fontFamily: 'Poppins' }}
                >
                  {cert.description}
                </div>
              </div>

              <div
                className="flex items-center gap-1 border border-[#3D550C] rounded-full px-2.5 py-1 flex-shrink-0"
                style={{ color: '#3D550C' }}
              >
                <MdCheckCircle className="text-[14px]" />
                <span className="text-[10px] font-bold" style={{ fontFamily: 'Poppins' }}>
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FarmInformation;