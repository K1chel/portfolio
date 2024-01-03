import { useContactModal } from "../hooks/use-contact-modal";

const ContactButton = () => {
  const { onOpen } = useContactModal();

  return (
    <button
      onClick={() => onOpen()}
      className={`
          relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
          border-neutral-700 px-4 py-1.5 font-medium
          text-neutral-300 transition-all duration-300
          
          before:absolute before:inset-0
          before:-z-10 before:translate-y-[200%]
          before:scale-[2.5]
          before:rounded-[100%] before:bg-indigo-500
          before:transition-transform before:duration-1000
          before:content-[""]
  
          hover:scale-105 hover:border-indigo-500 hover:text-gray-300
          hover:before:translate-y-[0%]
          active:scale-100`}
    >
      Contact Me
    </button>
  );
};

export default ContactButton;
