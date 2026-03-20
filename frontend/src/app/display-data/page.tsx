'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { MdEmail, MdError, MdLanguage, MdPhone } from 'react-icons/md';

// IMPORT COMPONENTS
import ProductDescription from '@/components/cropTrack/ProductDescription';
import KeyCropMilestones from '@/components/cropTrack/KeyCropMilestones';
import LiveImpactSnapshot from '@/components/cropTrack/LiveImpactSnapshot';
import FarmInformation from '@/components/leafy-greens-overview/tabs/FarmInformation';

// IMPORT DATA
import { CROPS_DATA } from '@/data/cropsData';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`product-tabpanel-${index}`}
      aria-labelledby={`product-tab-${index}`}
      {...other}
    >
      {value === index && <div className="py-4">{children}</div>}
    </div>
  );
}

// CROP OPTIONS
const CROP_OPTIONS = [
  { value: 'romaine-lettuce', label: 'Romaine Lettuce' },
  { value: 'basil-italian', label: 'Basil Italian' },
  { value: 'lollo-bionda', label: 'Lollo Bionda' },
  { value: 'lollo-rosso', label: 'Lollo Rosso' },
];

// ERROR COMPONENT
function ErrorState({ message, cropName }: { message: string; cropName?: string }) {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-screen-sm">
        <div className="p-8 text-center rounded-md bg-white shadow-[0_6px_18px_rgba(0,0,0,0.12)]">
          <MdError className="mx-auto mb-4 text-[60px]" style={{ color: '#FF5722' }} />
          <h2 className="mb-4 text-xl font-semibold" style={{ color: '#3D550C' }}>
            Unable to Load Crop Information
          </h2>
          <p className="mb-6 text-sm" style={{ color: '#666' }}>
            {message}
          </p>
          {cropName && (
            <span className="block mb-4 text-xs" style={{ color: '#999' }}>
              Crop: {cropName}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// LOADING COMPONENT
function LoadingState() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-10 w-10 animate-spin rounded-full border-[4px] border-solid border-transparent"
          style={{
            borderTopColor: '#3D550C',
            borderRightColor: '#3D550C',
          }}
          aria-label="Loading"
        />
        <p style={{ color: '#3D550C', fontFamily: 'Poppins' }}>Loading crop information...</p>
      </div>
    </div>
  );
}

function DisplayDataContent() {
  const searchParams = useSearchParams();
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cropData, setCropData] = useState<any>(null);
  const [selectedCrop, setSelectedCrop] = useState<string>('romaine-lettuce');

  const [qrHarvest, setQrHarvest] = useState<string | null>(null);
  const [qrSeeding, setQrSeeding] = useState<string | null>(null);
  const [qrTransplant, setQrTransplant] = useState<string | null>(null);
  const [qrPkgDate, setQrPkgDate] = useState<string | null>(null);
  const [qrBatch, setQrBatch] = useState<string | null>(null);
  const [qrPrice, setQrPrice] = useState<string | null>(null);
  const [urlCrop, setUrlCrop] = useState<string | null>(null);
  const [mixCropsState, setMixCropsState] = useState<any[] | null>(null);

  // EFFECT: Decode URL parameters - prioritize localStorage (same device), fallback to URL params (cross-device)
  useEffect(() => {
    try {
      const shortId = searchParams?.get('id');

      // Strategy 1: Try localStorage first (works on same device - fast, clean)
      if (shortId && typeof window !== 'undefined') {
        const storedData = localStorage.getItem(`qr_${shortId}`);

        if (storedData) {
          const data = JSON.parse(storedData);

          // Set the decoded values (note: using short keys c, h, s, t)
          setUrlCrop(data.c || null);
          setQrHarvest(data.h || null);
          setQrSeeding(data.s || null);
          setQrTransplant(data.t || null);
          setQrPkgDate(data.pd || null);
          setQrBatch(data.bn || null);
          setQrPrice(data.pr || null);
          setMixCropsState(data.mix || null);

          console.log('🔓 Data from localStorage (same device):', shortId, data);
          return; // Success, exit early
        }
      }

      // Strategy 2: Fallback to URL parameters (works across devices - phone, different browser, etc.)
      const urlCropParam = searchParams?.get('crop');
      const urlHarvestParam = searchParams?.get('harvest');
      const urlSeedingParam = searchParams?.get('seeded');
      const urlTransplantParam = searchParams?.get('transplant');
      const urlPkgDateParam = searchParams?.get('pkgDate');
      const urlBatchParam = searchParams?.get('batch');
      const urlMixParam = searchParams?.get('sm');

      if (urlCropParam || urlHarvestParam || urlSeedingParam || urlTransplantParam || urlPkgDateParam || urlBatchParam || urlMixParam) {
        setUrlCrop(urlCropParam || null);
        setQrHarvest(urlHarvestParam || null);
        setQrSeeding(urlSeedingParam || null);
        setQrTransplant(urlTransplantParam || null);
        setQrPkgDate(urlPkgDateParam || null);
        setQrBatch(urlBatchParam || null);
        setQrPrice(searchParams?.get('price') || null);

        if (urlMixParam) {
          // Parse sm=name:s:t|name:s:t
          try {
            const parsedMix = urlMixParam.split('|').map(item => {
              const [name, sowing, transplant] = item.split(':');
              return { name, sowing, transplant };
            });
            setMixCropsState(parsedMix);
          } catch (e) {
            console.error('Error parsing sm param:', e);
          }
        }

        console.log('🔓 Data from URL parameters (cross-device):', {
          crop: urlCropParam,
          harvest: urlHarvestParam,
          seeded: urlSeedingParam,
          transplant: urlTransplantParam,
          mix: urlMixParam
        });
      } else if (shortId) {
        console.warn('⚠️ No data found in localStorage or URL params for ID:', shortId);
      }
    } catch (err) {
      console.error('Error decoding URL:', err);
      // Final fallback to direct params
      setUrlCrop(searchParams?.get('crop') || null);
      setQrHarvest(searchParams?.get('harvest') || null);
      setQrSeeding(searchParams?.get('seeded') || null);
      setQrTransplant(searchParams?.get('transplant') || null);
      setQrPkgDate(searchParams?.get('pkgDate') || null);
      setQrBatch(searchParams?.get('batch') || null);
      setQrPrice(searchParams?.get('price') || null);
    }
  }, [searchParams]);

  // EFFECT: Load crop data
  useEffect(() => {
    try {
      setIsLoading(true);
      setError(null);

      const cropToLoad = urlCrop || selectedCrop;

      if (!cropToLoad) {
        setError('No crop specified.');
        setIsLoading(false);
        return;
      }

      const slug = cropToLoad.toLowerCase().replace(/\s+/g, '-');
      const baseData = CROPS_DATA[slug] || CROPS_DATA[cropToLoad] || null;

      if (!baseData) {
        console.warn(`Crop data not found for: ${cropToLoad}, ${slug}`);
        setCropData(CROPS_DATA['default'] || null);
        if (!CROPS_DATA['default']) {
          setError(`Crop "${cropToLoad}" not found in database.`);
        }
      } else {
        // Create a deep copy to avoid mutating original CROPS_DATA
        const data = JSON.parse(JSON.stringify(baseData));

        // Apply single crop overrides
        if (qrSeeding && data.milestones?.sowing) {
          data.milestones.sowing.defaultDate = qrSeeding;
        }
        if (qrTransplant && data.milestones?.transplant) {
          data.milestones.transplant.defaultDate = qrTransplant;
        }
        if (qrHarvest && data.milestones?.harvest) {
          data.milestones.harvest.defaultDate = qrHarvest;
        }

        // Apply product description overrides
        if (qrPkgDate && data.productDescription) {
          // Format YYYY-MM-DD to DD/MM/YYYY if needed
          let formattedDate = qrPkgDate;
          if (qrPkgDate.includes('-')) {
            const [y, m, d] = qrPkgDate.split('-');
            if (y && m && d) formattedDate = `${d}/${m}/${y}`;
          }
          data.productDescription.packagingDate = formattedDate;
        }
        if (qrBatch && data.productDescription) {
          data.productDescription.batchNumber = qrBatch;
        }
        if (qrPrice && data.productDescription) {
          data.productDescription.mrp = qrPrice;
        }

        // Apply mix overrides
        if (mixCropsState && data.milestones) {
          if (data.milestones.sowing?.items) {
            data.milestones.sowing.items = data.milestones.sowing.items.map((item: any) => {
              const custom = mixCropsState.find((m: any) => m.name === item.name);
              return custom && custom.sowing ? { ...item, date: custom.sowing } : item;
            });
          }
          if (data.milestones.transplant?.items) {
            data.milestones.transplant.items = data.milestones.transplant.items.map((item: any) => {
              const custom = mixCropsState.find((m: any) => m.name === item.name);
              return custom && custom.transplant ? { ...item, date: custom.transplant } : item;
            });
          }
        }

        setCropData(data);
      }

      setIsLoading(false);
    } catch (err) {
      console.error('Error loading crop data:', err);
      setError(err instanceof Error ? err.message : 'Failed to load crop information');
      setIsLoading(false);
    }
  }, [selectedCrop, urlCrop, qrHarvest, qrSeeding, qrTransplant, qrPkgDate, qrBatch, qrPrice, mixCropsState]);

  const handleChange = (newValue: number) => setValue(newValue);

  const handleCropChange = (event: any) => {
    setSelectedCrop(event.target.value);
    setValue(0);
  };

  // TABS CONFIGURATION
  const tabs = [
    {
      label: 'Product Description',
      component: cropData ? (
        <ProductDescription data={cropData.productDescription} />
      ) : (
        <p className="text-sm text-gray-700" style={{ fontFamily: 'Poppins' }}>
          No product information available
        </p>
      ),
    },
    {
      label: 'Crop Journey And Harvest Info',
      component: cropData ? (
        <KeyCropMilestones
          data={cropData.milestones}
          envData={cropData.environment}
          qrHarvestDate={qrHarvest}
          qrSeedingDate={qrSeeding}
          qrTransplantDate={qrTransplant}
        />
      ) : (
        <p className="text-sm text-gray-700" style={{ fontFamily: 'Poppins' }}>
          No milestone information available
        </p>
      ),
    },
    {
      label: 'Live Impact Snapshot',
      component: cropData ? (
        <LiveImpactSnapshot data={cropData.liveImpact} />
      ) : (
        <p className="text-sm text-gray-700" style={{ fontFamily: 'Poppins' }}>
          No impact data available
        </p>
      ),
    },
    {
      label: 'Farm Details And Certification',
      component: <FarmInformation />,
    },
  ];

  if (isLoading) {
    return <LoadingState />;
  }

  if (error && !cropData) {
    return <ErrorState message={error} cropName={selectedCrop || 'Unknown'} />;
  }

  // MAIN RENDER
  return (
    <div className="w-screen min-h-screen m-0 p-0 bg-white overflow-x-hidden pb-1">
      {error && (
        <div className="mx-4 mt-4 rounded-md border border-yellow-300 bg-yellow-50 px-4 py-3 text-sm text-yellow-900">
          {error}
        </div>
      )}

      <div className="bg-white overflow-hidden">
        <div className="relative w-full h-[250px] overflow-hidden flex items-center justify-center shadow-md">
          <img
            src="/images/display-page/banner.jpg"
            alt="Farm Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" /> {/* Subtle dark overlay for better text contrast if needed */}

          <div
            className="relative z-10 px-8 py-6 rounded-[20px] backdrop-blur-xs shadow-xl flex items-center justify-center max-w-[90%]"
            style={{ backgroundColor: 'rgba(61, 85, 12, 0.85)' }}
          >
            <h1
              className="text-center font-bold text-[24px] text-white leading-tight"
              style={{ fontFamily: 'Poppins' }}
            >
              {cropData?.name || cropData?.productDescription?.type || 'Crop Information'}
            </h1>
          </div>
        </div>

        <div className="px-4 pt-4">
          <div className="flex gap-[6px] overflow-x-auto whitespace-nowrap pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {tabs.map((tab, index) => {
              const selected = index === value;
              return (
                <button
                  key={index}
                  id={`product-tab-${index}`}
                  type="button"
                  onClick={() => handleChange(index)}
                  className={[
                    'min-h-[30px] px-2 py-1 text-[12px] font-semibold rounded-[6px] border transition-all duration-300 ease-in-out',
                    selected
                      ? 'text-white'
                      : 'text-[#1E1E1E] hover:text-white',
                    selected
                      ? 'bg-[#3D550C] border-[#3D550C]'
                      : 'bg-transparent border-[#3D550C] hover:bg-[#3D550C] hover:border-[#3D550C]',
                  ].join(' ')}
                  style={{ fontFamily: 'Poppins' }}
                  aria-selected={selected}
                  role="tab"
                  aria-controls={`product-tabpanel-${index}`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {tabs.map((tab, index) => (
          <div key={index} className="px-4">
            <TabPanel value={value} index={index}>
              {tab.component}
            </TabPanel>
          </div>
        ))}

        <div className="px-4 py-8">
          <div className="rounded-[20px] p-6 shadow-lg relative overflow-hidden" style={{ backgroundColor: '#2d3a1a' }}>
            <div className="flex justify-between items-start mb-8">
              <h2
                className="text-[32px] font-bold text-white"
                style={{ fontFamily: 'Poppins' }}
              >
                Contact Us
              </h2>
              <div className="flex gap-3">
                {[
                  { icon: '/images/display-page/facebook.png', url: '#' },
                  { icon: '/images/display-page/lnkin.png', url: 'https://www.linkedin.com/company/fresh-from-the-future/' },
                  { icon: '/images/display-page/Instagram.png', url: 'https://www.instagram.com/p/DRCe3cGAbmU/' }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-[45px] h-[45px] rounded-full bg-[#4a5a3a] flex items-center justify-center border border-white/10 hover:bg-[#5a6a4a] transition-colors overflow-hidden p-2.5"
                  >
                    <img src={social.icon} alt="Social" className="w-full h-full object-contain filter brightness-200" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 mb-12">
              <a
                href="https://www.freshfromthefuture.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 no-underline group"
              >
                <div className="w-[32px] h-[32px] flex items-center justify-center shrink-0">
                  <MdLanguage className="text-[28px] text-[#FF6600]" />
                </div>
                <span className="text-[16px] font-medium text-[#e0e0e0] group-hover:text-white transition-colors" style={{ fontFamily: 'Poppins' }}>
                  www.freshfromthefuture.com
                </span>
              </a>

              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href="mailto:Businnes@FreshfromtheFuture.com"
                  className="flex items-center gap-4 no-underline group"
                >
                  <div className="w-[32px] h-[32px] flex items-center justify-center shrink-0">
                    <MdEmail className="text-[28px] text-[#FF6600]" />
                  </div>
                  <span className="text-[16px] font-medium text-[#e0e0e0] group-hover:text-white transition-colors" style={{ fontFamily: 'Poppins' }}>
                    Businnes@FreshfromtheFuture.com
                  </span>
                </a>

                <a
                  href="tel:+919220309252"
                  className="flex items-center gap-4 no-underline group"
                >
                  <div className="w-[32px] h-[32px] flex items-center justify-center shrink-0">
                    <MdPhone className="text-[28px] text-[#FF6600]" />
                  </div>
                  <span className="text-[16px] font-bold text-[#e0e0e0] group-hover:text-white transition-colors" style={{ fontFamily: 'Poppins' }}>
                    +91 92203 09252
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-4 flex justify-center opacity-30 select-none pointer-events-none">
              <h3
                className="text-[48px] font-black uppercase tracking-tight text-transparent leading-none"
                style={{
                  fontFamily: 'Poppins',
                  WebkitTextStroke: '2px rgba(255, 255, 255, 1)',
                }}
              >
                beyond organic
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DisplayDataPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <DisplayDataContent />
    </Suspense>
  );
}