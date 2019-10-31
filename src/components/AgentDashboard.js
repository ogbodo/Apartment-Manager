import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { MDBCol } from "mdbreact";
import { Redirect, Route, Link, NavLink } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Card } from "reactstrap";

import Price from "./Apartment/Price";

/**Dashboard Icons */
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

/**Components */
import { AuthenticatedUser } from "../components/AppContext";
import Address from "../components/Apartment/Address";

function DashBoard(props) {
  // const [user] = useContext(AuthenticatedUser);
  // console.log(user);
  const user = {
    fullName: "Izuchukwu Matthias",
    sex: "Female",
    phone: "08136503501",
    email: "izuchukwu@gmail.com",
    Address: "opposite police check point Nyanya",
    apartmentsInfo: "apartmentID"
  };

  const dashboardContent = [
    {
      title: "Post a Property",
      description: "Post as many property as you have",
      icon: <PostProperty />,
      path: "/agent/post-property"
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

  const Agent = () =>
    dashboardContent.map((item, index) => (
      <DashboardCard
        key={index}
        path={item.path || "/"}
        title={item.title}
        description={item.description}
        icon={item.icon}
      />
    ));
  const { path } = props.match;
  return (
    <Row className="container-fluid " style={{ height: "1020px" }}>
      <MDBCol md="3">
        <Master user={user} />
      </MDBCol>
      <MDBCol md="9">
        <div style={{ marginLeft: "30px" }}>
          <Route exact path={`${path}/`} component={Agent} />
          <Route exact path={`${path}/post-property`} component={Price} />
        </div>
      </MDBCol>
    </Row>
  );
}

function Master({ user, navigation }) {
  const [buttonState, setButtonState] = useState({
    active: false,
    whichBnt: ""
  });
  const adminMenu = [
    {
      title: "Dashboard",
      icon: <IconDashBoard />,
      path: "/agent"
    },
    {
      title: "Post a Property",
      icon: <IconPostProperty />,
      path: "/agent/post-property"
    },
    {
      title: "My Listings",
      icon: <IconMyListings />,
      path: "/agent/my-listing"
    },
    {
      title: "Clients Requests",
      icon: <IconMyListings />,
      path: "/agent/interested-occupants"
    },

    {
      title: "My Tools and Statistics",
      icon: <IconToolsAndStatistics />,
      path: "/agent/stat"
    },
    {
      title: "My Messages",
      icon: <IconMyMessages />,
      path: "/agent/message"
    },
    {
      title: "My Profile",
      icon: <IconAvater />,
      path: "/agent/profile"
    },
    {
      title: "Logout",
      icon: <Logout />,
      path: "/agent/logout"
    }
  ];

  const titles = adminMenu.map((menu, index) => {
    return (
      <NavLink
        to={menu.path || "/"}
        activeClassName=" active"
        exact
        key={index}
      >
        <ListGroupItem>
          {menu.icon} {menu.title}
        </ListGroupItem>
      </NavLink>
    );
  });

  // const titles = adminMenu.map((menu, index) => {
  //   const menuName = menu.title.replace(" ", "");

  //   return (
  //     <Link to={menu.path || "/"}>
  //       <ListGroupItem
  //         key={index}
  //         name={`master-${menuName}`}
  //         onClick={() => toggle(`master-${menuName}`)}
  //         className={getClassName(`master-${menuName}`)}
  //       >
  //         {menu.icon} {menu.title}
  //       </ListGroupItem>
  //     </Link>
  //   );
  // });

  return (
    <div>
      <Card>
        <div style={{ textAlign: "center" }}>
          <Avater />
          <p
            style={{
              marginTop: "10px",
              color: "rgb(157, 6, 15)",
              fontWeight: "bolder"
            }}
          >
            {user.fullName}
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

function DashboardCard({ icon, title, description, path }) {
  return (
    <Link
      to={path}
      className="dashBoardCardStyle"
      style={{
        width: "300px",
        height: "300px",
        cursor: "pointer",
        float: "left",
        margin: "10px",
        color: "#000"
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
            boxShadow: "1px 2px 5px #eee"
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
    </Link>
  );
}
export default DashBoard;
