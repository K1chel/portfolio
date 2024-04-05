import { useEffect, useRef } from "react";
import styles from "./button.module.css";

export const GithubButton = ({ children }) => {
  const parentRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    btnRef.current.addEventListener("mouseover", () => {
      parentRef.current.style.setProperty("--size", "250px");
      parentRef.current.style.setProperty(
        "--shineColor",
        "rgba(255, 255, 255, 0.3)"
      );
    });

    btnRef.current.addEventListener("mouseleave", () => {
      parentRef.current.style.setProperty("--size", "0px");
      parentRef.current.style.setProperty(
        "--shineColor",
        "rgba(255, 255, 255, 0.0)"
      );
    });

    btnRef.current.addEventListener("mousemove", (e) => {
      parentRef.current.style.setProperty("--x", e.offsetX + "px");
      parentRef.current.style.setProperty("--y", e.offsetY + "px");
    });
  }, []);

  return (
    <div ref={parentRef} className={styles.skeuParent}>
      <button
        ref={btnRef}
        className={`overflow-hidden font-mono cursor-pointer text-white rounded px-4 py-2 bg-[radial-gradient(100%_100%_at_100%_0%,_#af8bee_0%,_#6903f6_100%)] transition-[box-shadow_0.15s_ease,_transform_0.15s_ease] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[inset_0px_3px_7px_#6903f6] ${styles.skeu}`}
      >
        {children}
      </button>
    </div>
  );
};
