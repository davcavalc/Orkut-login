import React from "react";

const LeftSide = () => {
  return (
    <React.Fragment>
      <section className="border-4 border-white bg-orkutform p-10 ml-5 w-[35rem] flex justify-center mt-6 h-96 mr-80">
        <form action="">
          <h2 className="mb-5">
            Sign in with your <strong>Google</strong> account
          </h2>
          <div className="grid grid-cols-1">
            <div className="">
                <label className="mt-5" htmlFor="">Email: </label>
                <input type="email" className="flex justify-center" required />
            </div>
            <h6 className="text-outros">pat@example.com</h6>
            <div className="">
                <label className="mt-5" htmlFor="">Password: </label>
                <input type="password" className="flex justify-center" required />
            </div>
          </div>
          <div className="">
            <div className="">
              <input type="checkbox" name="" id="" />
              <p>Remember me on this computer</p>
            </div>
            <p className="text-outros">Do not use on public computers. [?]</p>
            <button>Sign in</button>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};

export default LeftSide;
