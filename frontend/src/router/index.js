import { createRouter, createWebHashHistory } from "vue-router";
import Login from "@/pages/LoginPage.vue";
import LeagueList from "@/pages/LeagueList.vue";
import MatchList from "@/pages/MatchList.vue";
import GameInfo from "@/pages/GameInfo.vue";
import GameInfoDetail from "@/pages/GameInfoDetail.vue";
import ScanResult from "@/pages/ScanResult.vue";
import ScanProcessing from "@/pages/ScanProcessing.vue";
import Map from "@/pages/Map.vue";
import AdminGame from "@/pages/AdminGame.vue";
import AdminLeagueStatus from "@/pages/AdminLeagueStatus.vue";
import AdminSelectLeague from "@/pages/AdminSelectLeague.vue";
import AdminGames from "@/pages/AdminGames.vue";
import AdminMatchListGame from "@/pages/AdminMatchListGame.vue";
import AdminMap from "@/pages/AdminMap.vue";
import store from '@/store'

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    props: true
  },
  {
    path: "/start/:code",
    redirect: { name: 'LeagueList' }
  },
  {
    path: "/admin/league-status",
    name: "AdminLeagueStatus",
    component: AdminLeagueStatus,
    props: true
  },
  {
    path: "/admin/leagues",
    name: "AdminSelectLeague",
    component: AdminSelectLeague,
    props: true
  },
  {
    path: "/admin/games",
    name: "AdminGames",
    component: AdminGames,
    props: true
  },
  {
    path: "/admin/matches",
    name: "AdminMatchListGame",
    component: AdminMatchListGame,
    props: true
  },
  {
    path: "/admin/matches/:match",
    name: "AdminGame",
    component: AdminGame,
    props: true
  },
  {
    path: "/admin/games/:game",
    name: "AdminGameInfoDetail",
    component: GameInfoDetail,
    props: true
  },
  {
    path: "/admin/map",
    name: "AdminMap",
    component: AdminMap,
  },
  {
    // TODO: Google Docs and QR code example are contradictive, which one is correct?
    path: "/scan/:stickerCode",
    name: "ScanProcessing1",
    component: ScanProcessing,
  },
  {
    path: "/sticker/:stickerCode",
    name: "ScanProcessing2",
    component: ScanProcessing,
  },
  {
    path: "/:code/sticker-scan-result",
    name: "ScanResult",
    component: ScanResult,
    props: true
  },
  {
    path: "/league-status",
    name: "LeagueList",
    component: LeagueList,
  },
  {
    path: "/matches",
    name: "MatchList",
    component: MatchList,
  },
  {
    path: "/games",
    name: "GameInfo",
    component: GameInfo,
  },
  {
    path: "/games/:game",
    name: "GameInfoDetail",
    component: GameInfoDetail,
    props: true
  },
  {
    path: "/map",
    name: "Map",
    component: Map,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  let nextOptions = null;

  if (to.params.stickerCode) {
    store.commit('setScanning', { handlingURL: true, stickerCode: to.params.stickerCode })
  }

  next(nextOptions)
})


export default router;
