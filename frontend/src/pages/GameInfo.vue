<template>
  <UserPageLayout>
    <PointsAndStickers
      :points="teamStatus?.status?.points"
      :stickers="teamStatus?.status?.stickers"
      :refresh="refresh"
      :loading="$store.state.gamesLoading"
    />

    <h2>Games</h2>

    <GamesList :games="$store.state.games" :loading="$store.state.gamesLoading" @clicked="gameClicked"></GamesList>
  </UserPageLayout>
</template>

<script>
import UserPageLayout from "@/components/UserPageLayout.vue";
import PointsAndStickers from "@/components/PointsAndStickers.vue";
import GamesList from "@/components/GamesList.vue";

export default {
  name: "GameInfo",
  components: { UserPageLayout, PointsAndStickers, GamesList },
  created() {
    this.$store.dispatch("getGames");

    if (Object.keys(this.$store.state.teamStatus).length === 0) {
      this.refresh();
    }
  },
  methods: {
    async refresh() {
      this.$store.commit("setGamesLoading", true);
      await this.$store.dispatch("getTeamStatus", true,);
      this.$store.commit("setGamesLoading", false);
    },
    gameClicked(game) {
      this.$router.push({
        name: "GameInfoDetail",
        params: {
          game: game.id,
        },
      });
    },
  },
  computed: {
    teamStatus() {
      return this?.$store.state.teamStatus;
    },
  },
};
</script>

<style scoped>
.banner {
  width: 100%;
  padding: 2em;
  border-radius: 1em;
  margin: 2em auto;
  background-color: var(--dark);
  color: var(--green);
}
</style>
