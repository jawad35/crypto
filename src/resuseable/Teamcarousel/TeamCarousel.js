import React from "react";
import "./teamcarousel.css";
const TeamCarousel = () => {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
      style={{ margin: "0px 10px" }}
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="cards-wrapper">
            <div
              className="single-card text-center"
              style={{ margin: "0px 10px" }}
            >
              <div className="card-img">
                <img
                  src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg"
                  alt=""
                  width="200px"
                  style={{ borderRadius: "50%", border: "20px solid white" }}
                />
              </div>
              <div className="mt-4" style={{ color: "#4150a6" }}>
                <h5 style={{ fontWeight: "bolder" }}>Syeda Madiha</h5>
                <p>Student Coin</p>
                <h6>CEO & Founder</h6>
                <p> Kozminski University</p>
                <div className="team-social-icons">
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-twitter-square"></i>
                  <i class="fab fa-linkedin"></i>
                  <i class="far fa-paper-plane"></i>
                </div>
              </div>
            </div>
            <div className="single-card text-center">
              <div className="card-img">
                <img
                  src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-7.jpg"
                  alt=""
                  width="200px"
                  style={{ borderRadius: "50%", border: "20px solid white" }}
                />
              </div>
              <div className="mt-4" style={{ color: "#4150a6" }}>
                <h5 style={{ fontWeight: "bolder" }}>Syeda Madiha</h5>
                <p>Student Coin</p>
                <h6>CEO & Founder</h6>
                <p> Kozminski University</p>
                <div className="team-social-icons">
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-twitter-square"></i>
                  <i class="fab fa-linkedin"></i>
                  <i class="far fa-paper-plane"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="cards-wrapper">
            <div
              className="single-card text-center"
              style={{ margin: "0px 20px" }}
            >
              <div className="card-img">
                <img
                  src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg"
                  alt=""
                  width="200px"
                  style={{ borderRadius: "50%", border: "20px solid white" }}
                />
              </div>
              <div className="mt-4" style={{ color: "#4150a6" }}>
                <h5 style={{ fontWeight: "bolder" }}>Syeda Madiha</h5>
                <p>Student Coin</p>
                <h6>CEO & Founder</h6>
                <p> Kozminski University</p>
                <div className="team-social-icons">
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-twitter-square"></i>
                  <i class="fab fa-linkedin"></i>
                  <i class="far fa-paper-plane"></i>
                </div>
              </div>
            </div>
            <div className="single-card text-center">
              <div className="card-img">
                <img
                  src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-7.jpg"
                  alt=""
                  width="200px"
                  style={{ borderRadius: "50%", border: "20px solid white" }}
                />
              </div>
              <div className="mt-4" style={{ color: "#4150a6" }}>
                <h5 style={{ fontWeight: "bolder" }}>Syeda Madiha</h5>
                <p>Student Coin</p>
                <h6>CEO & Founder</h6>
                <p> Kozminski University</p>
                <div className="team-social-icons">
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-twitter-square"></i>
                  <i class="fab fa-linkedin"></i>
                  <i class="far fa-paper-plane"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default TeamCarousel;
