'use client';

import { useState, useEffect } from 'react';
import { CROPS_DATA } from '@/data/cropsData';

const CROP_OPTIONS = [
  ...Array.from(new Set([
    ...[
      { value: 'romaine-lettuce', label: 'Romaine Lettuce' },
      { value: 'basil-italian', label: 'Basil Italian' },
      { value: 'lollo-bionda', label: 'Lollo Bionda' },
      { value: 'lollo-rosso', label: 'Lollo Rosso' },
      { value: 'baby-spinach', label: 'Baby Spinach' },
      { value: 'butterhead-lettuce', label: 'Butterhead Lettuce' },
      { value: 'frisee-lettuce', label: 'Frisée Lettuce' },
      { value: 'swiss-chard', label: 'Swiss Chard' },
      { value: 'baby-sorrel-vein', label: 'Baby Sorrel Vein' },
      { value: 'bok-choy', label: 'Bok Choy' },
      { value: 'curly-kale', label: 'Curly Kale' },
      // Mixes
      { value: 'salad-mix-microgreens', label: 'Salad Mix with Microgreens' },
      { value: 'salad-mix-cherry-tomatoes', label: 'Salad Mix with Cherry Tomatoes' },
      { value: 'lettuce-mix-premium', label: 'Lettuce Mix' },
      { value: 'microgreen-mix-premium', label: 'Microgreen Mix' },
    ]
  ]))
];

// Identify mix crops
const MIX_CROP_IDS = ['salad-mix-microgreens', 'salad-mix-cherry-tomatoes', 'lettuce-mix-premium', 'microgreen-mix-premium'];

// Simple hash function to create short ID
function generateShortId(data: any): string {
  const str = JSON.stringify(data);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  // Convert to base36 (alphanumeric) and take first 8 chars
  return Math.abs(hash).toString(36).substring(0, 8);
}

interface MixCropItem {
  name: string;
  sowing: string;
  transplant: string;
}

export default function LabelGenerator() {
  const [formData, setFormData] = useState({
    harvestDate: '',
    seedingDate: '',
    transplantDate: '',
    packagingDate: '',
    batchNumber: '',
    price: '',
    cropType: 'romaine-lettuce'
  });

  const [mixCrops, setMixCrops] = useState<MixCropItem[]>([]);
  const [generatedUrl, setGeneratedUrl] = useState<string>('');
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsDesktop(window.innerWidth > 768);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Update mixCrops when cropType changes
  useEffect(() => {
    if (MIX_CROP_IDS.includes(formData.cropType)) {
      const selectedCropData = CROPS_DATA[formData.cropType];
      if (selectedCropData?.milestones?.sowing?.items) {
        setMixCrops(selectedCropData.milestones.sowing.items.map(item => ({
          name: item.name,
          sowing: formData.seedingDate, // Default to main seeding date
          transplant: formData.transplantDate // Default to main transplant date
        })));
      }
    } else {
      setMixCrops([]);
    }
  }, [formData.cropType]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // If main dates change, update mixCrops that haven't been customized yet? 
    // Actually, it's better to let user customize individually.
  };

  const handleMixCropChange = (index: number, field: 'sowing' | 'transplant', value: string) => {
    setMixCrops(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleGenerate = () => {
    try {
      const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://innofarms.ai';

      // 2. Create data object
      const data = {
        c: formData.cropType,
        h: formData.harvestDate,
        s: formData.seedingDate,
        t: formData.transplantDate,
        pd: formData.packagingDate,
        bn: formData.batchNumber,
        pr: formData.price,
        mix: mixCrops.length > 0 ? mixCrops : undefined
      };

      const shortId = generateShortId(data);

      if (typeof window !== 'undefined') {
        localStorage.setItem(`qr_${shortId}`, JSON.stringify(data));
      }

      const params = new URLSearchParams();
      params.append('id', shortId);
      params.append('crop', formData.cropType);
      if (formData.harvestDate) params.append('harvest', formData.harvestDate);
      if (formData.seedingDate) params.append('seeded', formData.seedingDate);
      if (formData.transplantDate) params.append('transplant', formData.transplantDate);
      if (formData.packagingDate) params.append('pkgDate', formData.packagingDate);
      if (formData.batchNumber) params.append('batch', formData.batchNumber);
      if (formData.price) params.append('price', formData.price);

      // Add mix data to URL as compressed string if possible, or just rely on shortId/localStorage
      // For cross-device/no-localStorage, we can encode mix as: name:s:t|name:s:t
      if (mixCrops.length > 0) {
        const encodedMix = mixCrops.map(m => `${m.name}:${m.sowing}:${m.transplant}`).join('|');
        params.append('sm', encodedMix);
      }

      const targetUrl = `${baseUrl}/display-data?${params.toString()}`;
      setGeneratedUrl(targetUrl);

      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(targetUrl)}&format=png&margin=20`;
      setQrCodeUrl(qrUrl);
    } catch (err) {
      console.error('❌ Error generating QR code:', err);
      alert('Error generating QR code');
    }
  };

  const downloadQRCode = () => {
    if (!qrCodeUrl) return;
    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = `${formData.cropType}-${formData.harvestDate || 'label'}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #f0fdf4, #d1fae5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '24px',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        padding: '32px',
        maxWidth: '1000px',
        width: '100%'
      }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            backgroundColor: '#22c55e',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: '32px' }}>🌿</span>
          </div>
          <div>
            <h1 style={{
              fontSize: '30px',
              fontWeight: 'bold',
              color: '#1f2937',
              margin: 0
            }}>
              Crop Label Generator
            </h1>
            <p style={{
              color: '#6b7280',
              margin: '4px 0 0 0',
              fontSize: '16px'
            }}>
              Create QR codes for crop tracking and traceability
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
          gap: '32px'
        }}>

          {/* Left Side: Form */}
          <div>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '16px'
            }}>
              Crop Information
            </h2>

            {/* Crop Selection */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#000000',
                marginBottom: '8px'
              }}>
                Select Crop
              </label>
              <select
                name="cropType"
                value={formData.cropType}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  fontSize: '16px',
                  color: '#000000',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#22c55e'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              >
                {CROP_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Seeding Date */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#000000',
                marginBottom: '8px'
              }}>
                Seeding Date
              </label>
              <input
                type="date"
                name="seedingDate"
                value={formData.seedingDate}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  fontSize: '16px',
                  color: '#000000',
                  backgroundColor: '#ffffff',
                  colorScheme: 'light',
                  outline: 'none'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#22c55e'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
              />
            </div>

            {/* Transplant Date */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#000000',
                marginBottom: '8px'
              }}>
                Transplant Date
              </label>
              <input
                type="date"
                name="transplantDate"
                value={formData.transplantDate}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  fontSize: '16px',
                  color: '#000000',
                  backgroundColor: '#ffffff',
                  outline: 'none'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#22c55e'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
              />
            </div>

            {/* Harvest Date */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#000000',
                marginBottom: '8px'
              }}>
                Harvest Date
              </label>
              <input
                type="date"
                name="harvestDate"
                value={formData.harvestDate}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  fontSize: '16px',
                  color: '#000000',
                  backgroundColor: '#ffffff',
                  outline: 'none'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#22c55e'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
              />
            </div>

            {/* Packaging Date */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#000000',
                marginBottom: '8px'
              }}>
                Packaging Date
              </label>
              <input
                type="date"
                name="packagingDate"
                value={formData.packagingDate}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  fontSize: '16px',
                  color: '#000000',
                  backgroundColor: '#ffffff',
                  outline: 'none'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#22c55e'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
              />
            </div>

            {/* Batch Number */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#000000',
                marginBottom: '8px'
              }}>
                Batch Number
              </label>
              <input
                type="text"
                name="batchNumber"
                placeholder="e.g. FFTFSMMD090326"
                value={formData.batchNumber}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  fontSize: '16px',
                  color: '#000000',
                  backgroundColor: '#ffffff',
                  outline: 'none'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#22c55e'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
              />
            </div>

            {/* Price */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#000000',
                marginBottom: '8px'
              }}>
                Price
              </label>
              <input
                type="text"
                name="price"
                placeholder="e.g. Rs.195/-"
                value={formData.price}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  fontSize: '16px',
                  color: '#000000',
                  backgroundColor: '#ffffff',
                  outline: 'none'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#22c55e'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
              />
            </div>

            {/* Mix Component Dates */}
            {mixCrops.length > 0 && (
              <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#f9fafb', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1f2937', marginBottom: '12px' }}>
                  Individual Crop Dates (Mix)
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {mixCrops.map((crop, idx) => (
                    <div key={idx} style={{ paddingBottom: '12px', borderBottom: idx < mixCrops.length - 1 ? '1px solid #e5e7eb' : 'none' }}>
                      <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#3D550C', marginBottom: '8px' }}>
                        {crop.name}
                      </p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', color: '#6b7280', marginBottom: '4px' }}>Sowing</label>
                          <input
                            type="date"
                            value={crop.sowing}
                            onChange={(e) => handleMixCropChange(idx, 'sowing', e.target.value)}
                            style={{ width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '12px', color: '#000000', backgroundColor: '#ffffff', colorScheme: 'light' }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', color: '#6b7280', marginBottom: '4px' }}>Transplant</label>
                          <input
                            type="date"
                            value={crop.transplant}
                            onChange={(e) => handleMixCropChange(idx, 'transplant', e.target.value)} 
                            style={{ width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '12px', color: '#000000', backgroundColor: '#ffffff', colorScheme: 'light' }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}


            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              style={{
                width: '100%',
                backgroundColor: '#22c55e',
                color: 'white',
                padding: '16px',
                borderRadius: '12px',
                fontSize: '18px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                marginTop: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16a34a'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#22c55e'}
            >
              <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
              Generate QR Code
            </button>
          </div>

          {/* Right Side: Preview */}
          <div>
            {qrCodeUrl ? (
              <div>
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#000000',
                  marginBottom: '16px'
                }}>
                  {CROP_OPTIONS.find(c => c.value === formData.cropType)?.label} Label
                </h2>

                {/* QR Code Display */}
                <div style={{
                  backgroundColor: '#f9fafb',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '4px solid #bbf7d0',
                  marginBottom: '16px',
                  textAlign: 'center'
                }}>
                  <img
                    src={qrCodeUrl}
                    alt="Generated QR Code"
                    style={{
                      width: '100%',
                      maxWidth: '300px',
                      margin: '0 auto',
                      display: 'block'
                    }}
                  />
                </div>

                {/* Crop Details */}
                <div style={{
                  backgroundColor: '#dbeafe',
                  borderRadius: '12px',
                  padding: '16px',
                  marginBottom: '16px'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px',
                    fontSize: '14px'
                  }}>
                    <span style={{ color: '#000000' }}>Seeded:</span>
                    <strong style={{ color: '#000000' }}>{formData.seedingDate || '-'}</strong>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px',
                    fontSize: '14px'
                  }}>
                    <span style={{ color: '#000000' }}>Transplanted:</span>
                    <strong style={{ color: '#000000' }}>{formData.transplantDate || '-'}</strong>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingTop: '8px',
                    borderTop: '1px solid #93c5fd',
                    fontSize: '14px'
                  }}>
                    <span style={{ color: '#000000', fontWeight: '600' }}>Harvested:</span>
                    <strong style={{ color: '#000000' }}>{formData.harvestDate || '-'}</strong>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingTop: '8px',
                    fontSize: '14px'
                  }}>
                    <span style={{ color: '#000000', fontWeight: '600' }}>Packaged:</span>
                    <strong style={{ color: '#000000' }}>{formData.packagingDate || '-'}</strong>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingTop: '8px',
                    fontSize: '14px'
                  }}>
                    <span style={{ color: '#000000', fontWeight: '600' }}>Batch:</span>
                    <strong style={{ color: '#000000' }}>{formData.batchNumber || '-'}</strong>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingTop: '8px',
                    fontSize: '14px'
                  }}>
                    <span style={{ color: '#000000', fontWeight: '600' }}>Price:</span>
                    <strong style={{ color: '#000000' }}>{formData.price || '-'}</strong>
                  </div>
                </div>

                {/* Target URL */}
                <div style={{
                  backgroundColor: '#dbeafe',
                  borderRadius: '12px',
                  padding: '16px',
                  marginBottom: '16px'
                }}>
                  <p style={{
                    fontSize: '14px',
                    color: '#1e40af',
                    fontWeight: '500',
                    marginBottom: '4px'
                  }}>
                    Scans to:
                  </p>
                  <input
                    type="text"
                    value={generatedUrl}
                    readOnly
                    onClick={(e) => {
                      e.currentTarget.select();
                      navigator.clipboard.writeText(generatedUrl);
                    }}
                    style={{
                      width: '100%',
                      color: '#2563eb',
                      fontSize: '12px',
                      wordBreak: 'break-all',
                      backgroundColor: 'white',
                      border: '1px solid #93c5fd',
                      borderRadius: '8px',
                      padding: '8px',
                      cursor: 'pointer'
                    }}
                    title="Click to copy"
                  />
                </div>

                {/* Action Buttons */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                  marginBottom: '16px'
                }}>
                  <button
                    onClick={downloadQRCode}
                    style={{
                      backgroundColor: '#22c55e',
                      color: 'white',
                      padding: '12px',
                      borderRadius: '12px',
                      fontWeight: '600',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      fontSize: '14px'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16a34a'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#22c55e'}
                  >
                    <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </button>
                  <button
                    onClick={() => window.open(generatedUrl, '_blank')}
                    style={{
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      padding: '12px',
                      borderRadius: '12px',
                      fontWeight: '600',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      fontSize: '14px'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
                  >
                    <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Test
                  </button>
                </div>

                {/* Instructions */}
                <div style={{
                  padding: '16px',
                  backgroundColor: '#fef3c7',
                  borderRadius: '12px',
                  border: '1px solid #fde68a'
                }}>
                  <h3 style={{
                    fontWeight: '600',
                    color: '#92400e',
                    marginBottom: '8px',
                    fontSize: '14px'
                  }}>
                    How to use:
                  </h3>
                  <ul style={{
                    color: '#b45309',
                    fontSize: '14px',
                    margin: 0,
                    paddingLeft: '20px'
                  }}>
                    <li>Download the QR code image</li>
                    <li>Print it or attach to packaging</li>
                    <li>Customers scan to see crop journey</li>
                    <li>All dates are optional but recommended</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '400px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '192px',
                    height: '192px',
                    border: '4px dashed #d1d5db',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px'
                  }}>
                    <div>
                      <div style={{ fontSize: '64px', marginBottom: '8px' }}>📱</div>
                      <div style={{ color: '#6b7280', fontWeight: '500' }}>QR Code Preview</div>
                    </div>
                  </div>
                  <p style={{ color: '#6b7280' }}>Fill in the form and click Generate</p>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Footer */}
        <div style={{
          marginTop: '32px',
          paddingTop: '24px',
          borderTop: '1px solid #e5e7eb',
          textAlign: 'center',
          fontSize: '14px',
          color: '#6b7280'
        }}>
          <strong>💡 Tip:</strong> All dates are optional. Click the URL to copy it. Use Test button to verify the link works.
        </div>

      </div>
    </div>
  );
}