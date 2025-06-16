"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SaveLives from "@/component/saveLives"; // Adjust this path as needed

const PopupManager = () => {
  const pathname = usePathname();
  const [showPopup, setShowPopup] = useState(false);

  // Function to match allowed paths, including dynamic ones
  const shouldShowPopup = () => {
    return (
      pathname === "/" ||
      pathname === "/about" ||
      pathname === "/initiatives" ||
      pathname === "/givingways" ||
      pathname === "/getinvolved" ||
      pathname === "/viewall" ||
      pathname.startsWith("/newsDetail/") // ✅ Dynamic route match
    );
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (shouldShowPopup()) {
      timer = setTimeout(() => {
        setShowPopup(true);
      }, 5000); // Show after 5 seconds
    } else {
      setShowPopup(false);
    }

    return () => clearTimeout(timer); // Cleanup on route change
  }, [pathname]);

  return showPopup ? <SaveLives onClose={() => setShowPopup(false)} /> : null;
};

export default PopupManager;
