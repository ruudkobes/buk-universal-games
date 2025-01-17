﻿namespace Buk.UniversalGames.Data.Models.Matches
{
    public class MatchListItem
    {
        public int MatchId { get; set; }
        public int GameId { get; set; }
        public string AddOn { get; set; }
        public int Team1Id { get; set; }
        public string Team1 { get; set; }
        public int Team2Id { get; set; }
        public string Team2 { get; set; }
        public string Start { get; set; }
        public int WinnerId { get; set; }
        public string Winner { get; set; }
    }
}
