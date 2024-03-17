import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NavigationTrigger({ isVisible, onNavigate }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (isVisible) {
      onNavigate(); // Trigger navigation callback
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "e") {
        handleNavigation();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVisible]);

  return null; // This component doesn't render any visual elements
}

export default NavigationTrigger;
