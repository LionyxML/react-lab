import { useParams } from "react-router-dom";
import base64url from "base64url";

function Topics() {
  const { data } = useParams();

  let decodedData = "";
  try {
    decodedData = data && JSON.parse(base64url.decode(data));
  } catch {
    decodedData = "";
    console.log("Decoding Error");
  }

  const first = decodedData && decodedData.first;
  const last = decodedData && decodedData.last;

  const encodedData = {
    first: "hello",
    last: "goodbye",
  };

  // Generates an example url on the console, paste it
  // like in localhost:3000/topics/eyJmaXJzdCI6ImhlbGxvIiwibGFzdCI6Imdvb2RieWUifQ
  console.log(base64url(JSON.stringify(encodedData)));
  console.log(data);

  return (
    <div>
      <h1>TOPICS</h1>
      <p>Received: </p>
      <pre>{data}</pre>
      {decodedData === "" ? (
        "Nada de útil foi recebido..."
      ) : (
        <>
          <p>Decoded: </p>
          <pre>{first}</pre>
          <pre>{last}</pre>
        </>
      )}
    </div>
  );
}

export default Topics;
