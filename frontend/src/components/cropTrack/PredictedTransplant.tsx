import { FunctionComponent } from 'react';
import { MdAccessTime, MdCalendarToday } from 'react-icons/md';
import { CropData } from '@/data/cropsData';

interface Props {
  data: CropData['milestones']['transplant'];
  displayDate: string;
}

const PredictedTransplant: FunctionComponent<Props> = ({ data, displayDate }) => {
  return (
    <div className="w-full">
      <div className="border border-[#3D550C] rounded-[6px]">
        <div className="p-3">
          <div
            className="text-[12px] font-semibold mb-3"
            style={{ color: '#3D550C', fontFamily: 'Poppins' }}
          >
            Predicted Transplant
          </div>
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-7">
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-2">
                  <MdCalendarToday className="text-[14px] mt-[2px]" style={{ color: '#3D550C' }} />
                  <div>
                    <div className="text-[10px] font-semibold text-black mb-1" style={{ fontFamily: 'Poppins' }}>
                      Predicted Transplant Date:
                    </div>
                    <div className="text-[11px] text-[#1E1E1E]" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>
                      {displayDate}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MdAccessTime className="text-[14px] mt-[2px]" style={{ color: '#3D550C' }} />
                  <div>
                    <div className="text-[10px] font-semibold text-black mb-1" style={{ fontFamily: 'Poppins' }}>
                      Predicted Transplant Time:
                    </div>
                    <div className="text-[11px] text-[#1E1E1E]" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>
                      10:00 AM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={data.image}
                alt="Predicted Transplant"
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

export default PredictedTransplant;