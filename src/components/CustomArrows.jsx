import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export const CustomLeftArrow = ({ onClick }) => (
  <button onClick={onClick}>
    <ChevronLeftIcon className="!absolute top-2/4 left-0 md:left-4 -translate-y-2/4 max-md:right-4 w-12 md:w-32 h-12 md:h-32 text-white transition duration-300 ease-in-out hover:scale-110 hover:z-10" />
  </button>
);

export const CustomRightArrow = ({ onClick }) => (
  <button onClick={onClick}>
    <ChevronRightIcon className="!absolute top-2/4 right-0 md:right-4 -translate-y-2/4 max-md:left-4 w-12 md:w-32 h-12 md:h-32 text-white transition duration-300 ease-in-out hover:scale-110 hover:z-10" />
  </button>
);

