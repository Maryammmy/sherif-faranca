import { MoveLeft } from "lucide-react";
import Link from "next/link";

function FavoriteTrainingHeader() {
  return (
    <div className="flex justify-between items-center gap-2 text-gray-700 pb-5">
      <Link href="/my-fit">
        <MoveLeft className="size-6" />
      </Link>
      <header className="flex-1 flex justify-center">
        <h1 className="font-bold text-lg sm:text-2xl">My Favorite Training</h1>
      </header>
    </div>
  );
}

export default FavoriteTrainingHeader;
