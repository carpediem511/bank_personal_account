const Header = () => {
	return (
		<>
			<header className="p-4 dark:bg-gray-100 dark:text-gray-800">
				<div className="container flex justify-between h-16 mx-auto">
					<img src="/logotip.png" className="flex items-center p-2 w-28 h-28"></img>
					<h2 className="text-2xl font-semibold text-center">Здравствуйте, </h2>
					<ul className="items-stretch hidden space-x-3 lg:flex">
						<li className="flex">
							<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600">Link</a>
						</li>
						<li className="flex">
							<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
						</li>
						<li className="flex">
							<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
						</li>
						<li className="flex">
							<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
						</li>
					</ul>

				</div>
			</header>
		</>
	)
}

export default Header