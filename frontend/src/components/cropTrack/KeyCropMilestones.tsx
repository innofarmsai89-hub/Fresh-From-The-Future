// src/components/cropTrack/KeyCropMilestones.tsx

import { FunctionComponent, useState } from 'react';
import SeedSowing from './SeedSowing';
import PredictedTransplant from './PredictedTransplant';
import HarvestDetails from './HarvestDetails';
import { CropData } from '@/data/cropsData';

interface Props {
  data: CropData['milestones'];
  envData: CropData['environment'];
  qrHarvestDate?: string | null;
  qrSeedingDate?: string | null;
  qrTransplantDate?: string | null;
}

const KeyCropMilestones: FunctionComponent<Props> = ({
  data,
  envData,
  qrHarvestDate,
  qrSeedingDate,
  qrTransplantDate
}) => {
  const [activeView, setActiveView] = useState<string>('sowing');

  // ✅ Converts YYYY-MM-DD to readable format
  const formatDisplayDate = (dateString: string | null | undefined): string => {
    if (!dateString) return 'Date not provided';

    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return dateString;
      }
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }).replace(',', ''); // Simplified: "10-Jan-26" or "Jan 10 2026"
    } catch (error) {
      return dateString || 'Invalid date';
    }
  };

  const finalHarvestDate = formatDisplayDate(qrHarvestDate || data.harvest.defaultDate);
  const finalSeedingDate = formatDisplayDate(qrSeedingDate || data.sowing.defaultDate);
  const finalTransplantDate = formatDisplayDate(qrTransplantDate || data.transplant.defaultDate);

  const milestones = [
    { title: 'Seed Sowing', view: 'sowing' },
    { title: 'Predicted Transplant', view: 'transplant' },
    { title: 'Harvest Details', view: 'harvest' },
  ];

  return (
    <div className="w-full py-4">
      <div className="border border-[#3D550C] rounded-[14px] p-5 shadow-sm">
        <div className="text-center mb-5 text-[14px] leading-[1.5] text-[#4F4F4F]" style={{ fontFamily: 'Poppins' }}>
          Click the buttons below to instantly get the information you need.
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {milestones.map((m) => {
            const isActive = activeView === m.view;
            return (
              <button
                key={m.view}
                type="button"
                onClick={() => setActiveView(m.view)}
                className={`flex items-center justify-center w-full min-h-[55px] border-2 rounded-[12px] px-2 text-[12px] font-bold leading-tight transition-all duration-300 ${isActive
                    ? 'bg-[#FF6600] border-[#FF6600] text-white shadow-md'
                    : 'bg-white border-[#3D550C] text-black hover:bg-[#F4F8EC]'
                  }`}
                style={{ fontFamily: 'Poppins' }}
              >
                {m.title}
              </button>
            );
          })}
        </div>

        <div className="mt-4">
          {activeView === 'sowing' && (
            <SeedSowing
              data={data.sowing}
              displayDate={finalSeedingDate}
            />
          )}

          {activeView === 'transplant' && (
            <PredictedTransplant
              data={data.transplant}
              displayDate={finalTransplantDate}
            />
          )}

          {activeView === 'harvest' && (
            <HarvestDetails
              harvestData={data.harvest}
              envData={envData}
              displayDate={finalHarvestDate}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default KeyCropMilestones;