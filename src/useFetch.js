// using the react custome hook
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // using the react hooks
  useEffect(() => {
    const abortController = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("your request object not found !! ");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("aborted !! ");
          } else {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 1000);

    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
