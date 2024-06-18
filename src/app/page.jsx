import Link from "next/link";

export const metadata = {
	title: "Личный кабинет | Банк",
	description: "The user logs into his personal account of YA-Bank. A form for logging into your personal account. Форма для входа в личный кабинет 'YA-банка' для пользователя",
	keywords: ['банк', 'личный кабинет', 'вход в личный кабинет', 'форма для входа в личный кабинет банка', 'форма авторизации', 'bank', 'personal account', 'login to the personal account', 'form for logging into the personal account of the bank', 'authorization form'],
};

export default function Home() {


	return (
		<>
			<main className="w-full h-screen flex flex-col items-center justify-center px-4">
				<div className="max-w-sm w-full text-gray-600 space-y-5">
					<div className="text-center pb-8">
						<img src="./logotip.png" width={150} className="mx-auto" />
						<div className="mt-5">
							<h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Войти в личный кабинет</h3>
						</div>
					</div>
					<form className="space-y-5">
						<div>
							<label className="font-medium">
								Адрес электронной почты
							</label>
							<input
								type="email"
								required
								className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
							/>
						</div>
						<div>
							<label className="font-medium">
								Пароль
							</label>
							<input
								type="password"
								required
								className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
							/>
						</div>
						<button className="w-full mt-4 px-4 py-2 text-white font-medium bg-red-600 hover:bg-red-500 active:bg-red-600 rounded-lg duration-150"
						>
							<Link href='/personal_account'
							>
								Войти
							</Link>
						</button>
					</form>

					<p className="text-center">Ещё нет личного кабинета? <a href="#" className="font-medium text-red-600 hover:text-red-500">
						Зарегистрироваться
					</a></p>
				</div>
			</main>
		</>
	);
}
