import { create } from "zustand";
import linkTypes from "../link-types.json";
import { Link } from "@/interfaces";

interface MediaState {
  linkTypes: Link[];
}

const useMediaStore = create<MediaState>()((set) => ({
  linkTypes: linkTypes,
}));

export default useMediaStore;
