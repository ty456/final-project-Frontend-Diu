import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { pharmacyApi } from "../../libs/api/pharmacyService";
import SendMessage from "./SendMessage";

const Pharmacy = () => {
  const [pharmacyData, setPharmacyData] = useState([]);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
    getAllPharmacyData();
  }, []);

  const getAllPharmacyData = async (pharmacyData) => {
    try {
      const { success, data, message } = await pharmacyApi.getAllPharmacy();
      if (success) {
        setPharmacyData(data);
      } else {
        setError(message);
      }
    } catch (error) {
      // alert('')
      setError(error);
    }
  };
  return (
    <Container className="my-4">
      <h5 className="mb-2">Total Pharmacy Found: {pharmacyData?.length}</h5>
      <Row>
        {pharmacyData.length > 0 &&
          pharmacyData.map((el, idx) => {
            return (
              <Col key={idx} md={12} className="bg-white p-3 rounded my-2">
                <Row>
                  <Col md={9}>
                    <div className="d-flex">
                      <div>
                        <Image src={el?.pharmacyImage} width={300} />
                      </div>
                      <div className="ms-3">
                        <h4 className="my-3">{el?.pharmacyName}</h4>
                        <p className="mb-2">
                          <Image src="/images/phone-line.png" width={20} />
                          <span className="ps-2">{el?.phoneNumber}</span>
                        </p>
                        <p className="mb-2">
                          <Image src="/images/map-pin-line.png" width={20} />
                          <span className="ps-2">{el?.location}</span>
                        </p>
                        <p className="mb-2">
                          <Image
                            src="/images/arrow-right-s-line.png"
                            width={20}
                          />
                          <span className="ps-2">{el?.pharmacyType}</span>
                        </p>
                        <p className="mb-2">
                          <Image
                            src="/images/arrow-right-s-line.png"
                            width={20}
                          />
                          <span className="ps-2">
                            Opens at {el?.openTime} AM
                          </span>
                        </p>
                        <p className="mb-2">
                          <Image
                            src="/images/arrow-right-s-line.png"
                            width={20}
                          />
                          <span className="ps-2">
                            Close Time {el?.closeTime} AM
                          </span>
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="d-flex flex-column justify-content-around h-100">
                      <Button
                        variant="outline-primary"
                        onClick={() => {
                          setModalType("message");
                          setShow(true);
                        }}
                      >
                        SEND MESSAGE
                      </Button>
                      <Button
                        onClick={() => {
                          setModalType("call");
                          setShow(true);
                        }}
                      >
                        CALL NOW
                      </Button>
                      <Button
                        onClick={() => {
                          setModalType("collection");
                          setShow(true);
                        }}
                        variant="outline-primary"
                      >
                        BROWSE PRODUCTS
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Col>
            );
          })}
      </Row>
      <SendMessage show={show} setShow={setShow} modalType={modalType} />
    </Container>
  );
};

export default Pharmacy;
