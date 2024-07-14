import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export const CustomLeftArrow = ({ onClick }) => (
  <button onClick={onClick}>
    <ChevronLeftIcon className="w-12 md:w-32 h-12 md:h-32 text-white hover:w-36 hover:h-36 transition-all" />
  </button>
);

export const CustomRightArrow = ({ onClick }) => (
  <button onClick={onClick}>
    <ChevronRightIcon className="w-12 md:w-32 h-12 md:h-32 text-white hover:w-36 hover:h-36 transition-all" />
  </button>
);

