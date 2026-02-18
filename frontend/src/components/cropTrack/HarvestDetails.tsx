import { FunctionComponent } from 'react';
import {
  MdAccessTime,
  MdBugReport,
  MdCalendarToday,
  MdLocalOffer,
  MdNature,
  MdPanTool,
  MdScale,
  MdStraighten,
  MdThermostat,
  MdTimer,
  MdWaterDrop,
  MdWbSunny,
} from 'react-icons/md';
import { CropData } from '@/data/cropsData';

interface Props {
  harvestData: CropData['milestones']['harvest'];
  envData: CropData['environment'];
  displayDate: string;
}

const HarvestDetails: FunctionComponent<Props> = ({ harvestData, envData, displayDate }) => {
  
  const renderItem = (icon: React.ReactNode, label: string, value: string) => (
    <div className="flex items-start gap-2 mb-3">
      <div className="mt-[2px]">{icon}</div>
      <div>
        <div className="text-[10px] font-semibold text-black mb-1" style={{ fontFamily: 'Poppins' }}>
          {label}
        </div>
        <div
          className="text-[11px] text-[#1E1E1E] leading-[1.5]"
          style={{ fontFamily: 'Poppins', fontWeight: 400 }}
        >
          {value || 'N/A'}
        </div>
      </div>
    </div>
  );

  // Check if headSize exists to determine layout
  const hasHeadSize = !!harvestData.headSize;

  // LAYOUT FOR CROPS WITHOUT headSize (Basil) - 2 Columns
  const twoColumnYieldLeft = [
    {
      icon: <MdScale className="text-[14px]" style={{ color: '#3D550C' }} />,
      label: 'Total Boxes for the batch:',
      value: harvestData.yieldBoxes
    }
  ];

  const twoColumnYieldRight = [
    {
      icon: <MdBugReport className="text-[14px]" style={{ color: '#3D550C' }} />,
      label: 'Pesticide Use:',
      value: harvestData.pesticide
    }
  ];

  // LAYOUT FOR CROPS WITH headSize (Lettuces) - 4 Columns
  const fourColumnYieldLeft = [
    {
      icon: <MdScale className="text-[14px]" style={{ color: '#3D550C' }} />,
      label: 'Total Yield This Batch:',
      value: harvestData.yieldBoxes
    },
    {
      icon: <MdStraighten className="text-[14px]" style={{ color: '#3D550C' }} />,
      label: 'Average Head Size:',
      value: harvestData.headSize || ''
    }
  ];

  const fourColumnYieldRight = [
    {
      icon: <MdBugReport className="text-[14px]" style={{ color: '#3D550C' }} />,
      label: 'Pesticide Use:',
      value: harvestData.pesticide
    },
    {
      icon: <MdAccessTime className="text-[14px]" style={{ color: '#3D550C' }} />,
      label: 'Packaging Time:',
      value: 'Within 2 hours of harvest to preserve freshness'
    }
  ];

  // Select layout based on headSize presence
  const yieldLeft = hasHeadSize ? fourColumnYieldLeft : twoColumnYieldLeft;
  const yieldRight = hasHeadSize ? fourColumnYieldRight : twoColumnYieldRight;

  return (
    <div className="w-full">
      <div className="border border-[#3D550C] rounded-[6px]">
        <div className="p-3">
          
          {/* --- SECTION 1: HARVEST INFO --- */}
          <div className="text-[12px] font-semibold mb-3" style={{ color: '#3D550C', fontFamily: 'Poppins' }}>
            Harvest Details
          </div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              {renderItem(<MdCalendarToday className="text-[14px]" style={{ color: '#3D550C' }} />, 'Harvest Date:', displayDate)}
              {renderItem(<MdTimer className="text-[14px]" style={{ color: '#3D550C' }} />, 'Growth Duration:', harvestData.duration)}
            </div>
            <div>
              {renderItem(<MdLocalOffer className="text-[14px]" style={{ color: '#3D550C' }} />, 'Harvest Batch ID:', harvestData.batchId)}
              {renderItem(<MdPanTool className="text-[14px]" style={{ color: '#3D550C' }} />, 'Harvest Method:', harvestData.method)}
            </div>
          </div>
          
          <hr className="my-3 border-black/10" />
          
          {/* --- SECTION 2: ENVIRONMENT --- */}
          <div className="text-[12px] font-semibold mb-3" style={{ color: '#3D550C', fontFamily: 'Poppins' }}>
            Farm Environment
          </div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              {renderItem(<MdThermostat className="text-[14px]" style={{ color: '#3D550C' }} />, 'Temperature:', envData.temp)}
              {renderItem(<MdWaterDrop className="text-[14px]" style={{ color: '#3D550C' }} />, 'Humidity:', envData.humidity)}
            </div>
            <div>
              {renderItem(<MdWbSunny className="text-[14px]" style={{ color: '#3D550C' }} />, 'Lighting:', envData.lighting)}
              {renderItem(<MdNature className="text-[14px]" style={{ color: '#3D550C' }} />, 'Nutrient Delivery:', envData.nutrients)}
            </div>
          </div>
          
          <hr className="my-3 border-black/10" />
          
          {/* --- SECTION 3: YIELD & QUALITY (Auto 2 or 4 columns) --- */}
          <div className="text-[12px] font-semibold mb-3" style={{ color: '#3D550C', fontFamily: 'Poppins' }}>
            Yield & Quality
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Left Column */}
            <div>
              {yieldLeft.map((detail, index) => (
                <div key={index} className="flex items-start gap-2 mb-3">
                  <div className="mt-[2px]">{detail.icon}</div>
                  <div>
                    <div className="text-[10px] font-semibold text-black mb-1" style={{ fontFamily: 'Poppins' }}>
                      {detail.label}
                    </div>
                    <div
                      className="text-[11px] text-[#1E1E1E] leading-[1.5]"
                      style={{ fontFamily: 'Poppins', fontWeight: 400 }}
                    >
                      {detail.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div>
              {yieldRight.map((detail, index) => (
                <div key={index} className="flex items-start gap-2 mb-3">
                  <div className="mt-[2px]">{detail.icon}</div>
                  <div>
                    <div className="text-[10px] font-semibold text-black mb-1" style={{ fontFamily: 'Poppins' }}>
                      {detail.label}
                    </div>
                    <div
                      className="text-[11px] text-[#1E1E1E] leading-[1.5]"
                      style={{ fontFamily: 'Poppins', fontWeight: 400 }}
                    >
                      {detail.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HarvestDetails;