// Icon SVG imports
import closeIcon from './close.svg';
import checkIcon from './check.svg';
import userIcon from './user.svg';
import heartIcon from './heart.svg';
import plusIcon from './plus.svg';
import arrowRightIcon from './arrow-right.svg';
import arrowLeftIcon from './arrow-left.svg';
import bookmarkIcon from './bookmark.svg';
import menuIcon from './menu.svg';
import starIcon from './star.svg';
import trophyIcon from './trophy.svg';
import lightbulbIcon from './lightbulb.svg';

// Export all icons
export const icons = {
  close: closeIcon,
  check: checkIcon,
  user: userIcon,
  heart: heartIcon,
  plus: plusIcon,
  arrowRight: arrowRightIcon,
  arrowLeft: arrowLeftIcon,
  bookmark: bookmarkIcon,
  menu: menuIcon,
  star: starIcon,
  trophy: trophyIcon,
  lightbulb: lightbulbIcon,
};

// Individual exports for convenience
export { default as CloseIcon } from './close.svg';
export { default as CheckIcon } from './check.svg';
export { default as UserIcon } from './user.svg';
export { default as HeartIcon } from './heart.svg';
export { default as PlusIcon } from './plus.svg';
export { default as ArrowRightIcon } from './arrow-right.svg';
export { default as ArrowLeftIcon } from './arrow-left.svg';
export { default as BookmarkIcon } from './bookmark.svg';
export { default as MenuIcon } from './menu.svg';
export { default as StarIcon } from './star.svg';
export { default as TrophyIcon } from './trophy.svg';
export { default as LightbulbIcon } from './lightbulb.svg';

// Type for icon names
export type IconName = keyof typeof icons;
