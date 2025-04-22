import { DefaultOptionType } from "antd/es/select";
import { CSSProperties } from "react";

export type FilterMultiSelectionProps = {
  placeHolder?: string;
  defaultValue?: string[] | null;
  options?: DefaultOptionType[];
  onChange?: (
    value: string[],
    option?: DefaultOptionType | DefaultOptionType[] | undefined
  ) => void;
  style?: CSSProperties;
};
