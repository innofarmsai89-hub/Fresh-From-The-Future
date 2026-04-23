import { FunctionComponent } from 'react';
import { MdAccessTime, MdCalendarToday, MdLocalOffer, MdSpa } from 'react-icons/md';
import { CropData } from '@/data/cropsData';

interface Props {
  data: CropData['milestones']['sowing'];
  displayDate: string;
}

const SeedSowing: FunctionComponent<Props> = ({ data, displayDate }) => {
  const mainInfo = [
    {
      icon: <MdSpa className="text-[18px]" style={{ color: '#3D550C' }} />,
      label: 'Type of Seed:',
      value: data.seedType
    },
    {
      icon: <MdLocalOffer className="text-[18px]" style={{ color: '#3D550C' }} />,
      label: 'Batch ID:',
      value: 'BHL-0725-AF04'
    },
    {
      icon: <MdCalendarToday className="text-[18px]" style={{ color: '#3D550C' }} />,
      label: 'Seed Sowing Date:',
      value: displayDate
    },
    {
      icon: <MdAccessTime className="text-[18px]" style={{ color: '#3D550C' }} />,
      label: 'Sowing Time:',
      value: '10:00 AM'
    },
  ];

  return (
    <div className="w-full">
      <div className="border border-[#3D550C] rounded-[12px] p-5 mb-6">
        <h2
          className="text-[24px] font-bold mb-5"
          style={{ color: '#3D550C', fontFamily: 'Poppins' }}
        >
          Seed Sowing
        </h2>
        <div className="flex flex-row justify-between items-start gap-4">
          <div className="flex-1 grid grid-cols-2 gap-y-5 gap-x-2">
            {mainInfo.map((info, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="mt-1 flex-shrink-0 w-2 h-2 mr-1 ">{info.icon}</div>
                <div className="overflow-hidden">
                  <div
                    className="text-[9px] font-bold text-black whitespace-nowrap"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    {info.label}
                  </div>
                  <div
                    className="text-[9px] text-[#4F4F4F] truncate"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    {info.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-shrink-0">
            <img
              src='/images/display-page/SeedSowing.png'
              alt="Seed Sowing Facility"
              className="w-[120px] h-[95px] rounded-[14px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeedSowing;