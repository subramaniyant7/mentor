import * as React from 'react';
import Box from '@mui/material/Box';

const Stepper = ({ steps }) => {

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <Box sx={{ width: '100%' }}>
      <div onClick={slideLeft}> Prev</div>
      <div
        id='slider'
        className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide no-scrollbar'
      >
        <ol
          class="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center 
          text-gray-500 bg-white  rounded-lg shadow-sm 
          sm:text-base  sm:p-4 sm:space-x-4 
          rtl:space-x-reverse gap-12"
        >
          {
            steps.map((step, index) => {
              return (
                <li class="flex flex-row items-center text-blue-600 dark:text-blue-500">
                  <span class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                    {index + 1}
                  </span>
                  <div className="flex flex-col text-left">
                    <div>{step.name}</div>
                    <div className="text-xs">{step.status}</div>
                  </div>
                  <svg
                    class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 12 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m7 9 4-4-4-4M1 9l4-4-4-4"
                    />
                  </svg>
                </li>
              )
            })
          }


        </ol>
      </div>
      <div onClick={slideRight}> Next</div>
    </Box>
  );
}

export default Stepper;
