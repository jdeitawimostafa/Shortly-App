import Button from "@mui/material/Button";
import "../css/Homepage.css";
import Linkform from "./LinkForm";
import Stepper from "./Steppers";

export default function Homepage() {
  return (
    <div className="contianer">
      <div className="welcome-container">
        <div className="text-section">
          <p className="main-title">More than just shorter links</p>
          <p className="quote-title">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button className="get-start-btn" variant="text">
            Get Started
          </Button>
        </div>
        <div className="img-div">
          <img
            className="office-img"
            src="/assets/icons/illustration-working.svg"
            alt="office"
          />
        </div>
      </div>
      <div className="form-statistics-container">
        {<Linkform />}
        <div className="advanced-statis-container">
          <p className="advanced-title">Adnaced Statistics</p>
          <p className="advanced-quote">
            Track how your links are performing across the web
          </p>
          <p className="advanced-quote">
            {" "}
            with our advanced statistics dashboard.
          </p>
          {<Stepper />}
        </div>
        <div className="boost-wave-section">
          <img
            className="boost-wave"
            src="/assets/icons/bg-boost-desktop.svg"
            alt="wave"
          />
          <div className="boost-wave-div">
            <p className="boost-wave-title">Boost your links today</p>
            <Button className="get-start-btn" variant="text">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
