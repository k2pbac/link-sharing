import { create } from "zustand";
// import data from "../../data.json";
// import { CardDetails } from "@/interfaces";

interface Filter {
  search: string;
  page: string;
}

interface MediaState {
  data: [];
}

const useMediaStore = create<MediaState>()((set) => ({
  data: [],
}));

export default useMediaStore;
