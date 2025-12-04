import React from "react";
import Marquee from "react-fast-marquee";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../assets/taan-logo.jpg";
import img2 from "../assets/nma-logo.jpeg";
import img3 from "../assets/vtof-logo.jpeg";
import img4 from "../assets/dot-logo.jpg";
import img5 from "../assets/routard-logo.png";
import img6 from "../assets/petitfute-logo.png";

export default function LogoMarquee() {
  return (
    <div className=" py-4">
      <Marquee speed={30} gradient={false}>
        {[
          img1,
          img2,
          img3,
          img4,
          img5,
          img6,
          img1,
          img2,
          img3,
          img4,
          img5,
          img6,
        ].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`logo-${i}`}
            className="img-fluid d-block mx-4 mx-md-5"
            style={{ height: "75px", objectFit: "contain" }}
          />
        ))}
      </Marquee>
    </div>
  );
}
