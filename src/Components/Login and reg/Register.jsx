import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const [photoUrl, setPhotoUrl] = useState("");
    const [error, setError] = useState("");
    console.log(name, email, password);

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(email, name, photoUrl, password);
      if (email.trim() === "" || password.trim() === "") {
        setError("Please fill out all fields");
      } else if (password.length < 6) {
        setError("Password must be at least 6 characters");
      }

      createUser(email, password)
        .then((result) => {
          updateUser(result.user, name, photoUrl)
            .then(() => {
              Swal.fire({
                icon: "success",
                title: "Yes",
                text: "SuccessFully Registered !",
              });
            })
            .catch((err) => {
              console.log(err.message);
            });
          console.log(result.user);
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something Wrong!",
          });
        });
    };
  };

  return (
    <div className="hero mb-10  bg-base-200">
      <div className="hero mt-20 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-12">
            <img
              src="https://cdn.dribbble.com/users/1917942/screenshots/7139971/media/d802dc4eadb049f5a9684759cfdfbffa.gif"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div>
              <h1 className="text-3xl text-center text-yellow-500 font-bold">
                Sign Up
              </h1>
              <form onSubmit={handleSignUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    className="input input-bordered"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Password must contain at least one number, one lowercase letter, one uppercase letter, and be at least 8 characters long."
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    name="password"
                    placeholder="Only Photo URL "
                    className="input input-bordered"
                    onChange={(event) => setPhotoUrl(event.target.value)}
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn bg-red-500 hover:bg-yellow-500 border border-0"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
              <p className="my-4 text-center">
                Already Have an Account?{" "}
                <Link className="text-yellow-500 ms-3 font-bold" to="/login">
                  Login
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
