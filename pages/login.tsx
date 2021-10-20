import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <div className="login">
        <div className="container">
          <div className="text-center">
            <h2 className="fs-lg d-inline-block pb-xl">Login</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="form-group col-12">
                    <input
                      type="text"
                      placeholder="Username or Email.."
                      className="form-control mb-2"
                      {...register("username", { required: true })}
                    />
                    {errors.username?.type === "required" && (
                      <p className="text-danger mb-0">Username is required</p>
                    )}
                  </div>
                  <div className="form-group col-12">
                    <input
                      type="password"
                      placeholder="Password.."
                      className="form-control mb-2"
                      {...register("password", { required: true })}
                    />
                    {errors.password?.type === "required" && (
                      <p className="text-danger mb-0">Password is required</p>
                    )}
                  </div>
                  <div className="form-group col-12">
                    <button role="button" className="btn btn-primary mt-xs">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
