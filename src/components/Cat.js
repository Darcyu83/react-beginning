import Axios from "axios";

import { useState, useEffect } from "react";

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };
  return { value, onChange };
}

function useFetch(url) {
  const [payload, setPayload] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const callUrl = async (url) => {
    try {
      const { data } = await Axios.get(url); //response.data
      setPayload(data);
    } catch (error) {
      setError("Error 났어");
    } finally {
      setIsLoading(false);
    }
  };

  //useEffect equivelent to componenetDidMount
  useEffect(() => {
    callUrl(url);
  }, []);

  console.log("======2", payload);

  return { payload, isLoading, error };
}

export default function App() {
  const name = useInput("");
  const { payload, isLoading, error } = useFetch("https://aws.random.cat/meow");

  return (
    <div className="App">
      <input {...name} placeholder="what is your name?" />
      <br />
      <h1>고양이 사진</h1>
      {isLoading && <span>Loading your cat...</span>}
      {!isLoading && error && <span>{error}</span>}
      {!isLoading && payload && (
        <img src={payload.file} style={{ width: "300px" }} />
      )}
    </div>
  );
}
