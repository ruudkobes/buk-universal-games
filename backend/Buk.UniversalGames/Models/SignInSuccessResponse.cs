﻿namespace Buk.UniversalGames.Models
{
    public record SignInSuccessResponse(string Code, string Team, string Access, int? LeagueId, string? League);
}
