import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";

import { login } from "../../api/auth";

export default function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const data = await login(email, password);

localStorage.setItem("token", data.access_token);

// Fetch logged-in user's details
const me = await fetch("http://127.0.0.1:8000/auth/me", {
  headers: {
    Authorization: `Bearer ${data.access_token}`,
  },
});

const user = await me.json();

localStorage.setItem("userName", user.name);

navigate("/dashboard");

    } catch (err) {

      alert(err.message);

    }

  };

  return (

    <form onSubmit={handleLogin} className="mt-10">
      {location.state?.success && (
      <div
        className="
          mb-5
          rounded-xl
          border
          border-green-500/30
          bg-green-500/10
          p-3
          text-center
          text-sm
          text-green-400
        "
      >
        {location.state.success}
      </div>
    )}

      <AuthInput
        icon={Mail}
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="mt-5">

        <AuthInput
          icon={Lock}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

      </div>

      <div className="mt-8">
          <AuthButton text="Sign In" />
      </div>

      <div className="mt-6">

        <p className="text-center text-sm text-slate-400">

          New to KINETIQ?

          <Link
            to="/signup"
            className="
              ml-2
              font-semibold
              text-cyan-400
              hover:text-cyan-300
            "
          >

            Create Account

          </Link>

        </p>

      </div>

    </form>

  );

}