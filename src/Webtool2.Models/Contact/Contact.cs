namespace WebTool2.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Text;

    public class Contact
    {
        public string Name { get; set; }

        public string CardNo { get; set; }

        public string Descriot { get; set; }

        public string CtfTp { get; set; }

        [Key]
        public string CtfId { get; set; }

        public string Gender { get; set; }

        public string Birthday { get; set; }

        public string Address { get; set; }

        public string Zip { get; set; }

        public string Dirty { get; set; }

        public string District1 { get; set; }

        public string District2 { get; set; }

        public string District3 { get; set; }

        public string District4 { get; set; }

        public string District5 { get; set; }

        public string District6 { get; set; }

        public string FirstNm { get; set; }

        public string LastNm { get; set; }

        public string Duty { get; set; }

        public string Mobile { get; set; }

        public string Tel { get; set; }

        public string Fax { get; set; }

        public string EMail { get; set; }

        public string Nation { get; set; }

        public string Taste { get; set; }

        public string Education { get; set; }

        public string Company { get; set; }

        public string CTel { get; set; }

        public string CAddress { get; set; }

        public string CZip { get; set; }

        public string Family { get; set; }

        public string Version { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Globalization", "SA1300:ElementMustBeginWithUpperCaseLetter", Justification = "Auto-generated file")]
        public string id { get; set; }
    }
}
