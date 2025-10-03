import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './Auth.css';

const Signup = () => {
  const [userType, setUserType] = useState<'student' | 'recruiter' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup:', { ...formData, userType });
  };

  if (!userType) {
    return (
      <div className="auth-page">
        <Container>
          <Row className="min-vh-100 align-items-center">
            <Col md={6} className="auth-left d-none d-md-block">
              <div className="auth-illustration">
                <div className="illustration-circle"></div>
                <div className="text-white text-center position-relative">
                  <i className="fas fa-graduation-cap fa-5x mb-4"></i>
                  <h2 className="mb-3">Learn</h2>
                  <p className="lead">from 200+ courses</p>
                  <div className="tech-icons mt-5">
                    <div className="tech-icon">
                      <i className="fab fa-python"></i>
                    </div>
                    <div className="tech-icon">
                      <i className="fab fa-js"></i>
                    </div>
                    <div className="tech-icon">
                      <i className="fab fa-aws"></i>
                    </div>
                    <div className="tech-icon">
                      <i className="fas fa-database"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <Card className="auth-card border-0 shadow-lg">
                <Card.Body className="p-5">
                  <div className="text-center mb-4">
                    <h2 className="fw-bold mb-2">Create a new account</h2>
                    <p className="text-muted">
                      Join Ikroop and find your dream job or recruit talented candidates
                    </p>
                  </div>

                  <div className="user-type-selection">
                    <div
                      className="user-type-card"
                      onClick={() => setUserType('student')}
                    >
                      <div className="check-icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="type-icon">
                        <i className="fas fa-user-graduate"></i>
                      </div>
                      <h5 className="mb-2">Sign up as a Candidate</h5>
                      <p className="text-muted small mb-0">
                        Compete, learn, and apply for jobs and internships
                      </p>
                    </div>

                    <div
                      className="user-type-card"
                      onClick={() => setUserType('recruiter')}
                    >
                      <div className="type-icon">
                        <i className="fas fa-user-tie"></i>
                      </div>
                      <h5 className="mb-2">Sign up as a Recruiter</h5>
                      <p className="text-muted small mb-0">
                        Host competitions, hire talent, and offer career opportunities
                      </p>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <span className="text-muted">Already have an account? </span>
                    <Link to="/login" className="text-primary fw-bold">
                      Login
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <Container>
        <Row className="min-vh-100 align-items-center justify-content-center">
          <Col md={8} lg={6}>
            <Card className="auth-card border-0 shadow-lg">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <Button
                    variant="link"
                    onClick={() => setUserType(null)}
                    className="text-decoration-none mb-3"
                  >
                    <i className="fas fa-arrow-left me-2"></i>
                    Back
                  </Button>
                  <h2 className="fw-bold mb-2">
                    Sign up as {userType === 'student' ? 'Candidate' : 'Recruiter'}
                  </h2>
                  <p className="text-muted">Create your account to get started</p>
                </div>

                <div className="mb-4">
                  <Button variant="outline-primary" className="w-100 mb-3" size="lg">
                    <i className="fab fa-google me-2"></i>
                    Continue with Google
                  </Button>
                  <Button variant="outline-primary" className="w-100" size="lg">
                    <i className="fab fa-linkedin me-2"></i>
                    Continue with LinkedIn
                  </Button>
                </div>

                <div className="divider mb-4">
                  <span>Or sign up with email</span>
                </div>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      size="lg"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      size="lg"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      size="lg"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      size="lg"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Check
                      type="checkbox"
                      label={
                        <span>
                          I agree to the{' '}
                          <Link to="/terms" className="text-primary">
                            Terms & Conditions
                          </Link>{' '}
                          and{' '}
                          <Link to="/privacy" className="text-primary">
                            Privacy Policy
                          </Link>
                        </span>
                      }
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" size="lg" className="w-100 mb-3">
                    Create Account
                  </Button>

                  <div className="text-center">
                    <span className="text-muted">Already have an account? </span>
                    <Link to="/login" className="text-primary fw-bold">
                      Login
                    </Link>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
