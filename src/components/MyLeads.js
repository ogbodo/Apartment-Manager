import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { AuthenticatedUser } from "../components/AppContext";

function MyLeads() {
  const [leadState, setLeadState] = useState([]);
  const [user] = useContext(AuthenticatedUser);
  console.log(user);

  const allLeads = [
    {
      name: "Solomon Ogbodo",
      sex: "Male",
      phone: "07032150416",
      email: "solomon@gmail.com",
      Address: "opposite police check point Nyanya",
      apartmentsInfo: "apartmentID"
    },
    {
      name: "Solomon Ogbodo",
      sex: "Male",
      phone: "07032150416",
      email: "solomon@gmail.com",
      Address: "opposite police check point Nyanya",
      apartmentsInfo: "apartmentID"
    },
    {
      name: "Solomon Ogbodo",
      sex: "Male",
      phone: "07032150416",
      email: "solomon@gmail.com",
      Address: "opposite police check point Nyanya",
      apartmentsInfo: "apartmentID"
    },
    {
      name: "Solomon Ogbodo",
      sex: "Male",
      phone: "07032150416",
      email: "solomon@gmail.com",
      Address: "opposite police check point Nyanya",
      apartmentsInfo: "apartmentID"
    },
    {
      name: "Solomon Ogbodo",
      sex: "Male",
      phone: "07032150416",
      email: "solomon@gmail.com",
      Address: "opposite police check point Nyanya",
      apartmentsInfo: "apartmentID"
    },
    {
      name: "Solomon Ogbodo",
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
        <td>{user.fullName}</td>
        <td>{user.phone}</td>
        <td>{occupant.email}</td>
        <td>{occupant.sex}</td>
        <td>{occupant.Address}</td>
        <td style={{ textAlign: "center" }}>
          <Link to={`/Login/}`}>
            <td
              style={{
                color: "white",
                backgroundColor: "#9d060f"
              }}
            >
              Info
            </td>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div style={{ overflowY: "scroll", height: "45rem" }}>
      <Table striped bordered hover style={{ marginTop: "10px" }}>
        <thead style={{ backgroundColor: "#d1454f" }}>
          <tr>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Sex</th>
            <th>Address</th>
            <th>Apartment Info</th>
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
