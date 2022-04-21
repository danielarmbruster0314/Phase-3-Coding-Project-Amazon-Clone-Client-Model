import React from "react";
import { Button, Layout } from "antd";
import { useLocation } from "react-router";
import './Categories.css';

const { Sider, Content } = Layout;

const Categories = () => {
  const { state: category } = useLocation();

  return (
    <>
      <div className="container">
        <div className="results_header">
          <span>Showing Poducts for </span>
          <span className="category">"{category}"</span>
        </div>

        <Layout>
          <Sider width="340px" theme="light" style={{ padding: "25px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
           
            
            <Button className="login">Apply Filters</Button>
            </div>
          </Sider>

          <Content
            theme="light"
            style={{ padding: "35px", backgroundColor: "white" }}
          >
            <h1 style={{fontSize:"30px"}}>RESULTS</h1>
          </Content>
        </Layout>

        
      </div>
    </>
  );
};

export default Categories;