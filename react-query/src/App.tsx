import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const useAPI = (): typeof hookReturn => {
  const api = axios.create({
    baseURL: "https://swapi.dev/api/",
  });

  const apiFetchPeople = async (
    searchString: string
  ): Promise<string | JSON> => {
    const { data } = await api.get(`people/?search=${searchString}`);
    return data;
  };

  const hookReturn = {
    apiFetchPeople,
  };

  return hookReturn;
};

const useFetchPeople = (searchString: string) => {
  const { apiFetchPeople } = useAPI();

  return useQuery("getPeople", async () => {
    return apiFetchPeople(searchString);
  });
};

export const App: React.FC = () => {
  const [searchFor, setSearchFor] = useState("yoda");
  const { status, data, isFetching, refetch } = useFetchPeople(searchFor);

  useEffect(() => {
    refetch();
  }, [searchFor, refetch]);

  return (
    <>
      <h1>Testing react-query package.</h1>
      <button
        type="button"
        onClick={() => {
          setSearchFor("darth");
        }}
      >
        search for Darth!
      </button>
      <button
        type="button"
        onClick={() => {
          setSearchFor("anakin");
        }}
      >
        search For Anakin!
      </button>
      <button
        type="button"
        onClick={() => {
          setSearchFor("anakin");
        }}
      >
        search For Anakin again!
      </button>

      <button
        type="button"
        onClick={() => {
          refetch();
        }}
      >
        refetch
      </button>
      <p>Response:</p>
      <div>{isFetching ? "Loading..." : ""} </div>
      <div>{status}</div>
      <pre>{JSON.stringify(data, null, 1)}</pre>
    </>
  );
};

export default App;
