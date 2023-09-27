import marketPage from "./marketPage";
import missionPage from "./missionPage";
import lineupPage from "./lineupPage";
import giftPage from "./giftPage";
import rankingPage from "./rankingPage";
import { AllMatchResult } from "../components/pageComponent/lineupComponent/chidComponent";

export const pages = [
  {
    path: "market",
    component: marketPage,
  },
  {
    path: "mission",
    component: missionPage,
  },
  {
    path: "lineup/*",
    component: lineupPage,
    children: {
      path: "allMatchResult",
      component: AllMatchResult,
    },
  },
  {
    path: "gift",
    component: giftPage,
  },
  {
    path: "ranking",
    component: rankingPage,
  },
];
