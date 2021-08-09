import React from "react";
import NavBar from "../../resuseable/navbar/NavBar";
import datav from "../../assets/gif/data-v.gif";
import cartoongif from "../../assets/gif/cartoongif5.gif";
import map from "../../assets/png/map.png";
import roadmap from "../../assets/png/roadmap.png";
import Ourteam from "../../resuseable/ourteam/Ourteam";
import TeamCarousel from "../../resuseable/Teamcarousel/TeamCarousel";
import { Link } from "react-router-dom";
import goal from "../../assets/png/goal.png";
import logo1 from "../../assets/png/logo1.png";
import logo2 from "../../assets/png/logo2.png";
import logo3 from "../../assets/png/logo3.png";
import logo4 from "../../assets/png/logo4.png";
import logo5 from "../../assets/png/logo5.png";
import logo6 from "../../assets/png/logo6.png";

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
            className="text-white left-side col-lg-5 col-xl-5 col-md-10 col-sm-10 pl-5 pl-xl-5 pl-lg-5 pl-md-5 pl-sm-5 row"
            style={{ paddingTop: "300px" }}
          >
            <h1 className="text-center">
              Build and manage your own
              <span style={{ color: "pink" }}> token</span>.its a simple.
            </h1>
            <h4 style={{ marginTop: "50px" }} className="mr-5">
              Student Coin is the first crypto platform that allows users to
              easily design, create, and manage personal, start-up, NFT, and
              DeFi tokens.
            </h4>
            <div className="btn-area d-flex justify-content-xl-center  align-items-center">
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
            className="col-lg-7 col-xl-7 col-md-10 col-sm-12 m-auto"
            style={{ paddingTop: "200px", paddingLeft: "60px" }}
          >
            <img
              style={{ borderRadius: "100px" }}
              width="90%"
              src={cartoongif}
              alt=""
              srcset=""
            />
            <div className="numbering row">
              <div className="d-flex align-items-lg-center justify-content-lg-between mt-4">
                <div className="m-sm-4 p-3 ">
                  <h4>250000+</h4>
                  <p>Registered users</p>
                </div>
                <div className="m-sm-4 p-3">
                  <h4>500+</h4>
                  <p>Universities</p>
                </div>
                <div className="m-sm-4 p-3">
                  <h4>36</h4>
                  <p>Countries</p>
                </div>
                <div>
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
        <hr style={{ backgroundColor: "#e3dac5" }} />
      </div>

      {/* Second Section */}

      <div className="row section-2">
        <div className="logo col-xl-5 col-lg-5 col-md-5 col-sm-10 m-3 m-sm-auto">
          <img
            style={{ borderRadius: "50px" }}
            width="100%"
            src={datav}
            alt=""
            srcset=""
          />
          <div className="row ml-xl-3 ml-lg-3 m-sm-3">
            <div className="left-side-text col-lg-5 m-2">
              <p>
                A student creates their personal token to get a decentralised
                student loan and pay their tuition at a promising university.
              </p>
            </div>
            <div className="right-side-text col-lg-5 m-2">
              <p>
                STC holders at the STC Exchange can trade and fund various
                personal tokens created with Student Coin to receive cyclical
                payments.
              </p>
            </div>
          </div>
        </div>
        <div className=" col-xl-5 col-lg-5 col-md-5 col-sm-10 m-sm-3 m-sm-auto m-3 ">
          <h2>Student Coin [STC]</h2>
          <p>
            We allow for wide scale tokenisation by building the platform for
            both people and organisations to easily create, manage and develop
            their own tokens.
          </p>
          <p>
            "Tokenisation" is the future of the economy, where every person and
            company has its own token. Student Coin allows the creation of
            custom tokens and can be used for crowdfunding, trading, governing,
            voting or payments.
          </p>
          <p>
            The tokens built with Student Coin are valued based on the central
            reference currency, STC Token, and can be traded and crowdfunded at
            the Student Coin's platform, STC Exchange.
          </p>
          <p>
            DeFi tokens issued by students to decentralise their student loans
            is one example of how STC-based tokens can be used.
          </p>
        </div>
      </div>
      {/* Third Section */}

      <div className="section-3">
        <div className="map">
          <img width="100%" src={map} alt="" srcset="" />
          <div className="map-text col-lg-4 col-xl-4 col-md-4 col-sm-6 col-12">
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
      <div className="section-4 " style={{ marginTop: "150px" }}>
        <h2 className="listing">STC token listing available at:</h2>
        <div className="d-lg-flex d-md-flex  justify-content-lg-around  justify-content-md-center justify-content-sm-start align-items-center logos">
          <div className="text-center  m-3">
            <i class="fab fa-buysellads m-md-3">bithum</i>
          </div>
          <div className="text-center  m-3">
            <i class="fas fa-chess-knight m-md-3 ">UniSwap</i>
          </div>
          <div className="text-center  m-3">
            <i class="fas fa-arrows-alt m-md-3">KuCoin</i>
          </div>
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
        <div className="goal-logo col-xl-7 col-lg-7 col-md-7 d-flex align-items-center">
          <img width="100%" src={goal} alt="" srcset="" />
        </div>
      </div>
      {/* sixth section */}
      <div className="row  section-6">
        <h2>Why Student Coin</h2>
        <div className="d-lg-flex d-xl-flex d-md-flex justify-content-around text-center">
          <div
            className="col-xl-2 col-lg-2 col-md-2 col-sm-8 mt-4 m-sm-auto"
            style={{ alignContent: "center" }}
          >
            <img width="100%" src={logo1} alt="" srcset="" />
            <h6>
              STC is a reliable, fundamental, long-term project based on
              academic values.
            </h6>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-8 m-sm-auto">
            <img width="100%" src={logo2} alt="" srcset="" />
            <h6>
              STC will allow you to create your own token and manage its uses at
              the STC Exchange.
            </h6>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-8 m-sm-auto">
            <img width="100%" src={logo3} alt="" srcset="" />
            <h6>
              STC is a reliable, fundamental, long-term project based on
              academic values.
            </h6>
          </div>
        </div>
        <div className="d-lg-flex d-xl-flex d-md-flex justify-content-around text-center">
          <div
            className="col-xl-2 col-lg-2 col-md-2 col-sm-8 mt-4 m-sm-auto"
            style={{ alignContent: "center" }}
          >
            <img width="100%" src={logo4} alt="" srcset="" />
            <h6>
              STC is a reliable, fundamental, long-term project based on
              academic values.
            </h6>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-8 m-sm-auto">
            <img width="100%" src={logo5} alt="" srcset="" />
            <h6>
              STC will allow you to create your own token and manage its uses at
              the STC Exchange.
            </h6>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-8 m-sm-auto">
            <img width="100%" src={logo6} alt="" srcset="" />
            <h6>
              STC is a reliable, fundamental, long-term project based on
              academic values.
            </h6>
          </div>
        </div>
      </div>
      {/* seventh section */}
      <div className="text-center font-weight-bolder p-3 section-7">
        <h1 style={{ color: "#4150a6" }}>Road Map</h1>
        <img width="100%" src={roadmap} alt="" srcset="" />
      </div>
      {/* 8th Section */}

      <Ourteam />
      <TeamCarousel />
      {/* <AnotherCar /> */}
      <hr />
      {/* ninth section */}
      <div className="section-9 position-relative text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#4150a6"
            fill-opacity="1"
            d="M0,64L48,53.3C96,43,192,21,288,32C384,43,480,85,576,106.7C672,128,768,128,864,112C960,96,1056,64,1152,74.7C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        <div
          style={{ backgroundColor: "#4150a6" }}
          className="p-xl-5 p-lg-5 p-md-5 p-sm-5 p-3"
        >
          <div
            className="col-xl-4 col-lg-4 col-md-4 col-sm-6"
            style={{ top: "0px" }}
          >
            <h2>More questions?</h2>
            <p>
              Check out our frequently asked questions and join Telegram to
              receive live support!
            </p>
            <button className="play">FAQ</button>
            <i
              style={{
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "50%",
                color: "#4150a6",
                marginLeft: "20px",
                boxShadow: "3px 1px 5px white",
              }}
              class="far fa-paper-plane"
            ></i>
          </div>
          {/* 10th section */}
          <div className="row section-10 mt-5">
            <div className="col-xl-2 col-lg-2  ">
              <p>
                <i
                  style={{
                    fontSize: "50px",
                  }}
                  className="fas fa-graduation-cap"
                ></i>
              </p>
              <strong>Student Coin</strong>
            </div>
            <div
              className="footer-text col-xl-2 col-lg-3 col-md-4"
              style={{ lineHeight: "3px" }}
            >
              <h4
                style={{
                  color: "#f5a2c0",
                  textShadow: "1px 1px 3px #f5a2c0",
                  marginBottom: "30px",
                }}
              >
                Information
              </h4>
              <p>
                <a href="/">Announcements</a>
              </p>
              <p>
                <a href> Whitepaper</a>
              </p>
              <p>
                <a href="/">Full Documentation</a>
              </p>
              <p>
                <a href="/">STC Terms of Use</a>
              </p>
              <p>
                <a href="/">Careers</a>
              </p>
              <p>
                <a href="/">Medium Blog</a>
              </p>
            </div>
            <div
              className="footer-text col-xl-2 col-lg-3 col-md-4"
              style={{ lineHeight: "3px" }}
            >
              <h4
                style={{
                  color: "#f5a2c0",
                  textShadow: "1px 1px 3px #f5a2c0",
                  marginBottom: "30px",
                }}
              >
                STC Ecosystem
              </h4>
              <p>
                <a href="/">STC Exchange</a>
              </p>
              <p>
                <a href>STC Terminal</a>
              </p>
              <p>
                <a href="/">STC Education</a>
              </p>
              <p>
                <a href="/">STC Voting</a>
              </p>
              <p>
                <a href="/">STC Exchange</a>
              </p>
              <p>
                <a href="/">STC Exchange</a>
              </p>
            </div>
            <div
              className="footer-text col-xl-2 col-lg-3 col-md-4"
              style={{ lineHeight: "3px" }}
            >
              <h4
                style={{
                  color: "#f5a2c0",
                  textShadow: "1px 1px 3px #f5a2c0",
                  marginBottom: "30px",
                }}
              >
                Contact
              </h4>
              <p>
                <a href="/">Support</a>
              </p>
              <p>
                <a href="/">Contack Us</a>
              </p>
              <p>
                <a href="/">Business Inquiries</a>
              </p>
              <p>
                <a href="/">office@studentcoin.org</a>
              </p>
              <p>
                <a href="/">Student Edu Chain Ltd.</a>
              </p>
              <p>
                <a href="/">00-066 Warsaw,</a>
              </p>
            </div>
            <div
              className="footer-text col-xl-2 col-lg-3 col-md-4"
              style={{ lineHeight: "3px" }}
            >
              <h4
                style={{
                  color: "#f5a2c0",
                  textShadow: "1px 1px 3px #f5a2c0",
                  marginBottom: "30px",
                }}
              >
                Legal
              </h4>
              <p>
                <a href="/">Announcements</a>
              </p>
              <p>
                <a href> Whitepaper</a>
              </p>
              <p>
                <a href="/">Full Documentation</a>
              </p>
              <p>
                <a href="/">STC Terms of Use</a>
              </p>
              <p>
                <a href="/">Careers</a>
              </p>
              <p>
                <a href="/">Medium Blog</a>
              </p>
            </div>
            <div
              className="footer-text col-xl-2 col-lg-3 col-md-4"
              style={{ lineHeight: "3px" }}
            >
              <h4
                style={{
                  color: "#f5a2c0",
                  textShadow: "1px 1px 3px #f5a2c0",
                  marginBottom: "30px",
                }}
              >
                Socail
              </h4>
              <p>
                <i class="fab fa-facebook"></i>

                <a href="/">Announcements</a>
              </p>
              <p>
                <i class="fab fa-twitter-square"></i>
                <a href> Whitepaper</a>
              </p>
              <p>
                <i class="fab fa-linkedin"></i>

                <a href="/">Full Documentation</a>
              </p>
              <p>
                <i class="far fa-paper-plane"></i>
                <a href="/">STC Terms of Use</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
