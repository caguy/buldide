import { useEffect, useState } from "react";

export default function useComponent() {
  const [state, setState] = useState(/* ... */);

  useEffect(() => {
    // ...
  }, []);
  return { state };
}
