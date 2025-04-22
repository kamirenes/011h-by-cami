import { Button, Card, Dropdown, Layout, Row } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import useComponent from "./useComponent";
import FilterMultipleSelection from "../../components/FilterMultiSelection/FilterMultiSelection";
import { ProductFilterEnum } from "./types";
import {
  ProductCategory,
  ProductColors,
  ProductMaterial,
  ProductOption,
  ProductSize,
  ProductType,
} from "../../constants/products";

function PrincipalLayout() {
  const {
    categoryOptions,
    colorOptions,
    materialOptions,
    optionsOptions,
    pageHeight,
    productListFiltered,
    sizeOptions,
    typeOptions,
    onFilterChange,
  } = useComponent();

  const { Content, Header, Sider } = Layout;

  return (
    <Layout
      style={{
        minHeight: pageHeight,
        height: '100%',
      }}
    >
      <Header style={{ background: "black" }}>
        <Dropdown>
          <Button icon={<SettingOutlined />} type="text" />
        </Dropdown>
      </Header>
      <Layout style={{ height: '100%'}}>
        <Sider style={{ background: "blue" }}></Sider>
        <Layout>
          <Content style={{ padding: 16 }}>
            <Row>
              <FilterMultipleSelection
              style={{width: 300, marginRight: 16, marginBottom: 16}}
                placeHolder="Select categories"
                options={categoryOptions}
                onChange={(value) =>
                  onFilterChange(
                    ProductFilterEnum.CATEGORY,
                    value as ProductCategory[]
                  )
                }
              />
              <FilterMultipleSelection
              style={{width: 300, marginRight: 16, marginBottom: 16}}
                placeHolder="Select colors"
                options={colorOptions}
                onChange={(value) =>
                  onFilterChange(
                    ProductFilterEnum.COLOR,
                    value as ProductColors[]
                  )
                }
              />
              <FilterMultipleSelection
              style={{width: 300, marginRight: 16, marginBottom: 16}}
                placeHolder="Select materials"
                options={materialOptions}
                onChange={(value) =>
                  onFilterChange(
                    ProductFilterEnum.MATERIAL,
                    value as ProductMaterial[]
                  )
                }
              />
              {/* <FilterMultipleSelection
                options={optionsOptions}
                onChange={(value) => onFilterChange(ProductFilterEnum.OPTIONS, value as ProductOption[])}
              /> */}
              <FilterMultipleSelection
                placeHolder="Select sizes"
              style={{width: 300, marginRight: 16, marginBottom: 16}}
              options={sizeOptions}
                onChange={(value) =>
                  onFilterChange(ProductFilterEnum.SIZE, value as ProductSize[])
                }
              />
              <FilterMultipleSelection
                placeHolder="Select types"
              style={{width: 300, marginRight: 16, marginBottom: 16}}
                options={typeOptions}
                onChange={(value) =>
                  onFilterChange(ProductFilterEnum.TYPE, value as ProductType[])
                }
              />
            </Row>
            <Row>
            {productListFiltered.map((product) => {
              return <Card style={{width: 200, height: 250, marginRight: 16, marginBottom: 16, alignItems: 'center',  display: 'flex'}}>
                <h3>{product.name}</h3>
                  <div style={{ display: 'flex' , flexDirection: 'row', alignItems: 'center', marginTop: -20}}>
                    <h4>Category:</h4>
                  <p style={{ marginLeft: 8}}>{product.category}</p>
                  </div>
                  <div style={{ display: 'flex' , flexDirection: 'row', alignItems: 'center', marginTop: -20}}>
                    <h4>Color:</h4>
                  <p style={{ marginLeft: 8}}>{product.color}</p>
                  </div>
                  <div style={{ display: 'flex' , flexDirection: 'row', alignItems: 'center', marginTop: -20}}>
                    <h4>Material:</h4>
                  <p style={{ marginLeft: 8}}>{product.material}</p>
                  </div>
                  <div style={{ display: 'flex' , flexDirection: 'row', alignItems: 'center', marginTop: -20}}>
                    <h4>Size:</h4>
                  <p style={{ marginLeft: 8}}>{product.size}</p>
                  </div>
              </Card>;
            })}
            </Row>
            
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default PrincipalLayout;
