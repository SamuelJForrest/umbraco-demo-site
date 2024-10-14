using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Web.Common.PublishedModels;

namespace DemoSite.Extensions
{
    public static class PublishedContentExtensions
    {
        public static HomePage? GetHomePage(this IPublishedContent publishedContent)
        {
            return publishedContent.AncestorOrSelf<HomePage>();
        }

        public static SiteRoot? GetSiteRoot(this IPublishedContent publishedContent)
        {
            return publishedContent.AncestorOrSelf<SiteRoot>();
        }
    }
}
