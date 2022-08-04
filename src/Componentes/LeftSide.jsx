import React from "react";

const LeftSide = () => {
	return (
		<React.Fragment>
			<section className="border-4 border-white bg-orkutform p-10 ml-5 w-[35rem] flex justify-center mt-6 h-[30rem] mr-80">
				<form action="">
					<h2 className="mb-5">
						Sign in with your <strong>Google</strong> account
					</h2>
					<div className="grid grid-cols-1">
						<div className="">
							<label className="mt-5" htmlFor="">
								Email:
							</label>
							<input type="email" className="flex justify-center" required />
						</div>
						<h6 className="text-outros">pat@example.com</h6>
						<div className="">
							<label className="mt-5" htmlFor="">
								Password:
							</label>
							<input type="password" className="flex justify-center" required />
						</div>
					</div>
					<div className="">
						<div className="flex flex-row mt-2">
							<input type="checkbox" name="" id="" />
							<p className="ml-2">Remember me on this computer</p>
						</div>
						<p className="text-outros">Do not use on public computers. [?]</p>
            <button className="bg-formButton rounded-md w-20 border-[1px] mt-2">Sign in</button>
            
            <a href="#">
              <p className="text-blue-600 underline mt-4">Não consegue acessar a sua conta ?</p>
            </a>
					</div>
				</form>
			</section>
		</React.Fragment>
	);
};

export default LeftSide;
