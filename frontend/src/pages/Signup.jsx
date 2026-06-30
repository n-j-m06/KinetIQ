import SignupBackground from "../components/auth/SignupBackground";
import SignupCard from "../components/auth/SignupCard";

export default function Signup() {
  return (
    <div className="relative h-screen overflow-hidden">

      <SignupBackground />

      <div
        className="
        relative
        z-20
        flex
        h-full
        items-center
        justify-end
        pr-28
        "
      >
        <SignupCard />
      </div>

    </div>
  );
}