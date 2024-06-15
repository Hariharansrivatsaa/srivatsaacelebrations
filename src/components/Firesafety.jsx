import React, { useEffect } from "react";
import firesafety from "../Assets/Images/firesafety.webp";

const Firesafety = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="my-5">
        <div className="container">
          <h2>Fire Safety Tips</h2>
          <div className="row my-5">
            <div className="col-lg-5">
              <div className="aligntext">
                <img
                  src={firesafety}
                  alt="firesafety"
                  className="firesafetyimage"
                />
              </div>
            </div>
            <div className="col-lg-7 my-auto">
              <h4>Safety Tips :</h4>
              <p>
                All fireworks-related accidents are the consequence of
                carelessness, stupidity, or ignorance. However, these can be
                easily prevented by taking a few basic precautions. Everyone
                enjoys the pleasures of light and melody, but when calamity
                hits, the injured must face the anguish. If you plan to set off
                fireworks at home this year, please read the guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <h2>Do's & Don'ts & While Bursting Crackers</h2>
          <h3>Do's :</h3>
          <p>
            <li className="paraspacing">Use fireworks only in the outdoors.</li>
            <li className="paraspacing">Buy fireworks of authorized/reputed manufacturers only.</li>
            <li className="paraspacing">
              Light only one firework at a time, by one person. Others should
              watch from a safe distance.
            </li>
            <li className="paraspacing">
              We request you not to accept any parcel in a damaged condition. We
              are working hard to make our transportation system to deliver
              every order in a good condition.
            </li>
            <li className="paraspacing">Keep the fireworks to be used at a safer place.</li>
            <li className="paraspacing">
              Organize a community display of fireworks rather than individuals
              handling crackers.
            </li>
            <li className="paraspacing">
              Always use a long candle `phooljhari` for igniting fire crackers
              and keep elbow joint straight to increase the distance between the
              body and the crackers.Keep two buckets of water handy. In the
              event of fire, extinguish flame by pouring water from the buckets.
              Every major fire is small when it starts.
            </li>
            <li className="paraspacing">
              In case of burns, pour large quantity of water on the burnt area.
            </li>
            <li className="paraspacing">
              In case of major burns, after extinguishing the fire, remove all
              smoldering clothes. Wrap the victim in a clean bed sheet.
            </li>
            <li className="paraspacing">
              The patient should be taken to a burns specialist or a major
              hospital. Don`t panicky.
            </li>
            <li className="paraspacing">
              In case of eye burns, wash the eye with tap water for 10 minutes
              and take the victim to a hospital.
            </li>
          </p>
          <h3>Don'ts :</h3>
          <p>
            <li className="paraspacing">Don't ignite fireworks while holding them.</li>
            <li className="paraspacing">Don't bend over the fireworks being ignited.</li>
            <li className="paraspacing">Don't ignite fireworks in any container.</li>
            <li className="paraspacing">Don't approach immediately to the misfired fireworks.</li>
            <li className="paraspacing">Don't tamper with misfired fireworks.</li>
            <li className="paraspacing">Don't attempt to make fireworks at home.</li>
            <li className="paraspacing">Don't allow small children to handle fireworks.</li>
            <li className="paraspacing">Don't throw or point fireworks at other people.</li>
            <li className="paraspacing">Don't carry fireworks in the pocket.</li>
            <li className="paraspacing">Don't store firecrackers near burning candles and diyas.</li>
            <li className="paraspacing">
              Don't light firecrackers in narrow by lanes; preferably use open
              areas and parks.
            </li>
            <li className="paraspacing">
              Don't wear synthetic clothing; preferably wear thick cotton
              clothing.
            </li>
            <li className="paraspacing">
              Don't wear loosely hanging clothes; secure all clothes properly.
            </li>
            <li className="paraspacing">Don't apply any cream or ointment or oil on burnt area.</li>
            <li className="paraspacing">
              Don't drive recklessly while taking a burn victim to the hospital;
              a delay of up to one hour is immaterial.
            </li>
          </p>
        </div>
      </section>
    </>
  );
};

export default Firesafety;
