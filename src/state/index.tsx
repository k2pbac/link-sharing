import { create } from "zustand";
import linkTypes from "../link-types.json";
import { Link, userLink } from "@/interfaces";

import { Profile } from "@/interfaces";

interface MediaState {
  profile: Profile;
  linkTypes: {
    [key: string]: Link;
  };
}

const useMediaStore = create<MediaState>()((set) => ({
  linkTypes: linkTypes,
  profile: { name: "test", email: "test@test.com" },
}));

export default useMediaStore;
