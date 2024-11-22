using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.Dashboards;

namespace DemoSite.Infrastructure
{
	[Weight(50)]
	public class UserGuidesDashboard : IDashboard
	{
		public string Alias => "userGuidesDashboard";
		public string[] Sections => new[]
		{
			"userGuides"
		};
		public string View => "/App_Plugins/UserGuides/user-guides-dashboard.html";
		public IAccessRule[] AccessRules => new IAccessRule[]
		{
			new AccessRule {Type = AccessRuleType.Grant, Value = Constants.Security.AdminGroupAlias}
		};
	}

	[Weight(100)]
	public class UserGuidesHelpDashboard: IDashboard
	{
		public string Alias => "userGuidesHelpDashboard";
		public string[] Sections => new[]
		{
			"userGuides"
		};
		public string View => "/App_Plugins/UserGuides/user-guides-dashboard.html";
		public IAccessRule[] AccessRules => new IAccessRule[]
		{
			new AccessRule {Type = AccessRuleType.Grant, Value = Constants.Security.AdminGroupAlias}
		};
	}
}
