import React from 'react';
import { 
  CheckIconSvg, 
  HeartIconSvg, 
  StarIconSvg, 
  TrophyIconSvg,
  createSvgDataUrl 
} from './icons';

export const IconExamples = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-white mb-4">Icon Usage Examples</h2>
      
      {/* Method 1: Inline SVG with dangerouslySetInnerHTML */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Method 1: Inline SVG</h3>
        <div className="flex gap-4">
          <div className="text-center">
            <div 
              className="w-8 h-8 text-green-500 mx-auto mb-2"
              dangerouslySetInnerHTML={{ __html: CheckIconSvg }}
            />
            <span className="text-sm text-gray-300">Check Icon</span>
          </div>
          
          <div className="text-center">
            <div 
              className="w-8 h-8 text-red-500 mx-auto mb-2"
              dangerouslySetInnerHTML={{ __html: HeartIconSvg }}
            />
            <span className="text-sm text-gray-300">Heart Icon</span>
          </div>
          
          <div className="text-center">
            <div 
              className="w-8 h-8 text-yellow-500 mx-auto mb-2"
              dangerouslySetInnerHTML={{ __html: StarIconSvg }}
            />
            <span className="text-sm text-gray-300">Star Icon</span>
          </div>
        </div>
      </div>

      {/* Method 2: As Image Source */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Method 2: Image Source</h3>
        <div className="flex gap-4">
          <div className="text-center">
            <img 
              src={createSvgDataUrl(CheckIconSvg)} 
              alt="Check" 
              className="w-8 h-8 mx-auto mb-2"
            />
            <span className="text-sm text-gray-300">Check Icon</span>
          </div>
          
          <div className="text-center">
            <img 
              src={createSvgDataUrl(HeartIconSvg)} 
              alt="Heart" 
              className="w-8 h-8 mx-auto mb-2"
            />
            <span className="text-sm text-gray-300">Heart Icon</span>
          </div>
        </div>
      </div>

      {/* Method 3: Background Image */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Method 3: Background Image</h3>
        <div className="flex gap-4">
          <div className="text-center">
            <div 
              className="w-8 h-8 mx-auto mb-2"
              style={{ 
                backgroundImage: `url(${createSvgDataUrl(TrophyIconSvg)})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
            />
            <span className="text-sm text-gray-300">Trophy Icon</span>
          </div>
          
          <div className="text-center">
            <div 
              className="w-8 h-8 mx-auto mb-2"
              style={{ 
                backgroundImage: `url(${createSvgDataUrl(StarIconSvg)})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
            />
            <span className="text-sm text-gray-300">Star Icon</span>
          </div>
        </div>
      </div>

      {/* Method 4: Different Sizes and Colors */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Method 4: Different Sizes & Colors</h3>
        <div className="flex gap-4 items-end">
          <div className="text-center">
            <div 
              className="w-6 h-6 text-blue-500 mx-auto mb-2"
              dangerouslySetInnerHTML={{ __html: CheckIconSvg }}
            />
            <span className="text-sm text-gray-300">Small Blue</span>
          </div>
          
          <div className="text-center">
            <div 
              className="w-10 h-10 text-purple-500 mx-auto mb-2"
              dangerouslySetInnerHTML={{ __html: HeartIconSvg }}
            />
            <span className="text-sm text-gray-300">Medium Purple</span>
          </div>
          
          <div className="text-center">
            <div 
              className="w-12 h-12 text-orange-500 mx-auto mb-2"
              dangerouslySetInnerHTML={{ __html: StarIconSvg }}
            />
            <span className="text-sm text-gray-300">Large Orange</span>
          </div>
        </div>
      </div>
    </div>
  );
};
