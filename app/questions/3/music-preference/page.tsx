import MusicPreferenceComponent from "@/components/questions/3/music-preference";
import { getMusicGenresAPI } from "@/services/questions";

async function MusicPreference() {
  const musicPreferences = await getMusicGenresAPI();
  return <MusicPreferenceComponent musicPreferences={musicPreferences} />;
}

export default MusicPreference;
