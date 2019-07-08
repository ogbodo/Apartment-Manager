import React, { useState } from "react";
import CarouselComponent from "./Caroulsel";
import { Container, Row } from "reactstrap";
/**TODO LATER WATCH MAX's VIDEO ON MEDIA QUERY AND USE MEDIA QUERY FOR RESPONSIVENESS */
function Layout() {
  return (
    <>
      <div>
        <div
          style={{ textAlign: "center" }}
          className="container-fluid banner-home "
        >
          <div className="container">
            <Row>
              <div className="col-12">
                <h1 className="headline-text title">Find Your Next Home!</h1>
              </div>
            </Row>{" "}
            <Row>
              <div className="col-12 ">
                <h4 className="sub-title">
                  Search for apartments for sale or rent in Nigeria
                </h4>
              </div>
            </Row>
            <Row>
              <div className="col-12">
                <ul className="smallMenu">
                  <li>Buy</li>
                  <li>Rent</li>
                  <li>Short Rent</li>
                </ul>
                <div>
                  <Search />
                </div>
              </div>
            </Row>
          </div>
        </div>
      </div>
      <Container>
        <h1
          style={{ textAlign: "center", fontFamily: "'Arsenal', sans-serif" }}
        >
          Featured Agents
        </h1>

        <CarouselComponent />
      </Container>
      <Container>
        <Row>
          <div className="flexes">
            <div style={{ marginLeft: "20px", marginBottom: "30px" }}>
              <h1
                className="title-dark"
                style={{ marginBottom: "10px", fontWeight: "bold" }}
              >
                About Us
              </h1>
              <h4
                className="briefDescription-dark"
                style={{ marginBottom: "10px" }}
              >
                ApartmentPro.ng formerly ToLet.com.ng is a world-class Nigerian
                property portal powered by the consolidation of Propertypro.ng
                and Jumia House Nigeria (formerly Lamudi) which was acquired by
                Propertypro.ng in October 2017. The name change reflects the
                company's broader commitment to real estate in Nigeria and its
                expertise in driving the innovations needed to shape the future
                of real-estate search solutions in Nigeria. Our website in the
                Nigerian property market is with over 60,000 property listings
                which include both public and private property. The listings
                include homes, houses, lands, shops, office spaces and other
                commercial properties. Small and large-scale real estate
                companies in Nigeria who desire to scale up the sales and
                rentals of their properties can partner with PropertyPro.ng.
              </h4>
            </div>
            <div style={{ marginLeft: "70px" }}>
              <h3 style={{ marginBottom: "10px", fontWeight: "bold" }}>
                Download Our Mobile Application for FREE!
              </h3>
              <strong>Visit Google Play or App Store now</strong>
              <div className="appButtons">
                <img
                  style={{ cursor: "pointer" }}
                  alt="ios logo"
                  src="./assets/images/ios.png"
                />
                <img
                  style={{ cursor: "pointer" }}
                  alt="android logo"
                  src="./assets/images/googleplay.webp"
                />
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

function Dashboard() {
  return (
    <div>
      <Layout />
    </div>
  );
}

function Search() {
  const [typeState, setTypeState] = useState("");
  const [bedroomState, setBedroomState] = useState("");
  const [maxPriceState, setTMaxPriceState] = useState("");
  return (
    <div className="inputContainer">
      <input
        style={{ paddingLeft: "20px" }}
        name="search"
        className="floating-menu"
        aria-label="Search"
        placeholder="Where do you want to live?"
        autoComplete="off"
      />
      <input id="auto" name="auto" type="hidden" />
      <span>
        {" "}
        <select
          name="type"
          className="floating-menu"
          value={typeState}
          onChange={e => {
            setTypeState(e.target.value);
          }}
        >
          {" "}
          <option value="">Type</option>{" "}
          <option value="commercial-property/shop">Shop</option>{" "}
          <option value="commercial-property/office-space">
            Office Spaces
          </option>{" "}
          <option value="flat-apartment">Flats and Apartments</option>{" "}
          <option value="house/semi-detached-bungalow">
            Semi Detached Bungalow
          </option>{" "}
          <option value="house/semi-detached-duplex">
            Semi Detached Duplex
          </option>{" "}
          <option value="co-working-space">Co-working Space</option>{" "}
          <option value="house/detached-bungalow">Detached Bungalow</option>{" "}
          <option value="commercial-property/warehouse">Warehouse</option>{" "}
          <option value="commercial-property/shop-in-a-mall">
            Shop In A Mall
          </option>{" "}
          <option value="flat-apartment/self-contain">Self Contain</option>{" "}
          <option value="flat-apartment/mini-flat">Mini Flats</option>{" "}
          <option value="house/detached-duplex">Detached Duplex</option>{" "}
          <option value="house">Houses</option>{" "}
          <option value="house/terraced-bungalow">Terraced Bungalow</option>{" "}
          <option value="commercial-property">Commercial Properties</option>{" "}
          <option value="house/terraced-duplex">Terraced Duplex</option>{" "}
        </select>{" "}
      </span>
      <span className="select-cont">
        {" "}
        <select
          name="bedroom"
          className="floating-menu"
          value={bedroomState}
          onChange={e => {
            setBedroomState(e.target.value);
          }}
        >
          {" "}
          <option value="">Bed</option> <option value="1">1 bedroom</option>{" "}
          <option value="2">2 bedroom</option>{" "}
          <option value="3">3 bedroom</option>{" "}
          <option value="4">4 bedroom</option>{" "}
          <option value="5">5 bedroom</option>{" "}
          <option value="6">6 bedroom</option>{" "}
          <option value="7">7 bedroom</option>{" "}
          <option value="8">8 bedroom</option>{" "}
          <option value="9">9 bedroom</option>{" "}
          <option value="10">10 bedroom</option>{" "}
        </select>{" "}
      </span>
      <span>
        {" "}
        <select
          name="max_price"
          className="floating-menu"
          value={maxPriceState}
          onChange={e => {
            setTMaxPriceState(e.target.value);
          }}
        >
          {" "}
          <option value="">Max price</option>{" "}
          <option value="500000">500,000</option>{" "}
          <option value="600000">600,000</option>{" "}
          <option value="700000">700,000</option>{" "}
          <option value="800000">800,000</option>{" "}
          <option value="900000">900,000</option>{" "}
          <option value="1000000">1million</option>{" "}
          <option value="2000000">2million</option>{" "}
          <option value="3000000">3million</option>{" "}
          <option value="5000000">5million</option>{" "}
          <option value="10000000">10million</option>{" "}
          <option value="20000000">20million</option>{" "}
          <option value="30000000">30million</option>{" "}
          <option value="40000000">40million</option>{" "}
          <option value="50000000">50million</option>{" "}
          <option value="100000000">100million</option>{" "}
          <option value="200000000">200million</option>{" "}
          <option value="300000000">300million</option>{" "}
          <option value="500000000">500million</option>{" "}
          <option value="1000000000">1billion</option>{" "}
          <option value="2000000000">2billion</option>{" "}
          <option value="5000000000">5billion</option>{" "}
          <option value="10000000000">10billion</option>{" "}
        </select>{" "}
      </span>
      <button type="submit" style={{ backgroundColor: "#9d060f" }}>
        <i className="mdi mdi-magnify" />
      </button>
    </div>
  );
}

export default Dashboard;
