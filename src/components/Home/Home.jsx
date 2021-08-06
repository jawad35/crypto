import React from "react";
import NavBar from "../../resuseable/navbar/NavBar";
import datav from "../../assets/gif/data-v.gif";
import cartoongif from "../../assets/gif/cartoongif5.gif";
import map from "../../assets/png/map.png";
import goal from "../../assets/png/goal.png";
// import map from "../../assets/images/map.jpg";

import "./home.css";
const Home = () => {
  return (
    <div className="home overflow-hidden">
      <div>
        <NavBar />
      </div>
      <div className="row main">
        <div className="row section-1 ">
          <div
            className="text-white left-side col-lg-5 col-xl-5 col-md-5 col-sm-12 "
            style={{ paddingLeft: "100px", paddingTop: "300px" }}
          >
            <h1>
              Build and manage your own <span>token</span>.its a simple.
            </h1>
            <h4 style={{ marginTop: "50px" }}>
              Student Coin is the first crypto platform that allows users to
              easily design, create, and manage personal, start-up, NFT, and
              DeFi tokens.
            </h4>
            <div className="btn-area d-flex  align-items-center">
              <button className="play">Buy Student Coin</button>
              <div
                style={{
                  border: "2px solid white",
                  borderRadius: "50%",
                  margin: "20px",
                }}
              >
                <i
                  style={{ fontSize: "50px", color: "violet", padding: "20px" }}
                  class="far fa-play-circle"
                ></i>
              </div>
              <p>Explantry video</p>
            </div>
          </div>
          <div
            className="col-lg-7 col-xl-7 col-md-7 col-sm-12"
            style={{ paddingTop: "200px", paddingLeft: "100px" }}
          >
            <img
              style={{ borderRadius: "100px" }}
              width="90%"
              src={cartoongif}
              alt=""
              srcset=""
            />
            <div className="numbering row">
              <div className="d-lg-flex align-items-lg-center justify-content-lg-between">
                <div className="m-sm-4 ">
                  <h4>250000+</h4>
                  <p>Registered users</p>
                </div>
                <div className="m-sm-4  ">
                  <h4>500+</h4>
                  <p>Universities</p>
                </div>
                <div className="m-sm-4 ">
                  <h4>36</h4>
                  <p>Countries</p>
                </div>
                <div style={{ marginBottom: "40px" }}>
                  <div>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-twitter-square"></i>
                  </div>
                  <div>
                    <i class="fab fa-linkedin"></i>
                    <i class="far fa-paper-plane"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#4150a6"
            fill-opacity="1"
            d="M0,128L40,149.3C80,171,160,213,240,213.3C320,213,400,171,480,165.3C560,160,640,192,720,224C800,256,880,288,960,282.7C1040,277,1120,235,1200,202.7C1280,171,1360,149,1400,138.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
        {/* <hr style={{ backgroundColor: "#e3dac5" }} /> */}
      </div>

      {/* Second Section */}

      <div className="row section-2">
        <div className="d-flex">
          <div className="logo col-xl-6 col-lg-6">
            <img
              style={{ borderRadius: "50px" }}
              width="100%"
              src={datav}
              alt=""
              srcset=""
            />
            <div className="d-flex justify-content-between align-items-center">
              <div className="left-side-text">
                <p>
                  A student creates their personal token to get a decentralised
                  student loan and pay their tuition at a promising university.
                </p>
              </div>
              <div className="right-side-text">
                <p>
                  STC holders at the STC Exchange can trade and fund various
                  personal tokens created with Student Coin to receive cyclical
                  payments.
                </p>
              </div>
            </div>
          </div>
          <div className="sec2-text col-xl-6 col-lg-6">
            <h2>Student Coin [STC]</h2>
            <p>
              We allow for wide scale tokenisation by building the platform for
              both people and organisations to easily create, manage and develop
              their own tokens.
            </p>
            <p>
              "Tokenisation" is the future of the economy, where every person
              and company has its own token. Student Coin allows the creation of
              custom tokens and can be used for crowdfunding, trading,
              governing, voting or payments.
            </p>
            <p>
              The tokens built with Student Coin are valued based on the central
              reference currency, STC Token, and can be traded and crowdfunded
              at the Student Coin's platform, STC Exchange.
            </p>
            <p>
              DeFi tokens issued by students to decentralise their student loans
              is one example of how STC-based tokens can be used.
            </p>
          </div>
        </div>
      </div>
      {/* Third Section */}

      <div className="section-3">
        <div className="map">
          <img width="100%" src={map} alt="" srcset="" />
          <div className="map-text">
            <h4 style={{ color: "#4150a6" }}>
              Student Coin around the{" "}
              <span style={{ color: "#f5a2c0" }}> world</span>
            </h4>
            <p>
              To raise awareness around blockchain technology, STC community
              already connects students
              <span style={{ color: "#f5a2c0" }}> from 500 universities!</span>
            </p>
          </div>
        </div>
      </div>
      {/* Forth Section */}
      <div className="section-4">
        <h2 className="listing">STC token listing available at:</h2>
        <div className="d-flex justify-content-lg-around align-items-center logos">
          <i class="fab fa-buysellads m-md-5 ">bithum</i>
          <i class="fas fa-chess-knight m-md-5 ">UniSwap</i>
          <i class="fas fa-arrows-alt m-md-5 m-sm-5 m-auto">KuCoin</i>
        </div>
      </div>
      {/* fifth section */}
      <div className="row section-5 ">
        <div className="goal-text col-xl-5 col-m-lg-5 col-md-5">
          <h2>Our Goals</h2>
          <div className=" d-flex justify-content-between">
            <i className="fas fa-graduation-cap"></i>
            <p>
              To allow everyone, including businesses, to create and manage
              their own personal, corporate, DeFi and NFT tokens as easily as a
              social media profile.
            </p>
          </div>
          <div className=" d-flex justify-content-between">
            <i className="fas fa-graduation-cap"></i>
            <p>
              To make tokenisation more mainstream by supporting education about
              blockchain technology, decentralised finance and tokenomics.
            </p>
          </div>
        </div>
        <div className="goal-logo col-xl-7 col-lg-7 col-md-7">
          <img width="80%" src={goal} alt="" srcset="" />
        </div>
      </div>
      {/* sixth section */}
      <div className="row">
        <div></div>
      </div>
    </div>
  );
};

export default Home;
