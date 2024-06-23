'use client' //на всех страницах, где есть хуки, клиентский компонент
//корневая страница например UserPage - не может быть клиентским компонентом, это серверный компонент
//import Header from "../components/header"
import Image from "next/image"
import { useRouter } from "next/navigation"

const UserAccountPage = () => {
	const { push } = useRouter()
	//метод back - кнопка назад, replace(для авторизации) - переадресовывает и очищает историю, кнопка назад в браузере не будет работать
	//хук usePathname - получить текущий адрес, где есть пользователь - для подсветки активного элемента
	//хук useSearchParams - получить параметры из адреса, например при поиске на сайте
	//хук useParams  - использовать слаг и получать информацию
	push('/product/product1')

	return (
		<>
			<p>user</p>
			{/*	<Header />*/}
			<Image src='/logotip.png' alt="logo" width={200} height={200} />

		</>
	)
}

export default UserAccountPage
//SSR, не оптимизирован, 1 пользователь = 1 ответ, будут затраты на сервер
/*const fetchData = async () => {
	const response = await fetch ('https://jsonplaceholder.typicode.com/posts')
	const data = await response.json()
	return data
}

export default async function UserAccountPage() {
	const posts = await fetchData()
	return <UserAccount data={posts} />
}*/

/*//SSG позволяет оптимизировать эту ситуацию

const fetchData = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
		cache: 'force-cache' //указывает на чистую статику SSG
	})
	const data = await response.json()
	return data
}*/

/*//ISR - тоже самое, но есть обновления

const fetchData = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
		cache: 'force-cache', //указывает на чистую статику SSG
		next: {
			revalidate: 3600, //обновление будет происходить каждый час
		}
	})
	const data = await response.json()
	return data
}*/