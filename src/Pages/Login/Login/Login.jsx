import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)


  return (
    <div>
      <Helmet>
        <title>doc-house | login</title>
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content flex-col lg:flex-row-reverse gap-8">
          <div className="text-center w-full md:w-1/2 lg:text-left">
            <img src="https://i.ibb.co/gRKkPfM/doctor-signup.png" alt="" />
          </div>
          <div className="card shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h2 className="text-3xl font-bold text-center uppercase">Login Here</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email")}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    {...register("password")}
                    className="input input-bordered w-full"
                    required
                  />
                  <span className="absolute top-4 right-5" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
                </div>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" value="Login" />
              </div>
              <p className="text-center">New here? Please <Link className="text-purple-600 font-bold" to="/register">Register</Link> Here</p>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
