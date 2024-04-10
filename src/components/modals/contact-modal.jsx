import { AnimatePresence, motion } from "framer-motion";
import { InfoIcon } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import TextareaAutosize from "react-textarea-autosize";

import { useContactModal } from "../../hooks/use-contact-modal";

export const ContactModal = () => {
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();

  const { isOpen, onClose } = useContactModal();

  const onSendEmailSubmitHandler = (e) => {
    e.preventDefault();

    if (!values.user_name || !values.user_email || !values.message) {
      toast.error("Please fill out all fields");
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("Email sent successfully");
          setIsLoading(false);
          toast("You send message successfully, I will get back to you soon", {
            action: {
              label: "Close form",
              onClick: onClose,
            },
          });
          setValues({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          console.error("Email failed to send", error);
        }
      );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-[999] grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <InfoIcon className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <InfoIcon />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Contact me
              </h3>
              <p className="text-center mb-6">
                If you have any questions or want to work together, feel free to
                reach out to me at <strong>contact.k1chel@gmail.com</strong>
              </p>
              <form
                ref={formRef}
                onSubmit={onSendEmailSubmitHandler}
                className="space-y-4"
              >
                <div className="flex flex-col">
                  <label className="label_primary">Your name</label>
                  <input
                    type="text"
                    name="user_name"
                    value={values.user_name}
                    onChange={(e) =>
                      setValues((prev) => ({
                        ...prev,
                        user_name: e.target.value,
                      }))
                    }
                    className="input_primary"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="label_primary">Your email</label>
                  <input
                    type="email"
                    name="user_email"
                    value={values.user_email}
                    onChange={(e) =>
                      setValues((prev) => ({
                        ...prev,
                        user_email: e.target.value,
                      }))
                    }
                    className="input_primary"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="label_primary">Your message</label>
                  <TextareaAutosize
                    type="text"
                    name="message"
                    value={values.message}
                    onChange={(e) =>
                      setValues((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    className="input_primary resize-none"
                    minRows={4}
                    maxRows={8}
                  />
                </div>
                <button
                  type="submit"
                  value="Send"
                  className="submit_email_button disabled:bg-opacity-30 disabled:cursor-not-allowed disabled:hover-none"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
