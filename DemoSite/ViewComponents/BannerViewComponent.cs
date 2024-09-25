using DemoSite.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Strings;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Web.Common.PublishedModels;

namespace DemoSite.ViewComponents
{
    public class BannerViewComponent : ViewComponent
    {
        private readonly IUmbracoContextAccessor _umbracoContextAccessor;
        public BannerViewComponent(IUmbracoContextAccessor umbracoContextAccessor)
        {
            _umbracoContextAccessor = umbracoContextAccessor;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            if (!_umbracoContextAccessor.TryGetUmbracoContext(out var umbracoContext) || umbracoContext == null)
            {
                return Content(string.Empty);
            }

            IPublishedContent? currentPage = umbracoContext.PublishedRequest?.PublishedContent;

            if (currentPage != null && currentPage is not IBannerProperties)
            {
                return Content(string.Empty);
            }

            BannerViewModel banner = new BannerViewModel
            {
                Title = currentPage.Value<string>("bannerTitle"),
                Content = currentPage.Value<IHtmlEncodedString?>("bannerContent"),
                Link = currentPage.Value<Link?>("bannerLink")
            };

            return View(banner);
        }
    }
}
