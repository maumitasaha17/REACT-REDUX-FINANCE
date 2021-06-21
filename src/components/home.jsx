import React from "react";
import { Row, Container } from "react-bootstrap";
//import { useSelector, useDispatch } from "react-redux";
//import { setFinances } from "../actions/financeActions";
//import financeReducer from "../reducers/financeReducer";
//import financeActionTypes from "../services/financeActionTypes";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Container style={{ marginTop: "51px" }}>
      <Row xs={1} md={4} className="g-4">
        <div className="card w-100">
          <div className="card-body">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJ6-p6IIsvHBcRpO8HVkTaWDd9fuJ7llUZQ&usqp=CAU"
              height="250"
              width="250"
              crop="fill"
              effect="sepia"
              radius="20"
            />
            <h5 className="card-title">Patients</h5>
            <a href="#" className="btn btn-primary">
              More info
            </a>
          </div>
        </div>

        <div className="card w-100">
          <div className="card-body">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS25ls7TLINTUgESAptKyPCw2kTLNHv6-7kiSfP2xXIwyIZsQ-eda3eKe52xY6I8cZoZI&usqp=CAU"
              height="250"
              width="250"
              crop="fill"
              effect="sepia"
              radius="20"
            />
            <h5 className="card-title">Doctors</h5>
            <a href="#" className="btn btn-primary">
              More info
            </a>
          </div>
        </div>

        <div className="card w-100">
          <div className="card-body">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnBNCKQdZ7PIATNYIbOHYp1pruy-8Uo9fRqGRTkoqM4-4uVEJY8ZbAVLNk5GbiV9xFw0&usqp=CAU"
              height="250"
              width="250"
              crop="fill"
              effect="sepia"
              radius="20"
            />
            <h5 className="card-title">Insurance Policy</h5>
            <a href="#" className="btn btn-primary">
              More info
            </a>
          </div>
        </div>

        <div className="card w-100">
          <div className="card-body">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPgzQFn6GQq5WcnO5K559KOyBH_CbLcn4tTQ&usqp=CAU"
              height="250"
              width="250"
              crop="fill"
              effect="sepia"
              radius="20"
            />
            <h5 className="card-title">Finance</h5>
            <a href="/finance" className="btn btn-primary">
              More info
            </a>
          </div>
        </div>

        <div className="card w-100">
          <div className="card-body">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1J9iGeWy1oQMIdKdxt8j_UOQk40q1jlU0lg7ZhARLECGWrGOhdsfNMRKpuN_JhGlx5o&usqp=CAU"
              height="250"
              width="250"
              crop="fill"
              effect="sepia"
              radius="20"
            />
            <h5 className="card-title">Patient Case</h5>
            <a href="#" className="btn btn-primary">
              More info
            </a>
          </div>
        </div>

        <div className="card w-100">
          <div className="card-body">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtjNic8nFRE9Aqq57rEgayX_eCY9lCMDOfrA&usqp=CAU"
              height="250"
              width="250"
              crop="fill"
              effect="sepia"
              radius="20"
            />
            <h5 className="card-title">Patient History</h5>
            <a href="#" className="btn btn-primary">
              More info
            </a>
          </div>
        </div>

        <div className="card w-100">
          <div className="card-body">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxPzzEiGZiQHTdfQK9YEw5PuCpW22s1yvcdw&usqp=CAU"
              height="250"
              width="250"
              crop="fill"
              effect="sepia"
              radius="20"
            />
            <h5 className="card-title">Diet</h5>
            <a href="#" className="btn btn-primary">
              More info
            </a>
          </div>
        </div>

        <div className="card w-100">
          <div className="card-body">
            <img
              src="data:image/jpeg;base64,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"
              height="250"
              width="250"
              crop="fill"
              effect="sepia"
              radius="20"
            />
            <h5 className="card-title">Disease</h5>
            <a href="#" className="btn btn-primary">
              More info
            </a>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Home;
