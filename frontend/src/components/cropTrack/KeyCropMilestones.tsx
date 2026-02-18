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
  const [activeView, setActiveView] = useState<string | null>(null);

  // ✅ ADD THIS FUNCTION - Converts YYYY-MM-DD to readable format
  const formatDisplayDate = (dateString: string | null | undefined): string => {
    if (!dateString) return 'Date not provided';
    
    try {
      // Handle both YYYY-MM-DD and already formatted dates
      const date = new Date(dateString);
      
      // Check if date is valid
      if (isNaN(date.getTime())) {
        return dateString; // Return as-is if already formatted or invalid
      }
      
      // Convert to readable format: "December 16, 2024"
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      console.error('Error formatting date:', dateString, error);
      return dateString || 'Invalid date';
    }
  };

  // Convert dates to display format BEFORE using them
  const finalHarvestDate = formatDisplayDate(qrHarvestDate || data.harvest.defaultDate);
  const finalSeedingDate = formatDisplayDate(qrSeedingDate || data.sowing.defaultDate);
  const finalTransplantDate = formatDisplayDate(qrTransplantDate || data.transplant.defaultDate);

  // DEBUGGER: Uncomment to verify
  console.log("=== KEY CROP MILESTONES DEBUG ===");
  console.log("1. RAW Input Dates:");
  console.log("   - qrHarvestDate:", qrHarvestDate);
  console.log("   - qrSeedingDate:", qrSeedingDate);
  console.log("   - qrTransplantDate:", qrTransplantDate);
  
  console.log("2. FORMATTED Display Dates:");
  console.log("   - finalHarvestDate:", finalHarvestDate);
  console.log("   - finalSeedingDate:", finalSeedingDate);
  console.log("   - finalTransplantDate:", finalTransplantDate);
  console.log("=================================");

  const milestones = [
    { title: 'Seed Sowing', onClick: () => setActiveView('sowing') },
    { title: 'Transplant Date & Time', onClick: () => setActiveView('transplant') },
    { title: 'Harvest Details', onClick: () => setActiveView('harvest') },
  ];

  return (
    <div className="w-[98%] py-4">
      <div className="border border-[#3D550C] rounded-[6px]">
        <div className="p-3">
          {!activeView && (
            <>
              <div
                className="text-center mb-4 text-[11.5px] leading-[1.5] text-[#1E1E1E]"
                style={{ fontFamily: 'Poppins', fontWeight: 400 }}
              >
                Click the buttons below to instantly get the information you need.
              </div>
              <div className="grid grid-cols-3 gap-3">
                {milestones.map((m, i) => (
                  <div key={i}>
                    <button
                      type="button"
                      onClick={m.onClick}
                      className="w-full h-[50px] border-2 border-[#3D550C] rounded-[12px] px-3 text-[11px] font-semibold text-black bg-[#c4c9b5] transition-colors hover:bg-[#f5f5f5]"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      {m.title}
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeView && (
            <div>
              <button
                type="button"
                onClick={() => setActiveView(null)}
                className="mb-4 px-2 py-1 rounded text-[10px] font-medium text-[#3D550C] transition-colors hover:bg-[rgba(61,85,12,0.05)]"
                style={{ fontFamily: 'Poppins' }}
              >
                ← Back to Menu
              </button>
              
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
          )}
        </div>
      </div>
    </div>
  );
};

export default KeyCropMilestones;