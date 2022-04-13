import React, { useEffect, useState, useRef } from "react";

function useClient() {
  const [rendered, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
    return () => setRender(false);
  }, []);
  return rendered;
}

export default useClient;
