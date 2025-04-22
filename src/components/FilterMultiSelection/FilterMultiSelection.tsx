import { Select } from "antd";
import { FilterMultiSelectionProps } from "./types";

function FilterMultipleSelection({ defaultValue, options, onChange, placeHolder, style }: FilterMultiSelectionProps) {
  return (
    <Select
      mode="multiple"
      allowClear
      style={style}
      placeholder={placeHolder}
      defaultValue={defaultValue}
      onChange={onChange}
      options={options}
    />
  );
}

export default FilterMultipleSelection;
