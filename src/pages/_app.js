import store from "@/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

import { Montserrat } from "@next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component className={`${montserrat.className} ${pageProps.className}`} {...pageProps} />
		</Provider>
	);
}
