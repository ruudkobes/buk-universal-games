using Buk.UniversalGames.Api.Authorization;
using Buk.UniversalGames.Data.Models;
using Buk.UniversalGames.Interfaces;
using Buk.UniversalGames.Library.Enums;
using Buk.UniversalGames.Models;
using Microsoft.AspNetCore.Mvc;

namespace Buk.UniversalGames.Api.Controllers.Admin;

[ApiController]
[TeamType(TeamType.Admin,TeamType.SystemAdmin)]
[Route("{code}/Admin/[controller]")]
public class LeaguesController : ControllerBase
{
    private readonly ILogger<LeaguesController> _logger;
    private readonly ILeagueService _leagueService;
    private readonly IStatusService _statusService;

    public LeaguesController(ILogger<LeaguesController> logger, ILeagueService leagueService , IStatusService statusService)
    {
        _logger = logger;
        _leagueService = leagueService;
        _statusService = statusService;
    }

    [HttpGet]
    public ActionResult<List<League>> GetLeagues()
    {
        return _leagueService.GetLeagues();
    }

    [HttpGet("{leagueId}/Teams")]
    public ActionResult<List<Team>> GetTeams(int leagueId)
    {
        return _leagueService.GetTeams(leagueId);
    }

    [HttpGet("{leagueId}/Status")]
    public ActionResult<List<TeamStatus>> GetLeagueStatus(int leagueId)
    {
        return _statusService.GetLeagueStatus(leagueId);
    }
}