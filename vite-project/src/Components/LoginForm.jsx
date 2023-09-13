import { useState } from "react";
import { toast } from "react-toastify";
import { InputBox } from "./common/InputBox.component";
import { useDispatch } from "react-redux";
import { postLogn } from "../Redux/AuthReducer/action";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (!email) {
        toast.error("Please fill all the fields");
        setLoading(false);
        return;
      }
      // login
      const payload = {
        email: email,
        password: password,
      };
      const data = await dispatch(postLogn(payload));
      localStorage.setItem("token", JSON.stringify(data));
      // console.log(data);
      alert("Admin Login Successful");
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center rounded'>
      {/* Page */}
      <div className='text-2xl font-semibold my-6'>Admin Login</div>

      <div className='flex flex-col gap-5 w-[80%] mb-8'>
        {/* Email */}
        <div className='relative'>
          <InputBox
            type={"email"}
            required={true}
            placeholder={"Enter masai@gmail.com"}
            setState={setEmail}
            state={email}
          />
          {email && (
            <label className='absolute left-4 -top-3 bg-slate-500 rounded-full px-3 text-white'>
              Email
            </label>
          )}
        </div>
        {/* password */}
        <div className='relative'>
          <InputBox
            type={"password"}
            required={true}
            placeholder={"Enter masai"}
            setState={setPassword}
            state={password}
          />
          {password && (
            <label className='absolute left-4 -top-3 bg-slate-500 rounded-full px-3 text-white'>
              Password
            </label>
          )}
        </div>

        {/* Submit Btn */}
        <button
          className={
            "bg-blue-400 text-white font-semibold p-2 rounded-full px-5 active:bg-slate-950"
          }
          onClick={handleSubmit}
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </div>
    </div>
  );
};
