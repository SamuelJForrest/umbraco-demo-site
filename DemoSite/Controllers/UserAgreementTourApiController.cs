using DemoSite.Composers;
using DemoSite.Models;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Infrastructure.Scoping;
using Umbraco.Cms.Web.Common.Controllers;

namespace DemoSite.Controllers
{
    public class UserAgreementTourApiController : UmbracoApiController
    {
        private readonly IScopeProvider _scopeProvider;
        private readonly ILogger<UserAgreement> _logger;
        public UserAgreementTourApiController(IScopeProvider scopeProvider, ILogger<UserAgreement> logger)
        {
            _scopeProvider = scopeProvider;
            _logger = logger;
        }

        [HttpPost]
        public IActionResult PostUserAgreement(UserAgreement userAgreement)
        {
            try
            {
                using var scope = _scopeProvider.CreateScope();
                scope.Database.Insert<UserAgreement>(userAgreement);
                scope.Complete();

                return Ok(new { message = "User agreement saved successfully." });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occured while saving the user agreement.");

                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
