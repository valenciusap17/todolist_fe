import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="w-2/5 h-3/5 bg-white flex flex-col items-center p-10 gap-2">
          <div className="text-2xl font-bold">Welcome Back</div>
          <div className="flex gap-1">
            Start your website in seconds. Don't have an account?{" "}
            <div className="text-blue-600 font-bold">Sign Up</div>
          </div>
          <div className="flex gap-10 py-5">
            <div className="flex flex-col gap-1">
              <div>Email</div>
              <input
                placeholder="name.company@gmail.com"
                className="border-2 border-slate-400 border-opacity-80 p-2 rounded-lg"
              ></input>
            </div>
            <div className="flex flex-col gap-1">
              <div>Password</div>
              <input
                placeholder="**********"
                className="border-2 border-slate-400 border-opacity-80 p-2 rounded-lg"
              ></input>
            </div>
          </div>
          <div className="flex w-full items-center gap-5">
            <div className="w-full h-[2px] bg-slate-400 "></div>
            <div className="w-fit">or</div>
            <div className="w-full h-[2px] bg-slate-400 "></div>
          </div>
          <div className="border-2 border-slate-400 border-opacity-80 p-2 rounded-lg w-full text-center cursor-pointer">
            <a href="http://localhost:3000/auth/google">
              <div className="flex justify-center gap-2 items-center">
                <FcGoogle size={20} />
                Sign in with Google{" "}
              </div>
            </a>
          </div>
          <div className="flex justify-between w-full py-2">
            <div className="flex gap-1 items-center">
              <input type="checkbox" className="w-3 h-3"></input>
              <div className="text-sm">Remember me</div>
            </div>
            <div className="text-blue-600 text-sm font-bold">
              Forgot password?
            </div>
          </div>
          <div className="bg-blue-600 p-2 rounded-lg w-full text-center">
            <div className="flex justify-center gap-2 items-center text-white">
              Sign in to your account
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
