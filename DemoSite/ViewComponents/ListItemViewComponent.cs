using DemoSite.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Strings;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Web.Common.PublishedModels;

namespace DemoSite.ViewComponents
{
    public class ListItemViewComponent : ViewComponent
    {
        private readonly IUmbracoContextAccessor _umbracoContextAccessor;
        public ListItemViewComponent(IUmbracoContextAccessor umbracoContextAccessor)
        {
            _umbracoContextAccessor = umbracoContextAccessor;
        }

        public async Task<IViewComponentResult> InvokeAsync(IPublishedContent page)
        {
            if (page == null)
            {
                return Content(string.Empty);
            }

            ListItemViewModel listItem = new ListItemViewModel
            {
                Title = page.Name,
                Content = page.Value<IHtmlEncodedString>("bannerContent"),
                Link = page.Url()
            };

            return View(listItem);
        }
    }
}
