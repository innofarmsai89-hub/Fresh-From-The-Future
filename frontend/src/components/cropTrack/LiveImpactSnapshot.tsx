import { FunctionComponent } from 'react';
import { CropData } from '@/data/cropsData';

interface Props {
  data: CropData['liveImpact'];
}

const LiveImpactSnapshot: FunctionComponent<Props> = ({ data }) => {
  const impactMetrics = [
    { label: 'CARBON SAVED', value: data.carbon, unit: 'kg CO₂', color: '#4A7C59' },
    { label: 'WATER SAVED', value: data.water, unit: 'L', color: '#B8D96D' },
    { label: 'ENERGY SAVED', value: data.energy, unit: 'kWh', color: '#E6B85C' },
    { label: 'CROP HEALTH', value: data.health, unit: '%', color: '#e2692f' },
  ];

  return (
    <div className="w-[98%] py-3">
      <div className="border-2 border-[#3D550C] rounded-[12px]">
        <div className="p-4">
          <div className="mb-4">
            <div className="text-[16px] font-semibold mb-1" style={{ color: '#3D550C', fontFamily: 'Poppins' }}>
              Live Impact Snapshot
            </div>
            <div className="text-[9px]" style={{ color: '#1E1E1E', fontFamily: 'Poppins' }}>
              Real-time impact overview.
            </div>
          </div>

          <div className="flex gap-2">
            {/* Left Side - Circular Chart */}
            <div className="flex items-center justify-start">
              <div className="relative w-[90px] h-[90px] flex items-center justify-center">
                <svg width="90" height="90" style={{ transform: 'rotate(-90deg)' }}>
                  <circle cx="45" cy="45" r="38" fill="none" stroke="#E8E8E8" strokeWidth="9" />
                  <circle
                    cx="45"
                    cy="45"
                    r="38"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="9"
                    strokeDasharray={`${2 * Math.PI * 38 * (Number(data.score) / 100)} ${2 * Math.PI * 38}`}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6096f0" />
                      <stop offset="100%" stopColor="#6096f0" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <div className="text-[20px] font-bold leading-none text-black" style={{ fontFamily: 'Poppins' }}>
                    {data.score}
                  </div>
                  <div
                    className="text-[7px] font-semibold leading-none text-black mt-[2px]"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    Impact Score
                  </div>
                </div>
              </div>
            </div>

            {/* Middle - Metrics */}
            <div className="flex-1 py-1 pl-4 flex flex-col justify-center gap-7">
                {impactMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-[15px] h-[15px] rounded-[3px] shrink-0" style={{ backgroundColor: metric.color }} />
                    <div>
                      <div
                        className="text-[8px] font-semibold text-black leading-[1.3] mb-[2px]"
                        style={{ fontFamily: 'Poppins' }}
                      >
                        {metric.label}
                      </div>
                      <div
                        className="text-[9.5px] font-bold text-black leading-[1.2]"
                        style={{ fontFamily: 'Poppins' }}
                      >
                        {metric.value} {metric.unit}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Right Side - Image */}
            <div className="w-[120px] h-[120px] rounded-[10px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={data.image} alt="Impact" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveImpactSnapshot;