using Umbraco.Cms.Core.Sections;

namespace DemoSite.Infrastructure
{
	public class UserGuidesSection : ISection
	{
		public string Alias => "userGuides";
		public string Name => "User Guides";
	}
}
