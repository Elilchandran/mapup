import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import DashboardContent from "./components/DashboardContent";
import ParticlesBackground from "./components/ParticlesBackground";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <ParticlesBackground />
      <Container fluid className="p-0">
        <Row className="m-0">
          <Col md={3} className="px-0">
            <Sidebar />
          </Col>
          <Col md={9} className="px-4">
            <DashboardContent />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
