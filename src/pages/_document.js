import { Head, Html, Main, NextScript } from "next/document";

import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className="bg-slate-900 text-white">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
