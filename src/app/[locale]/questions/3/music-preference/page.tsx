import MusicPreferenceComponent from "@/src/components/questions/3/music-preference";
import { getMusicGenresAPI } from "@/src/services/mutations/questions";

async function MusicPreference() {
  const musicPreferences = await getMusicGenresAPI();
  return <MusicPreferenceComponent musicPreferences={musicPreferences} />;
}

export default MusicPreference;
