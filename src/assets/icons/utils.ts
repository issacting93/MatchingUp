import { IconName, icons } from './index';

// Helper function to get icon by name
export const getIcon = (name: IconName) => {
  return icons[name];
};

// Helper function to create inline SVG element
export const createInlineSvg = (icon: string, className = "", ...props: any) => {
  return {
    __html: icon
  };
};

// Helper function to create data URL for SVG (if needed)
export const createSvgDataUrl = (svgString: string) => {
  const encoded = encodeURIComponent(svgString);
  return `data:image/svg+xml,${encoded}`;
};

// Helper function to get icon HTML for dangerouslySetInnerHTML
export const getIconHtml = (name: IconName) => {
  return getIcon(name);
};

// Helper function to get icon as data URL
export const getIconDataUrl = (name: IconName) => {
  const icon = getIcon(name);
  return createSvgDataUrl(icon);
};
