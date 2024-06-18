import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
//основные данные
export const metadata = {
	generator: 'Next.js',
	applicationName: 'Banking application',
	title: "Личный кабинет | Банк",
	description: "Generated by create next app",
	icons: {
		icon: '/logotip.png',
	}
};

/*//для динамических метаданных
export async function generateMetadata({params, searchParams}) {
	//здесь будет та переменная, которая будет генерироваться, например, посты
	const post = await fetchData(params.id)
	return {
		title: post.title,
		description: post.body,
		keywords: ''
	}
}

async function fetchData(id) {
	const res = await fetch ('ссылка' + id)
	const result = await res.json()
	return result
}*/

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
