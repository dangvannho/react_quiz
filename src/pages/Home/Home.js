import Button from "react-bootstrap/Button";
import "./Home.scss";
import video from "~/assets/videos/hero.mp4";

function Home() {
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
        <Button variant="dark">{`Get started—it's free`} </Button>
      </div>
    </div>
  );
}

export default Home;
