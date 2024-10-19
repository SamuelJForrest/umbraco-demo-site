namespace DemoSite.Helpers
{
    public static class FlexibleBlockHelpers
    {
        public static string GetBlockMarginClass(DemoSite.Enums.FlexibleBlockMargin blockMargin)
        {
            return blockMargin switch
            {
                DemoSite.Enums.FlexibleBlockMargin.Small => "__smallmargin",
                DemoSite.Enums.FlexibleBlockMargin.Medium => "__mediummargin",
                DemoSite.Enums.FlexibleBlockMargin.Large => "__largemargin",
                _ => ""
            };
        }
    }
}
