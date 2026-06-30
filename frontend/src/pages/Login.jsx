import LoginBackground from "../components/auth/LoginBackground";
import LoginCard from "../components/auth/LoginCard";

export default function Login() {
  return (
    <div
  className="
    relative
    min-h-screen
    overflow-y-auto
    overflow-x-hidden
  "
>

      <LoginBackground />

      <div
  className="
    relative
    z-20

    flex

    min-h-screen

    items-center
    justify-end

    px-8
    md:px-16
    xl:px-28

    py-12
  "
>

        <LoginCard />

      </div>

    </div>
  );
}