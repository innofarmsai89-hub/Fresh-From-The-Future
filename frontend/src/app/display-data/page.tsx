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
  const [urlCrop, setUrlCrop] = useState<string | null>(null);

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
          
          console.log('🔓 Data from localStorage (same device):', shortId, data);
          return; // Success, exit early
        }
      }
      
      // Strategy 2: Fallback to URL parameters (works across devices - phone, different browser, etc.)
      const urlCropParam = searchParams?.get('crop');
      const urlHarvestParam = searchParams?.get('harvest');
      const urlSeedingParam = searchParams?.get('seeded');
      const urlTransplantParam = searchParams?.get('transplant');
      
      if (urlCropParam || urlHarvestParam || urlSeedingParam || urlTransplantParam) {
        setUrlCrop(urlCropParam || null);
        setQrHarvest(urlHarvestParam || null);
        setQrSeeding(urlSeedingParam || null);
        setQrTransplant(urlTransplantParam || null);
        
        console.log('🔓 Data from URL parameters (cross-device):', {
          crop: urlCropParam,
          harvest: urlHarvestParam,
          seeded: urlSeedingParam,
          transplant: urlTransplantParam
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
      const data = CROPS_DATA[slug] || CROPS_DATA[cropToLoad] || null;

      if (!data) {
        console.warn(`Crop data not found for: ${cropToLoad}, ${slug}`);
        setCropData(CROPS_DATA['default'] || null);
        if (!CROPS_DATA['default']) {
          setError(`Crop "${cropToLoad}" not found in database.`);
        }
      } else {
        setCropData(data);
      }

      setIsLoading(false);
    } catch (err) {
      console.error('Error loading crop data:', err);
      setError(err instanceof Error ? err.message : 'Failed to load crop information');
      setIsLoading(false);
    }
  }, [selectedCrop, urlCrop]);

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
        <div className="p-4">
          <h1
            className="text-center font-semibold text-[18px] mb-3"
            style={{ color: '#3D550C', fontFamily: 'Poppins' }}
          >
            {cropData?.name || 'Crop Information'}
          </h1>

          <div
            className="relative w-full overflow-hidden flex items-center justify-center"
            style={{
              borderRadius: '6px',
              backgroundColor: '#f5f5f5',
              minHeight: '200px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.18)',
            }}
          >
            {cropData?.heroImage ? (
              <img
                src={cropData.heroImage}
                alt={cropData?.name || 'Crop'}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
                className="block w-full h-[200px] object-cover"
              />
            ) : (
              <p style={{ color: '#999', fontFamily: 'Poppins' }}>No image available</p>
            )}

            <img
              src="https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh2/logo.png"
              alt="Fresh from the Future"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
              className="absolute left-1/2 top-1/2 h-auto w-[60%] max-w-[400px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out hover:scale-105"
            />
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

        <div className="px-4 py-6">
          <h2
            className="text-[18px] font-bold mb-4"
            style={{ color: '#3D550C', fontFamily: 'Poppins' }}
          >
            Contact Us
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-[10px]" style={{ backgroundColor: '#c4c9b5' }}>
            <div className="flex flex-col gap-[12px] w-full sm:flex-1">
              <a
                href="tel:+919220309252"
                className="flex items-center gap-2 no-underline"
              >
                <MdPhone className="text-[14px]" style={{ color: '#FF5722' }} />
                <span className="text-[9px] font-medium text-black" style={{ fontFamily: 'Poppins' }}>
                  +91 9220309252 / +91 9220346184
                </span>
              </a>

              <a
                href="mailto:Business@FreshfromtheFuture.com"
                className="flex items-center gap-2 no-underline"
              >
                <MdEmail className="text-[14px]" style={{ color: '#FF5722' }} />
                <span className="text-[10px] font-medium text-black" style={{ fontFamily: 'Poppins' }}>
                Business@FreshfromtheFuture.com
                </span>
              </a>

              <a
                href="https://www.freshfromthefuture.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 no-underline"
              >
                <MdLanguage className="text-[14px]" style={{ color: '#FF5722' }} />
                <span className="text-[10px] font-medium text-black" style={{ fontFamily: 'Poppins' }}>
                www.freshfromthefuture.com
                </span>
              </a>
            </div>

            <div className="flex flex-row items-center gap-4 shrink-0">
              <a
                href="https://www.linkedin.com/company/fresh-from-the-future/"
                target="_blank"
                rel="noreferrer"
                className="text-center no-underline"
              >
                <div className="w-10 h-10 bg-white rounded-[6px] flex items-center justify-center mb-1 border-2 border-white">
                  <img src="https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh/Linkedin.png" alt="LinkedIn" className="w-full h-full object-contain" />
                </div>
                <div className="text-[10px] font-medium text-black" style={{ fontFamily: 'Poppins' }}>
                  LinkedIn
                </div>
              </a>

              <a
                href="https://www.instagram.com/p/DRCe3cGAbmU/"
                target="_blank"
                rel="noreferrer"
                className="text-center no-underline"
              >
                <div className="w-10 h-10 bg-white rounded-[6px] flex items-center justify-center mb-1 border-2 border-white">
                  <img src="https://d135lqli3q4imp.cloudfront.net/FreshFromTheFuture/fresh/Instagram.jpg" alt="Instagram" className="w-full h-full object-contain" />
                </div>
                <div className="text-[10px] font-medium text-black" style={{ fontFamily: 'Poppins' }}>
                  Instagram
                </div>
              </a>
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