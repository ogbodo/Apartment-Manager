import React, { useContext, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { MDBCol } from "mdbreact";
import { Route, Link, Redirect } from "react-router-dom";
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
import { AuthenticatedUser } from "../components/AppContext";
import Address from "../components/Apartment/Address";

function DashBoard() {
  const [user] = useContext(AuthenticatedUser);
  console.log(user);

  const dashboardContent = [
    {
      title: "Post a Property",
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
    <Row className="container-fluid " style={{ height: "1020px" }}>
      <MDBCol md="3">
        <Master user={user} />
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

    //    <AuthenticatedUser.Consumer>
    //    {userContext => (
    //      <div>

    //        <Row className="container-fluid " style={{ height: "1000px" }}>
    //          <MDBCol md="3">
    //            <Master />
    //          </MDBCol>
    //          <MDBCol md="9">
    //            <div style={{ marginLeft: "30px" }}>
    //              {dashboardContent.map((item, index) => (
    //                <DashboardCard
    //                  key={index}
    //                  title={item.title}
    //                  description={item.description}
    //                  icon={item.icon}
    //                />
    //              ))}
    //            </div>
    //          </MDBCol>
    //        </Row>
    //      </div>
    //    )}
    //  </AuthenticatedUser.Consumer>
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
      icon: <IconDashBoard />
    },
    {
      title: "Post a Property",
      icon: <IconPostProperty />,
      url: "/PostProperty"
    },
    {
      title: "My Listings",
      icon: <IconMyListings />,
      url: "/PostProperty"
    },
    {
      title: "Clients Requests",
      icon: <IconMyListings />,
      url: "/PostProperty"
    },

    {
      title: "My Tools and Statistics",
      icon: <IconToolsAndStatistics />,
      url: "/PostProperty"
    },
    {
      title: "My Messages",
      icon: <IconMyMessages />,
      url: "/PostProperty"
    },
    {
      title: "My Profile",
      icon: <IconAvater />,
      url: "/PostProperty"
    },
    {
      title: "Logout",
      icon: <Logout />,
      url: "/PostProperty"
    }
  ];

  function toggle(clickedButton) {
    setButtonState(oldState => {
      const active = !oldState.active;
      return { active, whichBnt: clickedButton };
    });
  }

  function getClassName(clickedButton) {
    if (buttonState.active && buttonState.whichBnt === clickedButton) {
      return " active";
    }
    return "";
  }

  const titles = adminMenu.map((menu, index) => {
    const menuName = menu.title.replace(" ", "");

    return (
      <ListGroupItem
        key={index}
        name={`master-${menuName}`}
        onClick={() => toggle(`master-${menuName}`)}
        className={getClassName(`master-${menuName}`)}
      >
        {menu.icon} {menu.title}
      </ListGroupItem>
    );
  });

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
      <div
        onClick={() => {
          // return <Route path="/Address" component={Address} />;
          // return <Link to="/short-rent">Short Rent</Link>;
          return <Redirect to="/Address" />;
        }}
      >
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
