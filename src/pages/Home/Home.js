import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Home.scss";
import video from "~/assets/videos/hero.mp4";
import { isAuthenticateSelector } from "~/redux/selectors";
import config from "~/config";

function Home() {
  const isAuthenticate = useSelector(isAuthenticateSelector);
  const navigate = useNavigate();

  return (
    <div className="homepage-hero">
      <video autoPlay muted loop playsInline className="video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="hero-info">
        <h1 className="hero-title">Make forms worth filling out</h1>
        <p className="hero-desc">
          Get more data—like signups, feedback, and anything else—with forms
          designed to be
          <strong> refreshingly different.</strong>
        </p>
        {isAuthenticate ? (
          <Button variant="dark" onClick={() => navigate(config.routes.user)}>
            Doing Quiz Now
          </Button>
        ) : (
          <Button variant="dark" onClick={() => navigate(config.routes.login)}>
            {`Get started—it's free`}{" "}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Home;
