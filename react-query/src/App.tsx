import React, { useState } from "react";
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

const useFetchPeople = () => {
  const { apiFetchPeople } = useAPI();

  return useQuery("getPeople", async () => {
    return apiFetchPeople("skywalker");
  });
};

export const App: React.FC = () => {
  const { status, data, isFetching } = useFetchPeople();

  return (
    <>
      <h1>Testing react-query package.</h1>
      <button type="button">Make Request 1</button>
      <button type="button">Make Request 1 from other function</button>
      <p>Response:</p>
      <div>{isFetching ? "Loading..." : ""} </div>
      <div>{status}</div>
      <pre>{JSON.stringify(data, null, 1)}</pre>
    </>
  );
};

export default App;
