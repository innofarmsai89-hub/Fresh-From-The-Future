import { FunctionComponent } from 'react';
import {
  MdFitnessCenter,
  MdGrass,
  MdOpacity,
  MdRestaurant,
  MdStar,
  MdSettings,
  MdShoppingCart,
} from 'react-icons/md';
import { CropData } from '@/data/cropsData';

interface Props {
  data: CropData['productDescription'];
}

const ProductDescription: FunctionComponent<Props> = ({ data }) => {
  const getNutrientIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('calor')) return <MdRestaurant className="text-[14px]" />;
    if (lower.includes('protein')) return <MdFitnessCenter className="text-[14px]" />;
    if (lower.includes('fiber')) return <MdGrass className="text-[14px]" />;
    if (lower.includes('vitamin a')) return <span className="text-[11px] font-bold">A</span>;
    if (lower.includes('vitamin c')) return <MdOpacity className="text-[14px]" />;
    if (lower.includes('vitamin k')) return <MdGrass className="text-[14px]" />;
    if (lower.includes('calcium')) return <span className="text-[11px] font-bold">Ca</span>;
    if (lower.includes('iron')) return <MdGrass className="text-[14px]" />;
    if (lower.includes('potassium')) return <span className="text-[11px] font-bold">K</span>;
    if (lower.includes('folate')) return <MdRestaurant className="text-[14px]" />;
    return <MdGrass className="text-[14px]" />;
  };

  return (
    <div className="w-full flex flex-col items-center py-4 bg-white gap-4">
      <div className="w-[98%] border-[1.5px] border-[#3D550C] rounded-[8px] p-4 bg-white shadow-sm">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h1 className="text-[20px] font-bold leading-tight" style={{ color: '#3D550C', fontFamily: 'Poppins' }}>
              {data.type}
            </h1>
            <div className="flex items-center gap-1 mt-1 text-[#FFB400]">
              {[...Array(5)].map((_, i) => (
                <MdStar key={i} className="text-[14px]" />
              ))}
              <span className="text-[10px] text-[#666] font-medium ml-1">(4.8/5)</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[14px] font-bold text-[#FF5722]" style={{ fontFamily: 'Poppins' }}>
              MRP:{data.mrp || 'Rs.179/-'}
            </div>
            <div className="text-[9px] text-black font-medium" style={{ fontFamily: 'Poppins' }}>
              Net Weight: {data.weight || '150 g'}
            </div>
          </div>
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {data.features.map((feature, index) => (
            <span
              key={index}
              className="px-2 py-0.5 rounded-[4px] border border-black/10 text-[9px] font-semibold"
              style={{ backgroundColor: '#e2e7dc', color: '#333', fontFamily: 'Poppins' }}
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Product Info Section Grid */}
        <div className="flex gap-4 mb-6">
          <div className="w-[151px] rounded-[10px] overflow-hidden border border-black/5 bg-[#f9f9f9]">
            <img src={data.image} alt="Product" className="h-[180px] " />
          </div>
          <div className="w-[55%] flex flex-col justify-center gap-1.5">
            {[
              { label: 'Brand name', value: data.brandName || 'Fresh From The Future' },
              { label: 'Batch Number', value: data.batchNumber || 'FFTFSMMD090326' },
              { label: 'Price', value: data.mrp || 'Rs.179/-' },
              { label: 'Packaging Date', value: data.packagingDate || '09/03/2026' },
            ].map((item, i) => (
              <div key={i} className="text-[10px] leading-tight">
                <span className="font-bold text-[#3D550C]">{item.label}:</span>{' '}
                <span className="text-[#333] font-medium">{item.value}</span>
              </div>
            ))}
            <div className="text-[10px] leading-tight mt-1">
              <span className="font-bold text-[#3D550C]">Shelf Life:</span><br />
              <span className="text-[#333] font-medium">{data.shelfLife}</span>
            </div>
            <div className="text-[10px] leading-tight mt-1">
              <span className="font-bold text-[#3D550C]">Company Address:</span><br />
              <span className="text-[#333] font-medium text-[9px]">{data.companyAddress}</span>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mb-6">
          <h2 className="text-[16px] font-bold mb-2" style={{ color: '#111', fontFamily: 'Poppins' }}>
            Product Description
          </h2>
          <p className="text-[10.5px] leading-relaxed text-[#333]" style={{ fontFamily: 'Poppins' }}>
            {data.description}
          </p>
        </div>

        {/* Pack Composition */}
        {data.packComposition && data.packComposition.length > 0 ? (
          <div className="mb-6">
            <h2 className="text-[16px] font-bold mb-2" style={{ color: '#111', fontFamily: 'Poppins' }}>
              Pack Composition ({data.weight || '150g'})
            </h2>
            <div className="p-3 rounded-[8px] border-[1px] border-[#3D550C]" style={{ backgroundColor: '#dadfce' }}>
              <div className="text-[9px] text-[#555] italic mb-2">
                The quantities mentioned below are approximate <span className="text-[8px]">*actual grams may vary</span>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                {data.packComposition.map((comp, i) => (
                  <div key={i} className="text-[10px] font-medium text-[#333]">
                    • {comp.item} – {comp.weight}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {/* Nutritional Information */}
        <div className="mb-2">
          <h2 className="text-[16px] font-bold mb-4" style={{ color: '#111', fontFamily: 'Poppins' }}>
            Nutritional Information (Approx. per 100g)
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-6">
            {data.nutritionalInfo.map((item, index) => (
              <div
                key={index}
                className="h-[48px] rounded-[12px] flex items-center gap-3 px-3 border border-[#3D550C] shadow-[0_5px_8px_rgba(0,0,0,0.4)]"
                style={{ backgroundColor: '#dadfce' }}
              >
                <div
                  className="w-[28px] h-[28px] rounded-full flex items-center justify-center shrink-0 text-white shadow-sm"
                  style={{ backgroundColor: '#3D550C' }}
                >
                  {getNutrientIcon(item.nutrient)}
                </div>
                <div className="text-[11.5px] font-bold text-black" style={{ fontFamily: 'Poppins' }}>
                  {item.nutrient}: {item.value}
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-black mt-8 mb-2 font-bold" style={{ fontFamily: 'Poppins' }}>
            (Values are approximate and may vary slightly depending on growing conditions.)
          </p>
        </div>
      </div>

      {/* How to Use */}
      {data.howToUse && data.howToUse.length > 0 && (
        <div className="w-[98%] p-3 rounded-[8px] border-[1.5px] border-[#FF5722] shadow-sm" style={{ backgroundColor: '#ffe6dc' }}>
          <div className="flex items-center gap-2 mb-2">
            <MdSettings className="text-[20px]" style={{ color: '#3D550C' }} />
            <h2 className="text-[17px] font-bold text-black" style={{ fontFamily: 'Poppins' }}>How to Use</h2>
          </div>
          <ul className="text-[10px] leading-relaxed text-black space-y-1 ml-1" style={{ fontFamily: 'Poppins' }}>
            {data.howToUse.map((step, i) => (
              <li key={i} className="flex items-start gap-1">
                <span>•</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Storage Tips */}
      <div className="w-[98%] p-3 rounded-[8px] border-[1.5px] border-[#FF5722] shadow-sm" style={{ backgroundColor: '#ffe6dc' }}>
        <div className="flex items-center gap-2 mb-2">
          <MdShoppingCart className="text-[20px]" style={{ color: '#3D550C' }} />
          <h2 className="text-[17px] font-bold text-black" style={{ fontFamily: 'Poppins' }}>Storage Tips</h2>
        </div>
        <ul className="text-[10px] leading-relaxed text-black space-y-1 ml-1" style={{ fontFamily: 'Poppins' }}>
          {data.storageTips.map((tip, i) => (
            <li key={i} className="flex items-start gap-1">
              <span>•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDescription;