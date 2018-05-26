namespace WebTool2.Repository
{
    using Nest;

    public static class QueryHelper
    {
        public static T UsePinyinAnalyzer<T>(this T query)
            where T : FieldNameQueryBase
        {
            query.Field = $"{query.Field.Name}.pinyin";

            return query;
        }
    }
}
