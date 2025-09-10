import { MoveLeft } from "lucide-react";
import { Link } from "@/src/i18n/navigation";

function Header() {
  return (
    <div className="flex items-center justify-between gap-5 text-gray-700">
      <Link href="/">
        <MoveLeft className="sm:size-10" />
      </Link>
      <header className="flex-grow text-center text-lg sm:text-4xl font-bold">
        <h1>About My Workouts</h1>
      </header>
    </div>
  );
}

export default Header;
