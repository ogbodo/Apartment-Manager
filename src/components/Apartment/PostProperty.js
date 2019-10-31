function PostProperty(props) {
  const dashboardContent = [];

  const Agent = () => dashboardContent.map((item, index) => <DashboardCard />);
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
