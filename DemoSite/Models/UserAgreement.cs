using NPoco;
using Umbraco.Cms.Infrastructure.Persistence.DatabaseAnnotations;

namespace DemoSite.Models
{
    [TableName("playmakerUserAgreement")]
    [PrimaryKey("Id", AutoIncrement = true)]
    [ExplicitColumns]
    public class UserAgreement
    {
        [PrimaryKeyColumn]
        [Column("Id")]
        public int Id { get; set; }

        [Column("UserId")]
        public int UserId { get; set; }

        [Column("Email")]
        public string? Email { get; set; }

        [Column("TourName")]
        public string TourName { get; set; }

        [Column("LastUpdated")]
        public DateTime LastUpdated { get; set; }
    }
}
