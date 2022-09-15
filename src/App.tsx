import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Providers from "./Providers"

function App() {
  return (
    <Providers>
      <GlobalStyle/>
      <Routes/>
    </Providers>
  );
}

export default App;