import { Card, Col, Layout, Row, Select, Typography } from "antd";
import {
  CheckCircleFilled,
  CloseCircleFilled,
} from "@ant-design/icons";

import FilterMultipleSelection from "../../../components/FilterMultiSelection/FilterMultiSelection";
import useComponent from "./useComponent";
import { ProductFilterEnum } from "../../layout/types";
import { ProductCategory, ProductColors, ProductMaterial, ProductSize, ProductType } from "../../../constants/products";

function ProductsMainScreen() {
  const { Content } = Layout;

  const {
    categoryOptions,
    colorOptions,
    materialOptions,
    productListFiltered,
    sizeOptions,
    typeOptions,
    orderOptions,
    onFilterChange,
    onOrderChange,
  } = useComponent();
  return (
    <Content style={{ paddingLeft: 32, paddingTop: 24, paddingBottom: 24, paddingRight: 32 }}>
      <Typography.Title style={{ fontSize: 18 }}>Filters</Typography.Title>
      <Row>
        <FilterMultipleSelection
          style={{ width: 300, marginRight: 16, marginBottom: 16 }}
          placeHolder="Select categories"
          options={categoryOptions}
          onChange={(value) =>
            onFilterChange(
              ProductFilterEnum.CATEGORY,
              value as ProductCategory[]
            )
          }
          title="Categories"
        />
        <FilterMultipleSelection
          style={{ width: 300, marginRight: 16, marginBottom: 16 }}
          placeHolder="Select colors"
          options={colorOptions}
          onChange={(value) =>
            onFilterChange(ProductFilterEnum.COLOR, value as ProductColors[])
          }
          title="Colors"
        />
        <FilterMultipleSelection
          style={{ width: 300, marginRight: 16, marginBottom: 16 }}
          placeHolder="Select materials"
          options={materialOptions}
          onChange={(value) =>
            onFilterChange(
              ProductFilterEnum.MATERIAL,
              value as ProductMaterial[]
            )
          }
          title="Materials"
        />
        <FilterMultipleSelection
          placeHolder="Select sizes"
          style={{ width: 300, marginRight: 16, marginBottom: 16 }}
          options={sizeOptions}
          onChange={(value) =>
            onFilterChange(ProductFilterEnum.SIZE, value as ProductSize[])
          }
          title="Sizes"
        />
        <FilterMultipleSelection
          placeHolder="Select types"
          style={{ width: 300, marginRight: 16, marginBottom: 16 }}
          options={typeOptions}
          onChange={(value) =>
            onFilterChange(ProductFilterEnum.TYPE, value as ProductType[])
          }
          title="Types"
        />
        <Col>
          <Typography.Title style={{ fontSize: 12 }}>
            Order by size
          </Typography.Title>
          <Select
            allowClear
            style={{ width: 300, marginRight: 16, marginBottom: 16 }}
            placeholder="Select order by size"
            defaultValue={true}
            onChange={onOrderChange}
            options={orderOptions}
          />
        </Col>
      </Row>

      <Typography.Title style={{ fontSize: 18, marginBottom: 24 }}>
        Products
      </Typography.Title>
      <Row>
        {productListFiltered.map((product) => {
          return (
            <Card
              style={{
                width: 260,
                height: 330,
                marginRight: 16,
                marginBottom: 16,
                alignItems: "center",
                display: "flex",
              }}
            >
              <h3>{product.name}</h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: -20,
                }}
              >
                <h4>Category:</h4>
                <p style={{ marginLeft: 8 }}>{product.category}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: -20,
                }}
              >
                <h4>Color:</h4>
                <p style={{ marginLeft: 8 }}>{product.color}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: -20,
                }}
              >
                <h4>Material:</h4>
                <p style={{ marginLeft: 8 }}>{product.material}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: -20,
                }}
              >
                <h4>Size:</h4>
                <p style={{ marginLeft: 8 }}>{product.size}</p>
              </div>
              <div style={{ marginTop: -20 }}>
                <h4>Options:</h4>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: -20,
                  }}
                >
                  {Object.keys(product.options).map((item) => {
                    const key = item as keyof typeof product.options;
                    return (
                      <div
                        style={{
                          marginRight: 12,
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        <h5 style={{ marginBottom: 5 }}>{item}</h5>
                        {product.options[key] ? (
                          <CheckCircleFilled style={{ color: "green" }} />
                        ) : (
                          <CloseCircleFilled style={{ color: "red" }} />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          );
        })}
      </Row>
    </Content>
  );
}

export default ProductsMainScreen;