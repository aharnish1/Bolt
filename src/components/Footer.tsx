import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="mb-3">
              <i className="fas fa-graduation-cap me-2"></i>
              Ikroop
            </h5>
            <p className="text-white-50">
              Digital Alumni Engagement Platform connecting students, alumni, and institutions for lifelong growth and collaboration.
            </p>
            <div className="social-links mt-3">
              <a href="#" className="text-white me-3"><i className="fab fa-facebook fa-lg"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-twitter fa-lg"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-linkedin fa-lg"></i></a>
              <a href="#" className="text-white"><i className="fab fa-instagram fa-lg"></i></a>
            </div>
          </Col>

          <Col md={2} className="mb-4">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-white-50 text-decoration-none">Home</Link></li>
              <li className="mb-2"><Link to="/alumni-directory" className="text-white-50 text-decoration-none">Alumni Directory</Link></li>
              <li className="mb-2"><Link to="/jobs" className="text-white-50 text-decoration-none">Jobs</Link></li>
              <li className="mb-2"><Link to="/events" className="text-white-50 text-decoration-none">Events</Link></li>
            </ul>
          </Col>

          <Col md={2} className="mb-4">
            <h6 className="mb-3">Resources</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/mentorship" className="text-white-50 text-decoration-none">Mentorship</Link></li>
              <li className="mb-2"><Link to="/donations" className="text-white-50 text-decoration-none">Donations</Link></li>
              <li className="mb-2"><Link to="/dashboard" className="text-white-50 text-decoration-none">Dashboard</Link></li>
              <li className="mb-2"><Link to="/stories" className="text-white-50 text-decoration-none">Success Stories</Link></li>
            </ul>
          </Col>

          <Col md={2} className="mb-4">
            <h6 className="mb-3">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Help Center</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Terms of Service</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Contact Us</a></li>
            </ul>
          </Col>

          <Col md={2} className="mb-4">
            <h6 className="mb-3">Contact</h6>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2"><i className="fas fa-envelope me-2"></i>info@ikroop.edu</li>
              <li className="mb-2"><i className="fas fa-phone me-2"></i>+91 12345 67890</li>
              <li className="mb-2"><i className="fas fa-map-marker-alt me-2"></i>India</li>
            </ul>
          </Col>
        </Row>

        <hr className="bg-white-50 my-4" />

        <Row>
          <Col className="text-center text-white-50">
            <p className="mb-0">
              &copy; 2025 Ikroop - Digital Alumni Engagement Platform. All rights reserved.
              <br />
              <small>SIH Problem Statement ID: 25017</small>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
