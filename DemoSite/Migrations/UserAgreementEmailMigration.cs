using Umbraco.Cms.Infrastructure.Migrations;

namespace DemoSite.Migrations
{
    public class UserAgreementEmailMigration : MigrationBase
    {
        public UserAgreementEmailMigration(IMigrationContext context) : base(context)
        { }

        protected override void Migrate()
        {
            Logger.LogInformation("Running migration {MigrationStep}", "AddUserAgreementEmail");

            if (TableExists("playmakerUserAgreement") == true)
            {
                if (!ColumnExists("playmakerUserAgreement", "Email"))
                {
                    Alter.Table("playmakerUserAgreement").AddColumn("Email").AsString().Nullable().Do();
                }
            }
            else
            {
                Logger.LogWarning("The database table {DbTable} already exists, skipping", "playmakerUserAgreement");
            }
        }
    }
}
