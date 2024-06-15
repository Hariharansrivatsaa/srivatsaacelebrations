import React, { useEffect } from "react";

const Privacypolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="my-5">
        <div className="container">
          <h2>Privacy Policy</h2>
          <p>
            Welcome to Srivatsaa celebrations! We are committed to respecting
            your privacy and handling your personal information in a secure and
            responsible manner. This Privacy Policy describes how we collect,
            use, disclose, and protect your information when you visit our
            website, www.srivatsaacelebrations.com, and buy our products.
          </p>
          <h5>Information We Collect</h5>
          <p>
            <li className="paraspacing">
              <span className="spantag">Personal Information :</span> When you
              make a purchase or register on our website, we gather information
              such as your name, email address, mailing address, phone number,
              and payment method.
            </li>
            <li className="paraspacing">
              <span className="spantag"> Non-Personal Information :</span> We
              collect non-personal information such as your browser type,
              operating system, IP address, and website usage data via cookies
              and other tracking technologies.
            </li>
          </p>
          <h5>How We Use Your Information</h5>
          <p>
            <li className="paraspacing">
              <span className="spantag">To Process Transactions :</span> We
              utilize your personal information to process orders, manage
              accounts, and provide customer care.
            </li>
            <li className="paraspacing">
              <span className="spantag">To Improve Our Website :</span> We
              utilize non-personal information to make our website more
              functional, improve the user experience, and evaluate site
              traffic.
            </li>
            <li className="paraspacing">
              <span className="spantag">To Communicate with You :</span> We may
              use your contact information to send you updates, promotional
              offers, or newsletters. You may opt out of these notifications at
              any time.
            </li>
          </p>
          <h5>How We Protect Your Information</h5>
          <p>
            We use a variety of security procedures to protect your personal
            information. This involves using secure servers, encrypting critical
            information, and conducting regular security assessments. Despite
            these safeguards, no mode of transmission over the internet is
            completely secure, and we cannot guarantee full security.
          </p>
          <h5>Sharing Your Information</h5>
          <p>
            We do not sell, trade, or otherwise transmit your personal
            information to third parties without your consent, except in the
            following circumstances:
            <br />
            <li className="paraspacing">
              <span className="spantag">Service Providers :</span> We may share
              information with third-party service providers who help us run our
              website, perform our business, or serve you, as long as they agree
              to keep this information confidential.
            </li>
            <li className="paraspacing">
              <span className="spantag">Legal Compliance :</span> We may release
              your personal information as required by law or in response to
              legal requests.
            </li>
          </p>
          <h5>Cookies and Tracking Technologies</h5>
          <p>
            Our website employs cookies and other tracking technologies to
            improve your browsing experience and collect data about site usage.
            You can disable cookies in your browser settings, but this may limit
            your ability to access some elements of our website.
          </p>
          <h5>Your Rights</h5>
          <p>
            <li className="paraspacing">
              <span className="spantag"> Access and Correction :</span> You have
              the right to see and rectify your personal information. You can do
              this by accessing your account or contacting us directly.
            </li>
            <li className="paraspacing">
              <span className="spantag">Deletion and Restriction : </span>You
              have the right to request that your personal information be
              deleted or restricted in certain circumstances.
            </li>
            <li className="paraspacing">
              <span className="spantag">Opt-Out : </span> You may opt out of
              receiving promotional messages from us by following the
              unsubscribe instructions included in those emails.
            </li>
          </p>
          <h5>Changes to Our Privacy Policy</h5>
          <p>
            We may periodically amend our Privacy Policy. Any updates will be
            placed on this page, and any substantial changes will be
            communicated to you via email or a notice on our website.
          </p>
          <h5>Contact Us</h5>
          <p>
            If you have any questions or complaints regarding our privacy
            policy, please contact us at:
          </p>
          <p>Srivatsaa Celebrations</p>
          <p>www.srivatsaacelebrations.com</p>
          <p>Email: contact@srivatsaacelebrations.com</p>
          <p>Phone: +91-9043360340</p>
        </div>
      </section>
    </>
  );
};

export default Privacypolicy;
