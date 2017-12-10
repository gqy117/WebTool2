using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AdvancedPeopleDashboard.Controllers
{
    [Route("api/[controller]")]
    public class TeamCityController : Controller
    {
        private IList<Build> Builds = new List<Build>
        {
            new Build { BuildId = "DCEMAIN", BuildStatus = "Successful", BuildName = "DCE Main", LastUpdated = DateTime.Now },
            new Build { BuildId = "DCEUNITTESTS", BuildStatus = "Successful", BuildName = "DCE Unit Tests", LastUpdated = DateTime.Now },
            new Build { BuildId = "DCEPOSTMAN", BuildStatus = "Successful", BuildName = "DCE Postman", LastUpdated = DateTime.Now },
            new Build { BuildId = "ADVANCEDMAIN", BuildStatus = "Successful", BuildName = "Advanced Main", LastUpdated = DateTime.Now },
        };

        [HttpGet("[action]")]
        public Build Build(string buildId)
        {
            return Builds.SingleOrDefault(x => x.BuildId == buildId);
        }
    }
}
