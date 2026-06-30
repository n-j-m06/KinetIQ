import { useState } from "react";
import { User, Mail, Lock, CheckCircle, XCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";

import { register } from "../../api/auth";

export default function SignupForm() {

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordsMatch =
    confirmPassword.length > 0 &&
    password === confirmPassword;

  const passwordStrength = () => {

    if (password.length >= 8) return "Strong";

    if (password.length >= 5) return "Medium";

    if (password.length > 0) return "Weak";

    return "";

  };

  const handleSignup = async (e) => {

    e.preventDefault();

    if (!passwordsMatch) {

      alert("Passwords do not match.");

      return;

    }

    try {

      await register(name,email,password);

navigate("/login", {
    state: {
        success: "Account created successfully! Please sign in."
    }
});

    }

    catch (err) {

      alert(err.message);

    }

  };

  return (

    <form onSubmit={handleSignup} className="mt-6">

      <AuthInput
        icon={User}
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="mt-4">

        <AuthInput
          icon={Mail}
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

      </div>

      <div className="mt-4">

        <AuthInput
          icon={Lock}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

      </div>

      {password.length > 0 && (

        <div className="mt-2 flex justify-end">

          <span
            className={`text-xs font-medium ${
              passwordStrength() === "Strong"
                ? "text-green-400"
                : passwordStrength() === "Medium"
                ? "text-yellow-400"
                : "text-red-400"
            }`}
          >

            {passwordStrength()} Password

          </span>

        </div>

      )}

      <div className="mt-4">

        <AuthInput
          icon={Lock}
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

      </div>

      {confirmPassword.length > 0 && (

        <div className="mt-2 flex items-center gap-2">

          {passwordsMatch ? (
            <>
              <CheckCircle
                size={16}
                className="text-green-400"
              />

              <span className="text-xs text-green-400">

                Passwords Match

              </span>

            </>
          ) : (
            <>
              <XCircle
                size={16}
                className="text-red-400"
              />

              <span className="text-xs text-red-400">

                Passwords Do Not Match

              </span>

            </>
          )}

        </div>

      )}

      <AuthButton text="Create Account" />

      <div className="mt-7">

        <p className="text-center text-sm text-slate-400">

          Already have an account?

          <Link
            to="/login"
            className="
              ml-2
              font-semibold
              text-cyan-400
              hover:text-cyan-300
            "
          >

            Sign In

          </Link>

        </p>

      </div>

    </form>

  );

}