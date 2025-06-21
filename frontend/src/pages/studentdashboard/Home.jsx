import React from "react";

const Home = () => {
  return (
    <>
      <section className="notice-box">
        <p><strong>Welcome, Prathamesh Davhale!</strong></p>
        <p><strong>Notice:</strong> Josh is visiting for campus placement on 03/07/2025. Interested students must register by 03/10/2025.</p>
      </section>

      <div className="dashboard-grid">
        <div className="box profile-completion">
          <h3>Profile Completion:</h3>
          <div className="bar"><div style={{ width: "80%" }}>PERSONAL</div></div>
          <div className="bar"><div style={{ width: "40%" }}>ACADEMICS</div></div>
          <div className="bar"><div style={{ width: "60%" }}>ADDRESS</div></div>
          <div className="bar"><div style={{ width: "20%" }}>DOCUMENT</div></div>
        </div>

        <div className="box recruiters">
          <h3>Recruiters:</h3>
          <div className="recruiter-list">
            <div className="recruiter"><img src="https://via.placeholder.com/30" alt="Logo" /><span>XYZ COMPANY</span></div>
            <div className="recruiter highlighted">
              <img src="https://via.placeholder.com/30" alt="Logo" />
              <span><strong>ABC COMPANY</strong></span>
              <span className="icons">
                <i className="fas fa-comment-alt" title="Chat"></i>
                <i className="fas fa-star" title="Rate"></i>
                <i className="fas fa-pen" title="Edit"></i>
                <i className="fas fa-ellipsis-v" title="More"></i>
              </span>
            </div>
            <div className="recruiter"><img src="https://via.placeholder.com/30" alt="Logo" /><span>PQR COMPANY</span></div>
            <div className="recruiter"><img src="https://via.placeholder.com/30" alt="Logo" /><span>MNO COMPANY</span></div>
            <div className="see-more"><a href="#">+ See More Companies</a></div>
          </div>
        </div>

        <div className="box achiever">
          <h3>Campus Achiever:</h3>
          <img src="https://via.placeholder.com/40" alt="A1" />
          <img src="https://via.placeholder.com/40" alt="A2" />
          <img src="https://via.placeholder.com/40" alt="A3" />
        </div>

        <div className="box events">
          <h3>Upcoming Events:</h3>
          <ul>
            <li>📌 Pre-Placement Talk – Infosys Virtual Session | 12th March, 10 AM</li>
            <li>📌 Aptitude Test – TCS | 15th March, 2 PM</li>
            <li>📌 Job Fair 2025 – On-Campus Hiring | 25th March, Full Day</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
