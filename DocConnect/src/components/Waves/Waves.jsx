/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unknown-property */
import {Box} from '@chakra-ui/react';
import './Waves.style.css';

const Waves = ({colorStart, colorEnd}) => {
  return (
    <Box
      overflow='hidden'
    >
      <svg className='wave' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1296 644" width="1296" height="644">
        <defs>
          <linearGradient id="a" x2="1296" y1="324" y2="324" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor={colorStart || '#f56565'} />
            <stop offset="1" stopColor={colorEnd || '#e53e3e'} />
          </linearGradient>
          <linearGradient xlinkHref="#a" id="b" y1="322" y2="322" />
          <linearGradient xlinkHref="#a" id="c" y1="350.02" y2="350.02" />
          <linearGradient xlinkHref="#a" id="d" y1="346.5" y2="346.5" />
          <linearGradient xlinkHref="#a" id="e" y1="324.5" y2="324.5" />
        </defs>
        <path className='wave--offset-1' fill="url(#a)" d="m1296 644-.33-249.47V4c-5.61 4.27-111.71 84.15-210.11 114a647.27 647.27 0 0 1-98 21c-16.56 2-21.29 1.77-44 4 0 0-45.17 4.43-99 14-47.09 8.36-85.33 18.76-194.1 50-133.2 38.25-122.07 35.92-139.08 40-28 6.74-102.55 23.69-201.1 33a1499.81 1499.81 0 0 1-182.09 6C78.29 284.63 35 281 0 277v367" opacity=".75" />
        <path className='wave--offset-2' fill="url(#b)" d="m1296 644-.32-249.55V0a802.71 802.71 0 0 1-113.06 55 798.81 798.81 0 0 1-131.07 39c-41.93 8.61-72.38 11.28-126.06 16-50 4.39-91.87 6.2-122.06 7l-174.09 1c-11.34.43-27.61 1.43-47 4-12.54 1.66-67.38 9.37-135.07 37a618.5 618.5 0 0 0-70 34c-20.77 11.84-26 16.52-54 34-36.17 22.55-54.25 33.82-78 45-49 23.05-89.78 31-101.06 33-37.84 6.86-66.56 6.19-73 6A327.61 327.61 0 0 1 0 301v343" opacity=".75" />
        <path className='wave--offset-3' fill="url(#c)" d="m1296 644-.66-250V56c-46.83 6-85.89 10.58-117 14-61.49 6.66-107.93 11.7-170 16-34.5 2.39-42.43 2.38-65 5a937 937 0 0 0-110 20c-18.24 4.4-39.86 9.68-68 19-25.42 8.41-52.31 19.72-105 42-50.19 21.2-46.48 20.33-57 24-51.12 17.79-91.42 21.9-104 23a391.76 391.76 0 0 1-70 0c-39-3.76-69.65-13.12-95-21-22.47-7-18.43-7.08-35-12-78.85-23.37-139.82-11.94-154-9-8.19 1.69-14.17 3.32-24 6-21.59 5.88-51.23 14.1-85 31A382.86 382.86 0 0 0 0 234v410" opacity=".75" />
        <path className='wave--offset-4' fill="url(#d)" d="m1296 644-.32-249.59V49a961.19 961.19 0 0 1-108.06 45c-38.86 13.48-69.09 21.12-100 29-30 7.64-74.11 17.91-128.07 27-51.41 8.66-51.11 6-181.09 22-58.74 7.22-66.25 8.68-113.06 14-27 3.07-56.75 6.09-115.06 12-85.6 8.67-128.4 13-139.08 14-52.46 4.86-73.43 6.28-111.06 12-21.77 3.31-43.17 6.56-71 13-58.52 13.5-101.44 30.87-126.2 41A915.36 915.36 0 0 0 0 328v316" opacity=".75" />
        <path className='wave--offset-5' fill="url(#e)" d="m1296 644-.33-249.78V5c-17 1-26 2-36 3-52.67 5.26-18.67 1.8-119.08 16-106 15-163.83 27.77-192.1 33-102.12 18.88-143.07 28.62-239.12 44-73.62 11.79-63.38 8.28-120.06 18-37.21 6.38-119.41 21.23-226.12 48-28.23 7.08-42.34 10.62-57 15a925.65 925.65 0 0 0-174.09 72c-36 19.45-28.71 18.74-82 49A418.45 418.45 0 0 0 0 336v308" opacity=".75" />
      </svg>
    </Box>
  );
};

export default Waves;