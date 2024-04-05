/* eslint-disable react/prop-types */
export const Button = ({ children }) => {
  return (
    <div className="bg-transparent flex items-center justify-center">
      <button className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit rounded-md transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        {children}
      </button>
    </div>
  );
};
