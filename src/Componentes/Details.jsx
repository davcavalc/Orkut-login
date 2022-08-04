import React from "react";

const Details = ({ logo }) => {
	return (
		<>
			<div className="flex items-center flex-col">
				<img className="w-32 mt-5" src="/vite.svg" alt="vite-logo" />
				<details className="mt-5 bg-slate-400 w-80 rounded-md text-center">
					<summary className="text-xl font-bold text-black underline">Sobre a imagem acima: o {logo}</summary>
					<p className="text-justify mt-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia a veritatis obcaecati esse
						maiores illum unde ratione expedita. In magnam sunt voluptatibus saepe magni nemo quis
						inventore ex corrupti ad!
					</p>
				</details>
			</div>
		</>
	);
};

export default Details;
