import React from "react";
import { Nav } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="text-center py-4 border-bottom border-secondary">EV Dashboard</h3>
      <Nav className="flex-column px-3 mt-4">
        <Nav.Link href="#overview" className="text-light my-2">Overview</Nav.Link>
        <Nav.Link href="#trends" className="text-light my-2">Trends</Nav.Link>
        <Nav.Link href="#distribution" className="text-light my-2">Distribution</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
