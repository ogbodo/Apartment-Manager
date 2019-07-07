import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { MDBCol } from "mdbreact";

import { Row } from "react-bootstrap";
import { Card } from "reactstrap";
import { ReactComponent as PostProperty } from "../assets/images/upload.svg";
import { ReactComponent as Avater } from "../assets/images/avater.svg";
import { ReactComponent as MyLeads } from "../assets/images/mylead.svg";
import { ReactComponent as MyMessages } from "../assets/images/mymessages.svg";
import { ReactComponent as MyListings } from "../assets/images/mylistings.svg";
import { ReactComponent as ToolsAndStatistics } from "../assets/images/tools_and_statistics.svg";

import { ReactComponent as IconPostProperty } from "../assets/images/menu-icons/upload.svg";
import { ReactComponent as IconAvater } from "../assets/images/menu-icons/avater.svg";
import { ReactComponent as IconMyMessages } from "../assets/images/menu-icons/mymessages.svg";
import { ReactComponent as IconMyListings } from "../assets/images/menu-icons/mylistings.svg";
import { ReactComponent as IconDashBoard } from "../assets/images/menu-icons/dashboard.svg";
import { ReactComponent as IconToolsAndStatistics } from "../assets/images/menu-icons/tools_and_statistics.svg";
import { ReactComponent as Logout } from "../assets/images/menu-icons/logout.svg";

function DashBoard() {
  const dashboardContent = [
    {
      title: "Post a property",
      description: "Post as many property as you have",
      icon: <PostProperty />
    },
    {
      title: "My Leads",
      description: "See your leads breakdown",
      icon: <MyLeads />
    },
    {
      title: "My Listings",
      description: "Push-up, Feature, Renew and Edit your listings",
      icon: <MyListings />
    },
    {
      title: "Clients Requests",
      description: "View Contacts and get Free Leads",
      icon: <MyLeads />
    },
    {
      title: "My Profile",
      description: "View and Edit your Profile Information",
      icon: <Avater />
    },
    {
      title: "My Tools and Statistics",
      description: "Understand how your tools affect your leads",
      icon: <ToolsAndStatistics />
    },
    {
      title: "My Messages",
      description: "Get immediate promo, news and inbox messages",
      icon: <MyMessages />
    }
  ];
  return (
    <div>
      <Row className="container-fluid " style={{ height: "1000px" }}>
        <MDBCol md="3">
          <Master />
        </MDBCol>
        <MDBCol md="9">
          <div style={{ marginLeft: "30px" }}>
            {dashboardContent.map((item, index) => (
              <DashboardCard
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </MDBCol>
      </Row>
    </div>
  );
}

function Master() {
  const adminMenu = [
    {
      title: "Dashboard",
      icon: <IconDashBoard />
    },
    { title: "Post a property", icon: <IconPostProperty /> },
    {
      title: "My Listings",
      icon: <IconMyListings />
    },
    {
      title: "Clients Requests",
      icon: <IconMyListings />
    },

    {
      title: "My Tools and Statistics",
      icon: <IconToolsAndStatistics />
    },
    {
      title: "My Messages",
      icon: <IconMyMessages />
    },
    {
      title: "My Profile",
      icon: <IconAvater />
    },
    {
      title: "Logout",
      icon: <Logout />
    }
  ];

  const titles = adminMenu.map((menu, index) => (
    <ListGroupItem key={index}>
      {menu.icon} {menu.title}
    </ListGroupItem>
  ));

  return (
    <div>
      <Card>
        <div style={{ textAlign: "center" }}>
          <Avater />
          <p
            style={{
              marginTop: "10px",
              color: "#9d060f",
              fontWeight: "bolder"
            }}
          >
            Izukerberg
          </p>
        </div>
        <ListGroup
          className="dashboardMenu"
          style={{
            marginBottom: "300px",
            cursor: "pointer"
          }}
        >
          {titles}
        </ListGroup>
      </Card>
    </div>
  );
}

function DashboardCard({ icon, title, description }) {
  return (
    <div
      className="dashBoardCardStyle"
      style={{
        width: "300px",
        height: "300px",
        cursor: "pointer",
        float: "left",
        margin: "10px"
      }}
    >
      <div>
        <div
          id="dashBoardCard"
          style={{
            borderTop: "solid 10px #bcbcbc"
          }}
        />
        <div
          style={{
            width: "300px",
            height: "300px",
            cursor: "pointer",
            paddingLeft: "20px",
            paddingTop: "20px",
            boxShadow: "1px 2px 5px #9d060f"
          }}
        >
          <div
            width="30px"
            style={{ textAlign: "center" }}
            height="150px"
            alt={title}
          >
            {icon}
          </div>
          <h2
            style={{
              textAlign: "center",
              color: "#9d060f",
              fontWeight: "bold"
            }}
          >
            {title}
          </h2>

          <strong>{description}</strong>
        </div>
      </div>
    </div>
  );
}
export default DashBoard;
