import React from "react";

const Banner = () => {
  return (
    <div className="my-5">
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-bold">
              One Step <br /> Closer To Your <br />{" "}
              <span className="text-fuchsia-400"> Dream Job</span>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat <br /> ut
              assumenda excepturi exercitationem quasi. <br /> In deleniti eaque
              aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
