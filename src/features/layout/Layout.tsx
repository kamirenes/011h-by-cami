import {
  Button,
  Card,
  Col,
  Dropdown,
  Layout,
  Row,
  Select,
  Typography,
} from "antd";
import {
  SettingOutlined,
  CheckCircleFilled,
  CloseCircleFilled,
} from "@ant-design/icons";
import useComponent from "./useComponent";
import FilterMultipleSelection from "../../components/FilterMultiSelection/FilterMultiSelection";
import { ProductFilterEnum } from "./types";
import {
  ProductCategory,
  ProductColors,
  ProductMaterial,
  ProductSize,
  ProductType,
} from "../../constants/products";

function PrincipalLayout() {
  const {
    categoryOptions,
    colorOptions,
    materialOptions,
    pageHeight,
    productListFiltered,
    sizeOptions,
    typeOptions,
    onFilterChange,
    onOrderChange,
    orderOptions,
  } = useComponent();

  const { Content, Header, Sider } = Layout;

  return (
    <Layout
      style={{
        minHeight: pageHeight,
        height: "100%",
      }}
    >
      <Header style={{ background: "black" }}>
        <Dropdown>
          <Button icon={<SettingOutlined />} type="text" />
        </Dropdown>
      </Header>
      <Layout style={{ height: "100%" }}>
        <Sider style={{ background: "blue" }}></Sider>
        <Layout>
          <Content style={{ padding: 16 }}>
            <Typography.Title style={{ fontSize: 18 }}>
              Filters
            </Typography.Title>
            <Row>
              <Col>
                <Typography.Title style={{ fontSize: 12 }}>
                  Categories
                </Typography.Title>
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
                />
              </Col>
              <Col>
                <Typography.Title style={{ fontSize: 12 }}>
                  Colors
                </Typography.Title>
                <FilterMultipleSelection
                  style={{ width: 300, marginRight: 16, marginBottom: 16 }}
                  placeHolder="Select colors"
                  options={colorOptions}
                  onChange={(value) =>
                    onFilterChange(
                      ProductFilterEnum.COLOR,
                      value as ProductColors[]
                    )
                  }
                />
              </Col>
              <Col>
                <Typography.Title style={{ fontSize: 12 }}>
                  Materials
                </Typography.Title>
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
                />
              </Col>
              <Col>
                <Typography.Title style={{ fontSize: 12 }}>
                  Sizes
                </Typography.Title>
                <FilterMultipleSelection
                  placeHolder="Select sizes"
                  style={{ width: 300, marginRight: 16, marginBottom: 16 }}
                  options={sizeOptions}
                  onChange={(value) =>
                    onFilterChange(
                      ProductFilterEnum.SIZE,
                      value as ProductSize[]
                    )
                  }
                />
              </Col>
              <Col>
                <Typography.Title style={{ fontSize: 12 }}>
                  Types
                </Typography.Title>
                <FilterMultipleSelection
                  placeHolder="Select types"
                  style={{ width: 300, marginRight: 16, marginBottom: 16 }}
                  options={typeOptions}
                  onChange={(value) =>
                    onFilterChange(
                      ProductFilterEnum.TYPE,
                      value as ProductType[]
                    )
                  }
                />
              </Col>
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
        </Layout>
      </Layout>
    </Layout>
  );
}

export default PrincipalLayout;
