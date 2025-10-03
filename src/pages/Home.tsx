import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <section className="hero-section text-center">
        <Container>
          <h1 className="display-4 fw-bold mb-4">Welcome to Ikroop</h1>
          <p className="lead mb-4">
            Connect, Collaborate, and Grow with Your Alumni Network
          </p>
          <p className="fs-5 mb-5">
            Bridge the gap between students, alumni, and institutions through meaningful engagement
          </p>
          <div>
            <Button as={Link} to="/alumni-directory" variant="light" size="lg" className="me-3">
              Explore Alumni
            </Button>
            <Button as={Link} to="/jobs" variant="outline-light" size="lg">
              Find Opportunities
            </Button>
          </div>
        </Container>
      </section>

      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="section-title">Platform Highlights</h2>
          <p className="section-subtitle">
            Everything you need to stay connected with your alumni community
          </p>
        </div>

        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <div className="feature-icon mx-auto">
                  <i className="fas fa-users"></i>
                </div>
                <Card.Title className="mb-3">Alumni Directory</Card.Title>
                <Card.Text className="text-muted">
                  Search and connect with thousands of alumni across different batches, departments, and locations worldwide.
                </Card.Text>
                <Button as={Link} to="/alumni-directory" variant="primary" className="mt-3">
                  Browse Directory
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <div className="feature-icon mx-auto">
                  <i className="fas fa-briefcase"></i>
                </div>
                <Card.Title className="mb-3">Job Portal</Card.Title>
                <Card.Text className="text-muted">
                  Discover exclusive job opportunities and internships posted by alumni and partner companies.
                </Card.Text>
                <Button as={Link} to="/jobs" variant="primary" className="mt-3">
                  View Jobs
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <div className="feature-icon mx-auto">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <Card.Title className="mb-3">Events & Reunions</Card.Title>
                <Card.Text className="text-muted">
                  Stay updated with upcoming alumni events, reunions, webinars, and networking sessions.
                </Card.Text>
                <Button as={Link} to="/events" variant="primary" className="mt-3">
                  Explore Events
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <div className="feature-icon mx-auto">
                  <i className="fas fa-hands-helping"></i>
                </div>
                <Card.Title className="mb-3">Mentorship Programs</Card.Title>
                <Card.Text className="text-muted">
                  Connect with experienced alumni mentors for career guidance and professional development.
                </Card.Text>
                <Button as={Link} to="/mentorship" variant="primary" className="mt-3">
                  Find Mentors
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <div className="feature-icon mx-auto">
                  <i className="fas fa-donate"></i>
                </div>
                <Card.Title className="mb-3">Donations & Campaigns</Card.Title>
                <Card.Text className="text-muted">
                  Support your alma mater through donations and participate in fundraising campaigns.
                </Card.Text>
                <Button as={Link} to="/donations" variant="primary" className="mt-3">
                  Contribute Now
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 text-center">
              <Card.Body>
                <div className="feature-icon mx-auto">
                  <i className="fas fa-star"></i>
                </div>
                <Card.Title className="mb-3">Success Stories</Card.Title>
                <Card.Text className="text-muted">
                  Read inspiring stories and achievements of our distinguished alumni community.
                </Card.Text>
                <Button as={Link} to="/stories" variant="primary" className="mt-3">
                  Read Stories
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <section className="bg-light py-5 mt-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="mb-4">Join Our Growing Community</h2>
              <p className="lead mb-4">
                Be part of a vibrant network of 50,000+ alumni across 100+ countries.
              </p>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Network with industry leaders and professionals
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Access exclusive career opportunities
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Participate in mentorship programs
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Attend alumni events and reunions
                </li>
              </ul>
              <Button as={Link} to="/signup" variant="primary" size="lg" className="mt-3">
                Get Started Today
              </Button>
            </Col>
            <Col md={6}>
              <div className="text-center">
                <i className="fas fa-graduation-cap" style={{ fontSize: '15rem', color: '#0d6efd', opacity: 0.1 }}></i>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
