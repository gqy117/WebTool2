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
            new Build { BuildId = "DCEMAIN", BuildName = "DCE Main", LastUpdated = DateTime.Now },
            new Build { BuildId = "DCEUNITTESTS", BuildName = "DCE Unit Tests", LastUpdated = DateTime.Now },
            new Build { BuildId = "DCEPOSTMAN", BuildName = "DCE Postman", LastUpdated = DateTime.Now },
            new Build { BuildId = "ADVANCEDMAIN", BuildName = "Advanced Main", LastUpdated = DateTime.Now },
        };

        private static int randomIndex = 0;
        private static IList<string> StatusList = new List<string>{ "Successful", "Failed" };

        [HttpGet("[action]")]
        public Build Build(string buildId)
        {
            var build = SetRandomStatus();

            return build.SingleOrDefault(x => x.BuildId == buildId);
        }

        private IEnumerable<Build> SetRandomStatus()
        {
            randomIndex = randomIndex == 0 ? 1 : 0;

            var build = Builds.Select(x =>
            {
                x.BuildStatus = StatusList[randomIndex];
                return x;
            });
            return build;
        }
    }
}
