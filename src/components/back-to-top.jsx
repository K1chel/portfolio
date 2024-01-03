import { ArrowUp } from "lucide-react";
import { useScrollTop } from "../hooks/use-scroll-top";

const BackToTop = () => {
  const { scrollToTop } = useScrollTop();

  return (
    <div>
      <button
        className="p-1.5 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-colors"
        onClick={scrollToTop}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default BackToTop;
