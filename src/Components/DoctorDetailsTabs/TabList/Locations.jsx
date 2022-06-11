import React from "react";
import smallPic1 from "../../../images/pic1.jpg";
import smallPic2 from "../../../images/pic2.jpg";
import smallPic3 from "../../../images/pic3.jpg";
import smallPic4 from "../../../images/pic4.jpg";

const Locations = () => {
  return (
    <div>
      <div className="d-flex p-4 mt-3 border rounded">
        <div className="col-6">
          <h3>Gulshan Health Care</h3>
          <p>MDS - Periodontology and Oral Implantology, BDS</p>
          <p>start icon 4</p>
          <p>Link road Gulshan - 1, Dhaka Bangladesh</p>
          <div style={{ width: "220px", display: "flex" }}>
            <img className="w-25 m-1 rounded" src={smallPic1} alt="" />
            <img className="w-25 m-1 rounded" src={smallPic2} alt="" />
            <img className="w-25 m-1 rounded" src={smallPic3} alt="" />
            <img className="w-25 m-1 rounded" src={smallPic4} alt="" />
          </div>
        </div>

        <div className="col-3 ps-5">
          <div>
            <h5>Mon-Sat</h5>
            <p>10.00 AM - 2.00 PM</p>
            <p>4.00 PM - 9.00 PM</p>
          </div>
          <div>
            <h5>Tus-Sat</h5>
            <p>10.00 AM - 2.00 PM</p>
            <p>4.00 PM - 9.00 PM</p>
          </div>
        </div>

        <div className="col-3 text-center">
          <h3>300$</h3>
        </div>
      </div>

      <div className="d-flex  mt-3 p-4 border rounded">
        <div className="col-6">
          <h3>Smile Cute Dental Care Center</h3>
          <p>MDS - Periodontology and Oral Implantology, BDS</p>
          <p>start icon 4</p>
          <p>
            start icon 2286 Sundown Lane, Austin, Texas 78749, USA Get
            Directions
          </p>
          <div style={{ width: "220px", display: "flex" }}>
            <img className="w-25 m-1 rounded" src={smallPic1} alt="" />
            <img className="w-25 m-1 rounded" src={smallPic2} alt="" />
            <img className="w-25 m-1 rounded" src={smallPic3} alt="" />
            <img className="w-25 m-1 rounded" src={smallPic4} alt="" />
          </div>
        </div>

        <div className="col-3 ps-5">
          <div>
            <h5>Mon-Sat</h5>
            <p>10.00 AM - 2.00 PM</p>
            <p>4.00 PM - 9.00 PM</p>
          </div>
          <div>
            <h5>Tus-Sat</h5>
            <p>10.00 AM - 2.00 PM</p>
            <p>4.00 PM - 9.00 PM</p>
          </div>
        </div>

        <div className="col-3 text-center">
          <h3>300$</h3>
        </div>
      </div>

      <div className="d-flex  mt-3 p-4 border rounded">
        <div className="col-6">
          <h3>Smile Cute Dental Care Center</h3>
          <p>MDS - Periodontology and Oral Implantology, BDS</p>
          <p>start icon 4</p>
          <p>
            start icon 2286 Sundown Lane, Austin, Texas 78749, USA Get
            Directions
          </p>
          <div style={{ width: "220px", display: "flex" }}>
            <img className="w-25 m-1 rounded" src={smallPic1} alt="" />
            <img className="w-25 m-1 rounded" src={smallPic2} alt="" />
            <img className="w-25 m-1 rounded" src={smallPic3} alt="" />
            <img className="w-25 m-1 rounded" src={smallPic4} alt="" />
          </div>
        </div>

        <div className="col-3 ps-5">
          <div>
            <h5>Mon-Sat</h5>
            <p>10.00 AM - 2.00 PM</p>
            <p>4.00 PM - 9.00 PM</p>
          </div>
          <div>
            <h5>Tus-Sat</h5>
            <p>10.00 AM - 2.00 PM</p>
            <p>4.00 PM - 9.00 PM</p>
          </div>
        </div>

        <div className="col-3 text-center">
          <h3>300$</h3>
        </div>
      </div>
    </div>
  );
};

export default Locations;
