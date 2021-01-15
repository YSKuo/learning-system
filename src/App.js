import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { Layout } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./containers/Routes";
import { useDispatch } from "react-redux";
import { getMe } from "./redux/reducers/userReducer";

const { Content } = Layout;
const AntLayout = styled(Layout)`
  min-height: 100vh;
`;

function App() {
  console.log("render app");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  return (
    <Router>
      <AntLayout>
        <Header />
        <Content>
          {/* Routes */}
          <Routes />
        </Content>
        <Footer />
      </AntLayout>
    </Router>
  );
}

export default App;
