using DemoSite.Infrastructure;
using Umbraco.Cms.Core.Composing;

namespace DemoSite.Composers
{
	public class UserGuidesComposer : IComposer
	{
		public void Compose(IUmbracoBuilder builder)
		{
			builder.Sections().Append<UserGuidesSection>();
		}
	}
}
