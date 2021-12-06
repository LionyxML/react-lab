import { useParams } from "react-router-dom";
import base64url from "base64url";

function Topics() {
  const { data } = useParams();

  const decodedData = data && JSON.parse(base64url.decode(data));

  const first = decodedData && decodedData.first;
  const last = decodedData && decodedData.last;

  const encodedData = {
    first: "hello",
    last: "goodbye",
  };

  console.log(base64url(JSON.stringify(encodedData)));

  console.log(data);
  return (
    <div>
      <h1>TOPICS</h1>
      <p>Received: </p>
      <pre>{data}</pre>
      <p>Decoded: </p>
      <pre>{first}</pre>
      <pre>{last}</pre>
    </div>
  );
}

export default Topics;
