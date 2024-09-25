using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Strings;

namespace DemoSite.Models.ViewModels
{
    public class BannerViewModel
    {
        public string Title { get; set; }
        public IHtmlEncodedString? Content { get; set; }
        public Link? Link { get; set; }
    }
}
