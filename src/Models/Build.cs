using System;

namespace Models
{
    public class Build
    {
        public string BuildId { get; set; }
        public string BuildName { get; set; }
        public string BuildStatus { get; set; }
        public DateTime LastUpdated { get; set; }
    }
}