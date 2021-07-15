import CountProvider from "./context/Count";
import ThemeProvider from "./context/Theme";

import Counter from "./components/Counter";
import Display from "./components/Display";
import Container from "./components/Container";

function App() {
  return (
    <ThemeProvider>
      <CountProvider>
        <Container>
          <Counter />
          <br />
          <Display />
        </Container>
      </CountProvider>
    </ThemeProvider>
  );
}

export default App;
