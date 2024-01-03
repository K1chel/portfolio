/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { useContactModal } from "../../hooks/use-contact-modal";
import { MdOutlineAttachEmail } from "react-icons/md";
import { useState } from "react";

const ContactModal = () => {
  const { isOpen, onClose } = useContactModal();
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onClose()}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-[999] grid place-items-center overflow-y-scroll cursor-pointer w-[100vw]"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-xl shadow-xl cursor-default relative overflow-hidden"
          >
            <MdOutlineAttachEmail className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-center mb-2">Contact</h3>
              <p className="text-center mb-6">
                Have a question or want to work together?
              </p>
              <div className="flex items-start flex-col gap-y-3 w-full mb-10">
                <input
                  className="w-full bg-indigo-700/75 px-2 py-2 rounded-lg outline-none focus:ring-violet-500 focus:ring-2"
                  placeholder="example@email.com"
                  value={inputs.email}
                  onChange={(e) =>
                    setInputs({ ...inputs, email: e.target.value })
                  }
                />
                <textarea
                  className="w-full bg-indigo-700/75 px-2 py-2 rounded-lg outline-none focus:ring-violet-500 focus:ring-2 resize-none overflow-y-hidden"
                  placeholder="Your message here..."
                  value={inputs.message}
                  onChange={(e) =>
                    setInputs({ ...inputs, message: e.target.value })
                  }
                  rows={5}
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => onClose()}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Go back
                </button>
                <button
                  onClick={() => onClose()}
                  className="bg-white hover:bg-white/80 transition text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
