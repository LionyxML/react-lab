import "./App.css";
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is a sample page! Do not look at it. Only the cookie banner
          bellow.
        </p>

        <p>This are the cookies for this page: </p>
        <code>{document.cookie}</code>
        <button
          onClick={() => {
            if (document.cookie.length > 0) {
              var c = document.cookie.split("; ");
              for (let i in c)
                document.cookie =
                  /^[^=]+/.exec(c[i])[0] +
                  "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
              window.location.reload();
            }
          }}
        >
          Delete All Cookies
        </button>
      </header>

      <CookieConsent
        location="bottom"
        buttonText="Yes!!!"
        enableDeclineButton
        declineButtonText="No, no, no..."
        cookieName="consentCookie"
        style={{ background: "#333" }}
        buttonStyle={{
          fontSize: "20px",
          backgroundColor: "#00AB66",
          color: "white",
          borderRadius: "10px",
        }}
        declineButtonStyle={{
          fontSize: "20px",
          backgroundColor: "#ff0021",
          borderRadius: "10px",
        }}
        expires={150}
        onAccept={() => window.location.reload()}
        onDecline={() => {
          window.location.reload();
          alert("Oh no! Not saving my cookie :(");
        }}
      >
        This website uses cookies to enhance the user experience! Accept or Do
        not!
      </CookieConsent>
    </div>
  );
}

export default App;
