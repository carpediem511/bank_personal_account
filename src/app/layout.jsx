import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";

const font = Montserrat_Alternates({
	subsets: ["latin"], weight: ['400', '500', '600', '700']
}); //здесь поменять для шрифта
//основные данные
export const metadata = {
	generator: 'Next.js',
	applicationName: 'Banking application',
	title: "Личный кабинет | Банк",
	description: "Generated by create next app",
	author: "Мальвина Милаш",
	copyright: "© 2024 Мальвина Милаш",
	lang: "ru",
	type: "website",
	keywords: ["банковское приложение", "онлайн банкинг", "финансовые услуги", "управление счетами"], //омогает поисковым системам лучше индексировать ваш сайт
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
			<body className={font.className}>{children}</body>
		</html>
	);
}
