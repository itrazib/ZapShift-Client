import { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const ForgetPassword = () => {
  const { forgetEmail } = useAuth();
  const [email, setEmail] = useState("");

  const handleForgetPassword = async () => {
    try {
      await forgetEmail(email);
      alert("Password reset email sent!");
      
    } catch (error) {
      console.log(error.message);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl">
        <h1 className="text-3xl font-bold">Forgot Password</h1>
        <p>Enter your email address and we’ll send you a reset link.</p>

        <label className="form-control w-full mb-4">
          <span className="label-text">Email</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="input input-bordered w-full"
          />
        </label>
        <button
          onClick={handleForgetPassword}
          className="btn btn-primary w-full mt-5 text-black"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
