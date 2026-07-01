import Navbar from "../components/dashboard/DashboardNavbar";
import Sidebar from "../components/dashboard/Sidebar";

export default function AppLayout({ children }) {
  return (
    <div
    className="
    relative

    min-h-screen

    overflow-hidden

    bg-[#030712]

    text-white
    "
>

    <div
        className="
        absolute

        left-[-250px]

        top-[-250px]

        h-[500px]

        w-[500px]

        rounded-full

        bg-cyan-500/10

        blur-[180px]
        "
    />

    <div
        className="
        absolute

        right-[-250px]

        bottom-[-250px]

        h-[500px]

        w-[500px]

        rounded-full

        bg-blue-500/10

        blur-[180px]
        "
    />

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main
          className="
            mt-[82px]
      flex-1
      p-4
      md:p-8
      lg:ml-[240px]
          "
        >
          {children}
        </main>

      </div>

    </div>
  );
}