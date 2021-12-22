import { useEffect, useState } from "react";

export function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch(url);
      const json = await resp.json();

      setLoading(false);
      setResponse(json);
    })();
  }, [url]);

  return [loading, response];
}
