namespace WebTool2.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Microsoft.AspNetCore.Mvc;
    using WebTool2.Models;

    [Route("api/[controller]")]
    public class TeamCityController : Controller
    {
        private static readonly IList<string> StatusList = new List<string> { "Successful", "Failed" };
        private static int randomIndex = 0;

        private IList<Build> builds = new List<Build>
        {
            new Build { BuildId = "DCEMAIN", BuildName = "DCE Main", LastUpdated = DateTime.UtcNow },
            new Build { BuildId = "DCEUNITTESTS", BuildName = "DCE Unit Tests", LastUpdated = DateTime.UtcNow },
            new Build { BuildId = "DCEPOSTMAN", BuildName = "DCE Postman", LastUpdated = DateTime.UtcNow },
            new Build { BuildId = "ADVANCEDMAIN", BuildName = "Advanced Main", LastUpdated = DateTime.UtcNow },
        };

        [HttpGet("[action]")]
        public Build Build(string buildId)
        {
            var build = this.SetRandomStatus();

            return build.SingleOrDefault(x => x.BuildId == buildId);
        }

        private IEnumerable<Build> SetRandomStatus()
        {
            randomIndex = randomIndex == 0 ? 1 : 0;

            var build = this.builds.Select(x =>
            {
                x.BuildStatus = StatusList[randomIndex];
                return x;
            });
            return build;
        }
    }
}
