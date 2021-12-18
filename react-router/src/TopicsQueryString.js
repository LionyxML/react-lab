import { stringify, parse } from "query-string";

function TopicsQueryString() {
  const sampleData = {
    user: "The Usar!",
    age: "22",
    groupIds: [222, 323, 2423],
    volume: 232,
    brightness: 1000,
    status: "invisible",
    showUser: true,
  };

  const queryStringOptions = {
    arrayFormat: "bracket-separator",
    arrayFormatSeparator: "|",
    parseBooleans: true,
  };

  const sampleDataStringified = stringify(sampleData, queryStringOptions);

  return (
    <div>
      <h1>TOPICS with query-string</h1>
      <p>This is our sample data:</p>
      <pre>{JSON.stringify(sampleData, 1, 2)}</pre>
      <p>Stringified as:</p>
      <pre>{sampleDataStringified}</pre>
      <p>
        <a
          href={
            window.location.origin +
            window.location.pathname +
            "?" +
            sampleDataStringified
          }
        >
          Load this page with this stringified data on url.
        </a>
      </p>
      <p> Received from the URL: </p>
      <pre>
        {JSON.stringify(
          parse(window.location.search, queryStringOptions),
          1,
          2
        )}
      </pre>
      <p>
        <a href={window.location.origin + window.location.pathname}>
          Reset (back to the non query-string route)
        </a>
      </p>
    </div>
  );
}

export default TopicsQueryString;
