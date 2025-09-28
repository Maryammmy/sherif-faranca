import Image from "@/src/components/ui/Image";

function WorkoutsCard() {
  return (
    <div className="p-4 rounded-2xl border space-y-2">
      <div className="relative w-full h-[200px] rounded-2xl overflow-hidden">
        <Image
          src="/workout.jpg"
          alt="workout"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        />
      </div>
      <div className="space-y-0.5">
        <div>
          <h2 className="sm:text-lg text-gray-700 font-bold">Jumping Jacks</h2>
        </div>
        <div className="flex justify-between items-center gap-5 text-secondary text-sm font-medium">
          <span>May 10</span>
          <span>Direction</span>
          <span>Calories</span>
        </div>
        <div className="flex justify-between items-center gap-5 text-secondary font-medium">
          <span>2.30AM</span>
          <span>20 Min</span>
          <span> 120 Calories</span>
        </div>
      </div>
    </div>
  );
}

export default WorkoutsCard;
