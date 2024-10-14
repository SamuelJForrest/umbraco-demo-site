using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Strings;

namespace DemoSite.Models.ViewModels
{
    public class ListItemViewModel
    {
        public string Title { get; set; }
        public IHtmlEncodedString? Content { get; set; }
        public string? Link { get; set; }
    }
}
