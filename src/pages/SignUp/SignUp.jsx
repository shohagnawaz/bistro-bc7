import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name)
        .then(() => {
          console.log("user profile updated");
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss || Sign Up</title>
      </Helmet>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="input"
                  placeholder="Name"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
                <label className="label">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="input"
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
                <label className="label">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z].)(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  className="input"
                  placeholder="Password"
                />
                {errors.password?.type == "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type == "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type == "maxLength" && (
                  <p className="text-red-600">
                    Password must be less then 20 characters
                  </p>
                )}
                {errors.password?.type == "pattern" && (
                  <p className="text-red-600">
                    Password must be one uppercase, one lower case, one special
                    character
                  </p>
                )}
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <input
                  className="btn btn-neutral mt-4"
                  type="submit"
                  value="Sign Up"
                />
              </fieldset>
            </form>
            <p className="p-4 ml-4">
              <small>
                Already have an account. <Link to="/login">Please Login</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
