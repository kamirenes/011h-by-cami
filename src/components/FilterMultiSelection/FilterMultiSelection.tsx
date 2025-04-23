import { Col, Select, Typography } from "antd";
import { FilterMultiSelectionProps } from "./types";

function FilterMultipleSelection({
  defaultValue,
  options,
  onChange,
  placeHolder,
  style,
  title,
  titleSize,
}: FilterMultiSelectionProps) {
  return (
    <Col>
      <Typography.Title style={{ fontSize: titleSize ? titleSize : 12 }}>
        {title}
      </Typography.Title>
      <Select
        mode="multiple"
        allowClear
        style={style}
        placeholder={placeHolder}
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
      />
    </Col>
  );
}

export default FilterMultipleSelection;
