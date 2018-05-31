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

        public static T UseStandardAnalyzer<T>(this T query)
            where T : FieldNameQueryBase
        {
            query.Field = $"{query.Field.Name}.standard";

            return query;
        }

        public static Field ToPinyin(this Field field)
        {
            field = new Field($"{field.Name}.pinyin");

            return field;
        }

        public static Field ToChinese(this Field field)
        {
            field = new Field($"{field.Name}.standard");

            return field;
        }
    }
}