using System.Text.RegularExpressions;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.Tour;

namespace DemoSite.Composers
{
    public class BackofficeToursComposer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            builder.TourFilters()
                .AddFilter(new BackOfficeTourFilter(pluginName: null, tourFileName: null, tourAlias: new Regex("^umbIntro", RegexOptions.IgnoreCase)));
        }
    }
}
