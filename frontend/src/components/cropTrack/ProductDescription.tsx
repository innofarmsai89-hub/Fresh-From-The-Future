import { FunctionComponent } from 'react';
import {
  MdFitnessCenter,
  MdGrass,
  MdInventory2,
  MdLocalFireDepartment,
  MdLocalOffer,
  MdOpacity,
  MdRestaurant,
  MdTimer,
} from 'react-icons/md';
import { CropData } from '@/data/cropsData';

interface Props {
  data: CropData['productDescription'];
}

const ProductDescription: FunctionComponent<Props> = ({ data }) => {
  const getNutrientIcon = (name: string) => {
    if (name.includes('Calor')) return <MdLocalFireDepartment className="text-[12px]" />;
    if (name.includes('Protein')) return <MdFitnessCenter className="text-[12px]" />;
    return <MdGrass className="text-[12px]" />;
  };

  const productDetails = [
    { icon: <MdInventory2 className="text-[14px]" style={{ color: '#3D550C' }} />, label: 'Product Type', value: data.type },
    { icon: <MdLocalOffer className="text-[14px]" style={{ color: '#3D550C' }} />, label: 'Weight', value: data.weight },
    { icon: <MdRestaurant className="text-[14px]" style={{ color: '#3D550C' }} />, label: 'Shelf Life', value: data.shelfLife },
    { icon: <MdTimer className="text-[14px]" style={{ color: '#3D550C' }} />, label: 'Best Before', value: data.bestBefore },
  ];

  return (
    <div className="w-[98%] py-4">
      <div className="border border-[#3D550C] rounded-[6px]">
        <div className="p-3">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-start justify-between">
              <div
                className="text-[16px] font-semibold mb-1"
                style={{ color: '#3D550C', fontFamily: 'Poppins' }}
              >
                {data.type.split(' - ')[1] || data.type}
              </div>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-1 mt-3">
              {data.features.map((feature, index) => (
                <span
                  key={index}
                  className="inline-flex items-center h-[18px] rounded-full"
                  style={{
                    backgroundColor: 'rgba(61, 85, 12, 0.1)',
                    color: '#3D550C',
                    fontFamily: 'Poppins',
                    fontSize: '9px',
                    fontWeight: 600,
                    paddingLeft: '8px',
                    paddingRight: '8px',
                  }}
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <hr className="my-3 border-black/10" />

          {/* Details & Image Grid */}
          <div className="grid grid-cols-12 gap-3 mb-4">
            <div className="col-span-7">
              <div className="grid grid-cols-1 gap-3">
                {productDetails.map((detail, index) => (
                  <div key={index}>
                    <div className="flex items-start gap-2">
                      {detail.icon}
                      <div>
                        <div className="text-[10px] text-[#666]" style={{ fontFamily: 'Poppins' }}>
                          {detail.label}
                        </div>
                        <div
                          className="text-[11px] font-semibold text-[#1E1E1E]"
                          style={{ fontFamily: 'Poppins' }}
                        >
                          {detail.value}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="col-span-5">
              <div
                className="w-full h-full min-h-[120px] rounded-[8px] overflow-hidden border flex items-center justify-center"
                style={{ borderColor: '#e0e0e0', backgroundColor: '#f5f5f5' }}
              >
                {data.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={data.image} alt="Product" className="w-full h-full object-cover" />
                ) : null}
              </div>
            </div>
          </div>

          <hr className="my-3 border-black/10" />

          {/* Description */}
          <div className="mb-4">
            <div className="text-[12px] font-semibold mb-2" style={{ color: '#3D550C', fontFamily: 'Poppins' }}>
              About This Product
            </div>
            <div
              className="text-[11.5px] leading-[1.5] text-[#1E1E1E]"
              style={{ fontFamily: 'Poppins', fontWeight: 400 }}
            >
              {data.description}
            </div>
          </div>

          {/* Nutritional Info */}
          <div>
            <div className="text-[12px] font-semibold mb-3" style={{ color: '#3D550C', fontFamily: 'Poppins' }}>
              Nutritional Information
            </div>
            <div className="grid grid-cols-2 gap-2">
              {data.nutritionalInfo.map((item, index) => (
                <div key={index}>
                  <div
                    className="h-[28px] rounded-[6px] border flex items-center gap-2 px-2"
                    style={{ borderColor: '#3D550C', backgroundColor: '#d7dbce' }}
                  >
                    <div
                      className="w-[20px] h-[20px] rounded-full flex items-center justify-center shrink-0 text-white"
                      style={{ backgroundColor: '#3D550C' }}
                    >
                      {getNutrientIcon(item.nutrient)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-[8px] leading-none whitespace-nowrap overflow-hidden text-ellipsis"
                        style={{ color: '#3D550C', fontFamily: 'Poppins', fontWeight: 500 }}
                      >
                        {item.nutrient}: {item.value} per {item.per}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Storage Tips */}
          <div
            className="mt-4 p-3 rounded-[6px] border-l-[3px]"
            style={{ backgroundColor: 'rgba(249, 79, 11, 0.05)', borderLeftColor: '#FF5722' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <MdOpacity className="text-[18px]" style={{ color: '#3D550C' }} />
              <div className="text-[12px] font-semibold text-black" style={{ fontFamily: 'Poppins' }}>
                Storage Tips
              </div>
            </div>
            {data.storageTips.map((tip, i) => (
              <div
                key={i}
                className="text-[10px] leading-[1.5]"
                style={{ color: '#666', fontFamily: 'Poppins' }}
              >
                • {tip}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;