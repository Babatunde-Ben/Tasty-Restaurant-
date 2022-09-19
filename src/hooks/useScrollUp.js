import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollUp = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);
  console.log(location);
};

export default useScrollUp;
