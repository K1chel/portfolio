/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const NavLink = ({ children, href, className }) => {
  return (
    <a href={href} rel="nofollow" className="block overflow-hidden">
      <motion.div
        whileHover={{ y: -20 }}
        transition={{ ease: "backInOut", duration: 0.5 }}
        className="h-[20px]"
      >
        <span className={cn("flex h-[20px] items-center", className)}>
          {children}
        </span>
        <span
          className={cn(
            "flex h-[20px] items-center text-neutral-50",
            className
          )}
        >
          {children}
        </span>
      </motion.div>
    </a>
  );
};

export default NavLink;
