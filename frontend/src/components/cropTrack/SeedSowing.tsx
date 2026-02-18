import { FunctionComponent } from 'react';
import { MdAccessTime, MdCalendarToday, MdLocalOffer, MdSpa } from 'react-icons/md';
import { CropData } from '@/data/cropsData';

interface Props {
  data: CropData['milestones']['sowing'];
  displayDate: string;
}

const SeedSowing: FunctionComponent<Props> = ({ data, displayDate }) => {
  const details = [
    { icon: <MdCalendarToday className="text-[14px] mt-[2px]" style={{ color: '#3D550C' }} />, label: 'Sowing Date:', value: displayDate },
    { icon: <MdSpa className="text-[14px] mt-[2px]" style={{ color: '#3D550C' }} />, label: 'Type of Seeds:', value: data.seedType },
    { icon: <MdAccessTime className="text-[14px] mt-[2px]" style={{ color: '#3D550C' }} />, label: 'Sowing Time:', value: '10:00 AM' },
    { icon: <MdLocalOffer className="text-[14px] mt-[2px]" style={{ color: '#3D550C' }} />, label: 'Batch ID:', value: 'BHL-0726-AF04' },
  ];

  return (
    <div className="w-full">
      <div className="border border-[#3D550C] rounded-[6px]">
        <div className="p-3">
          <div
            className="text-[12px] font-semibold mb-3"
            style={{ color: '#3D550C', fontFamily: 'Poppins' }}
          >
            Seed Sowing
          </div>
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-7">
              <div className="flex flex-col gap-3">
                {details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-2">
                    {detail.icon}
                    <div>
                      <div
                        className="text-[10px] font-semibold text-black mb-1"
                        style={{ fontFamily: 'Poppins' }}
                      >
                        {detail.label}
                      </div>
                      <div
                        className="text-[11px] text-[#1E1E1E]"
                        style={{ fontFamily: 'Poppins', fontWeight: 400 }}
                      >
                        {detail.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={data.image}
                alt="Seed Sowing"
                className="w-full h-full min-h-[120px] max-h-[150px] rounded-[8px] object-cover border"
                style={{ borderColor: '#e0e0e0' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeedSowing;