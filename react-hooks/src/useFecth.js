import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState({ data: null, loading: true });
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        setState({ data: y, loading: false });
      });
  }, [url, setState]);

  // Inside [] url is the changing argument
  // setState is a FUNCTION and is added
  // as a "dependency" of
  // the inside function, bc it's provided
  // from outside

  return state;
};
