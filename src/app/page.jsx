
export default function Home() {
	return (
		<>
			<main className="w-full h-screen flex flex-col items-center justify-center px-4">
				<div className="max-w-sm w-full text-gray-600 space-y-8">
					<div className="text-center">
						<img src="./logotip.png" width={150} className="mx-auto" />
						<div className="mt-5 space-y-2">
							<h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Войти в личный кабинет</h3>
							<p className="">Ещё не зарегистрированы? <a href="#" className="font-medium text-red-600 hover:text-red-500">
								Зарегистрироваться
							</a></p>
						</div>
					</div>
					<form>
						<div>
							<label className="font-medium">
								Адрес электронной почты
							</label>
							<input
								type="email"
								className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
							/>
						</div>
						<button
							className="w-full mt-4 px-4 py-2 text-white font-medium bg-red-600 hover:bg-red-500 active:bg-red-600 rounded-lg duration-150"
						>
							Войти
						</button>
					</form>
				</div>
			</main>
		</>
	);
}
