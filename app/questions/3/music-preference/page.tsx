import SelectMusicPreference from "@/components/questions/3/music-preference/SelectMusicPreference";
import Shared from "@/components/questions/Shared";

function MusicPreference() {
  return (
    <Shared
      progresses={[100, 100, 100]}
      title="What is best time for you to"
      coloredTitle="work out ?"
      content={<SelectMusicPreference />}
      backHref="/questions/3/workout-time"
      nextHref="/"
    />
  );
}

export default MusicPreference;
