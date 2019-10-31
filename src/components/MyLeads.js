import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { AuthenticatedUser } from "../components/AppContext";

function MyLeads() {
  const isLead = true;
  // const [leadState, setLeadState] = useState([]);
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

  const allLeads = [
    {
      fullName: "Solomon Ogbodo",
      sex: "Male",
      phone: "07032150416, 081345932720",
      whatsApp: "07032150416",
      email: "solomon@gmail.com",
      Address: "opposite police check point Nyanya",
      apartmentsInfo: "apartmentID"
    },
    {
      fullName: "Solomon Ogbodo",
      sex: "Male",
      phone: "07032150416",
      email: "solomon@gmail.com",
      Address: "opposite police check point Nyanya",
      apartmentsInfo: "apartmentID"
    },
    {
      fullName: "Solomon Ogbodo",
      sex: "Male",
      phone: "07032150416",
      email: "solomon@gmail.com",
      Address: "opposite police check point Nyanya",
      apartmentsInfo: "apartmentID"
    },
    {
      fullName: "Solomon Ogbodo",
      sex: "Male",
      phone: "07032150416",
      email: "solomon@gmail.com",
      Address: "opposite police check point Nyanya",
      apartmentsInfo: "apartmentID"
    },
    {
      fullName: "Solomon Ogbodo",
      sex: "Male",
      phone: "07032150416",
      email: "solomon@gmail.com",
      Address: "opposite police check point Nyanya",
      apartmentsInfo: "apartmentID"
    },
    {
      fullName: "Solomon Ogbodo",
      sex: "Male",
      phone: "07032150416",
      email: "solomon@gmail.com",
      Address: "opposite police check point Nyanya",
      apartmentsInfo: "apartmentID"
    }
  ];

  const rows = allLeads.map(occupant => {
    return (
      <tr key={occupant.email}>
        <td>{occupant.fullName}</td>
        <td>{occupant.phone}</td>
        <td>{occupant.whatsApp}</td>
        <td>{occupant.email}</td>
        <td>{occupant.sex}</td>

        {isLead ? (
          <>
            <td>{occupant.Address}</td>
            <td style={{ textAlign: "center" }}>
              <Link to={`/Login/}`}>
                <td
                  style={{
                    color: "white",
                    backgroundColor: "grey"
                  }}
                >
                  Info
                </td>
              </Link>
            </td>
          </>
        ) : (
          ""
        )}
      </tr>
    );
  });

  return (
    <div style={{ overflowY: "scroll", height: "45rem" }}>
      <Table striped bordered hover style={{ marginTop: "10px" }}>
        <thead style={{ backgroundColor: "grey", color: "white" }}>
          <tr>
            <th>Full Name</th>
            <th>Phone</th>
            <th>WhatsApp</th>
            <th>Email</th>
            <th>Sex</th>
            {isLead ? (
              <>
                <th>Address</th>
                <th>Apartment Info</th>
              </>
            ) : (
              ""
            )}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
}

function DriverCell({ driverId }) {
  const [driverName, setDriverName] = useState("No Name");

  useEffect(() => {
    fetch(`/api/driver/${driverId}`)
      .then(response => response.json())
      .then(data => data.data)
      .then(driver => {
        setDriverName(driver.name);
      })
      .catch(error => {
        console.log(error);
      });
  }, [driverId]);

  return driverName;
}

export default MyLeads;
