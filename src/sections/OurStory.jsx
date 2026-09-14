import { asset } from '../config/siteConfig';

export default function OurStory() {
  return (
    <section className="section story2">
      <div className="container">
        <div className="head-center">
          <span className="pill pill--light"><i />WHY WE EXIST</span>
          <h2 className="h2">Our Story</h2>
          <p>
            No matter where you come from or what your background is, success in competitive exams
            shouldn't be limited by access. We bridge the gap between potential and opportunity by
            offering personalised, high-quality guidance to students across India.
          </p>
        </div>

        <div className="mosaic">
          <div className="mosaic__text">
            <h3>Our Mission</h3>
            <p>
              To empower ambitious students by providing personalized mentorship, strategic guidance,
              and impactful resources that simplify the journey to India's premier B-schools,
              especially the IIMs. We are committed to nurturing potential and building confidence
              through expert-driven preparation that goes beyond academics.
            </p>
          </div>
          <img src={asset('about-mission.jpg')} alt="Students in a mentoring session" loading="lazy" />
          <img src={asset('about-campus.jpg')} alt="Business school campus" loading="lazy" />
          <div className="mosaic__text">
            <h3>Our Vision</h3>
            <p>
              To be the most trusted and result-oriented platform for IIM aspirants across India,
              recognized for transforming dreams into success stories. VisionIIM aims to redefine the
              B-school preparation experience by creating a supportive, insightful, and high-impact
              ecosystem tailored to each individual's aspirations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}