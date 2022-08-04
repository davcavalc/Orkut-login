import React from "react";

const Header = () => {
	return (
		<header>
			<div className="flex justify-start border-[2px] border-slate-100 rounded-full mx-20 bg-yellow-200">
				<p className="font-bold text-red ml-4">Aviso:</p>
				<p className="ml-2">O Orkut.br não tem vínculo com o Google</p>
			</div>
		</header>
	);
};

export default Header;
