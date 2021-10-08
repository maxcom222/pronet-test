import { createStore } from "vuex-smart-module";
import { sum } from "./modules/sum";

export const store = createStore(sum, {
  strict: process.env.NODE_ENV !== "production",
});
