export interface SearchText {
    id: string;
    className?: string;
    iconClassName?: string;
    iconDivClassName?: string;
    fieldName: string;
    fieldValue?: string;
    label: string;
    placeholder: string;
    isLast?: boolean;
    tooltip?: JSX.Element;
}
