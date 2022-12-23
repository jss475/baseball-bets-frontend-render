import "../about.css";

function About() {
  return (
    <div>
      <div className="about-title-container">
        <h1 className="about-title">- Our Mission -</h1>
        <h1 className="about-title">Make Baseball Exciting!</h1>
      </div>
      <div className="about-explanation-container">
        <img
          className="about-explanation-img"
          src="https://www.commercialcafe.com/images/72fc3ec2-e584-4045-adfa-41af1abcee3f/11%20Broadway%20Building%20LR.jpg"
          alt="Broadway"
        ></img>
        <div className="about-explanation">
          <h4>The best experience you can ask for!</h4>
          <p>
            It all started with a chance enounter at Flatiron School. James and
            Joe wanted to transform the way that baseball was enjoyed. We've
            heard so many complaints about how the game is too boring and that
            it's too long. We wanted to change this perception of baseball and
            decided to bring this cutting edge technology to enhance the
            experience of the game.{" "}
          </p>

          <p>
            Now any hardcore baseball fan or casual watcher can get the same
            kind of enjoyment. You don't have to tune into every game, but when
            you do, you can also get a taste for victory. Dive in and enjoy the
            moment.
          </p>
        </div>
      </div>

      <div class="embed-responsive container">
        <iframe
          className="about-video"
          src="https://www.youtube.com/embed/r852S0eFSSk"
          title="Edwin Diaz Entrance During Mets' Combined No-Hitter"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default About;
