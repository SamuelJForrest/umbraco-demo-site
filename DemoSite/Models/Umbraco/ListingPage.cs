using Umbraco.Cms.Core.Models.PublishedContent;

namespace Umbraco.Cms.Web.Common.PublishedModels
{
	public partial class ListingPage
	{
		public IEnumerable<IPublishedContent> ChildPages => Children.OfType<IPublishedContent>().Where(x => x.IsPublished());
	}
}
