import { useEffect } from "react";

const useLockBodyScroll = (isLocked: boolean) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    document.body.style.overflow = isLocked ? "hidden" : originalStyle;

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked]);
};

export default useLockBodyScroll;
