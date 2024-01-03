/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import {
  linkWrapperVariants,
  navLinkVariants,
  navVariants,
} from "../../lib/motion";
import { navItems } from "../../constants";
import { useContactModal } from "../../hooks/use-contact-modal";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center text-white">
        <motion.button
          whileHover={{ rotate: "180deg" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="text-xl bg-zinc-900 hover:text-indigo-500 transition-colors p-3 rounded-full"
        >
          <FiMenu color="#fff" />
        </motion.button>
      </div>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const Nav = ({ isOpen, setIsOpen }) => {
  return (
    <motion.nav
      className="fixed inset-0 w-screen z-[999] bg-transparent backdrop-filter backdrop-blur-md h-screen bg-zinc-900"
      animate={isOpen ? "open" : "closed"}
      variants={navVariants}
      initial="closed"
    >
      <motion.button
        className="text-3xl bg-zinc-800 text-white hover:text-white border-[1px] border-transparent hover:border-white transition-colors p-3 rounded-full absolute top-8 right-8"
        whileHover={{ rotate: "180deg" }}
        onClick={() => setIsOpen(false)}
        whileTap={{ scale: 0.9 }}
      >
        <FiX />
      </motion.button>
      <motion.div
        variants={linkWrapperVariants}
        className="flex flex-col gap-4 absolute bottom-8 left-8"
      >
        {navItems.map((item) => (
          <NavLink
            setIsOpen={setIsOpen}
            key={item.key}
            text={item.label}
            href={item.href}
          />
        ))}
        <NavLink setIsOpen={setIsOpen} text="Contact me" />
      </motion.div>
    </motion.nav>
  );
};

const NavLink = ({ text, href, setIsOpen }) => {
  const { onOpen } = useContactModal();

  const handleOpenModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      onOpen();
    }, 200);
  };

  return (
    <motion.a
      onClick={
        text === "Contact me" ? () => handleOpenModal() : () => setIsOpen(false)
      }
      href={href}
      className="inline-block z-10 text-zinc-500 w-fit font-black text-7xl hover:text-white transition-colors"
      variants={navLinkVariants}
      transition={{
        type: "spring",
        damping: 3,
      }}
      whileHover={{
        y: -15,
        rotate: "-7.5deg",
      }}
      rel="nofollow"
    >
      {text}
    </motion.a>
  );
};

export default MobileNav;
