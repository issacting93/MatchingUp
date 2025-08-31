# SVG Icons Folder

This folder contains all the SVG icon files for the application, organized for easy maintenance and usage.

## Structure

```
src/assets/icons/
├── index.ts          # Main export file
├── utils.ts          # Utility functions
├── README.md         # This file
├── close.svg         # Close/X icon
├── check.svg         # Checkmark icon
├── user.svg          # User/Profile icon
├── heart.svg         # Heart icon
├── plus.svg          # Plus icon
├── arrow-right.svg   # Right arrow
├── arrow-left.svg    # Left arrow
├── bookmark.svg      # Bookmark icon
├── menu.svg          # Menu icon
├── star.svg          # Star icon
├── trophy.svg        # Trophy icon
└── lightbulb.svg     # Lightbulb icon
```

## Usage

### Method 1: Using Utility Functions (Recommended)

```tsx
import { renderIcon } from '../assets/icons/utils';

// Render icon with custom styling
{renderIcon('check', 'text-green-500', 'w-8 h-8')}

// Render icon as image
{renderIconAsImg('heart', 'text-red-500', 'w-6 h-6', 'Heart icon')}
```

### Method 2: Direct Import

```tsx
import { CheckIcon, HeartIcon } from '../assets/icons';

// Use as image source
<img src={CheckIcon} alt="Check" className="w-6 h-6" />

// Use with dangerouslySetInnerHTML
<div 
  className="w-6 h-6 text-green-500"
  dangerouslySetInnerHTML={{ __html: CheckIcon }}
/>
```

### Method 3: Using Icons Object

```tsx
import { icons } from '../assets/icons';

// Get icon by name
const checkIcon = icons.check;

// Use in any context
<div dangerouslySetInnerHTML={{ __html: checkIcon }} />
```

## Adding New Icons

1. **Create SVG file**: Add your `.svg` file to this folder
2. **Update index.ts**: Add import and export for the new icon
3. **Update utils.ts**: Add any new utility functions if needed
4. **Update README**: Document the new icon

### Example for adding a new icon:

```tsx
// 1. Create src/assets/icons/new-icon.svg
<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="..." />
</svg>

// 2. Update src/assets/icons/index.ts
import newIconIcon from './new-icon.svg';
export { default as NewIconIcon } from './new-icon.svg';

// 3. Use in components
{renderIcon('newIcon', 'text-blue-500', 'w-6 h-6')}
```

## Benefits

- **Organized**: All icons in one place
- **Maintainable**: Easy to update individual icons
- **Type-safe**: TypeScript support with IconName type
- **Flexible**: Multiple usage methods
- **Performance**: SVG files are optimized and cached
- **Scalable**: Easy to add new icons

## Icon Guidelines

- Use `currentColor` for stroke/fill to enable CSS styling
- Include proper `viewBox` attribute
- Keep SVG markup clean and minimal
- Use consistent naming convention (kebab-case for files)
- Ensure accessibility with proper alt text when used as images
