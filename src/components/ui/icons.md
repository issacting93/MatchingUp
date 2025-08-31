# SVG Icon System

This file exports SVG strings that can be used in various ways throughout the application.

## Available Icons

### Basic UI Icons
- `CloseIconSvg` - X/Close button
- `CheckIconSvg` - Checkmark/Success
- `UserIconSvg` - Profile/User placeholder
- `HeartIconSvg` - Love/Heart (filled)
- `PlusIconSvg` - Add/Upload
- `ArrowRightIconSvg` - Right navigation
- `ArrowLeftIconSvg` - Left navigation
- `BookmarkIconSvg` - Save/Bookmark
- `MenuIconSvg` - Hamburger menu

### Enhanced Icons
- `StarIconSvg` - Rating/Achievement
- `TrophyIconSvg` - Success/Achievement
- `LightbulbIconSvg` - Tips/Ideas

## Usage Methods

### 1. Inline SVG with dangerouslySetInnerHTML
```tsx
import { CheckIconSvg } from './ui/icons';

<div 
  className="w-6 h-6 text-green-500"
  dangerouslySetInnerHTML={{ __html: CheckIconSvg }}
/>
```

### 2. As Image Source (Data URL)
```tsx
import { createSvgDataUrl, HeartIconSvg } from './ui/icons';

<img 
  src={createSvgDataUrl(HeartIconSvg)} 
  alt="Heart" 
  className="w-6 h-6"
/>
```

### 3. As Background Image
```tsx
import { createSvgDataUrl, StarIconSvg } from './ui/icons';

<div 
  className="w-6 h-6"
  style={{ 
    backgroundImage: `url(${createSvgDataUrl(StarIconSvg)})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  }}
/>
```

### 4. Direct SVG String
```tsx
import { CheckIconSvg } from './ui/icons';

// Use in any context that accepts SVG strings
const svgContent = CheckIconSvg;
```

## Benefits

- **Flexible**: Can be used as inline SVG, image source, or background
- **Lightweight**: No React component overhead
- **Customizable**: Easy to style with CSS classes
- **Performance**: No component re-renders
- **Universal**: Works in any context that accepts SVG

## Styling

Icons inherit the `currentColor` for stroke/fill, so you can style them with Tailwind color classes:

```tsx
// The icon will use the text color from the parent
<div className="text-blue-500">
  <div 
    className="w-6 h-6"
    dangerouslySetInnerHTML={{ __html: CheckIconSvg }}
  />
</div>
```

## Adding New Icons

To add a new icon:

1. Add the SVG string export to this file
2. Follow the naming convention: `IconNameSvg`
3. Use `currentColor` for stroke/fill to enable CSS styling
4. Include proper viewBox and dimensions
