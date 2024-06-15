import React, { useEffect } from "react";

const Hari = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto ms-auto">
              <h6 className="foundertitle">
                A Message from the Co-Founder and the Chief Executive Officer
                Desk
              </h6>
              <p className="founderpara">
                Our first vision was to make Srivatsaa Celebration the leading
                leader in Fireworks Retail, making it the number one Fireworks
                Retail organization in the region. We believe that having a
                vision for the future will guide us in both our personal and
                professional lives.
              </p>
              <p className="founderpara">
                Srivatsaa Celebration believes that excellence and exceptional
                results are achieved through a collaborative effort to create a
                balanced combination of quality, integrity, innovation,
                continuous development, and value enhancement; this provides us
                with endless promising opportunities to increase our market
                share in the fireworks industry.
              </p>
              <p className="founderpara">
                Our reputation and driving force are always derived from how
                deeply we collaborate with our clients to achieve their
                objectives. Honesty is the most important aspect in establishing
                such collaborations; our clients' confidence, in turn, will
                ensure that we achieve the desired objectives. Undoubtedly,
                these results produce all of the necessary expected outcomes.
              </p>
              <p className="founderpara">
                Srivatsaa Celebration is constantly well-prepared to face market
                problems and adapt to the ever-changing industrial environment,
                thanks to our extensive experience in the fireworks sector and
                intelligent adaptability. This stability protects stakeholders'
                interests and ensures the company's consistent expansion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hari;
