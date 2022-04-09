import "bulma/css/bulma.min.css";
import type { AppProps } from "next/app";
import "../styles/global.css";

const App = ({ Component, pageProps }: AppProps) => (
	<Component {...pageProps} />
);

export default App;
