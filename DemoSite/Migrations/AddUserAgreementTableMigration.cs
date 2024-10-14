using DemoSite.Schema;
using Microsoft.AspNetCore.Http.HttpResults;
using Umbraco.Cms.Infrastructure.Migrations;

namespace DemoSite.Migrations
{
    public class AddUserAgreementTableMigration : MigrationBase
    {
        public AddUserAgreementTableMigration(IMigrationContext context) : base(context)
        {
        }

        protected override void Migrate()
        {
            Logger.LogDebug("Running migration {MigrationStep}", "AddUserAgreementTable");

            if (TableExists("playmakerUserAgreement") == false)
            {
                Create.Table<UserAgreementSchema>().Do();
            }
            else
            {
                Logger.LogDebug("The database table {DbTable} already exists, skipping", "UserAgreement");
            }
        }
    }
}
