import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const demoCredentials = [
    { email: 'student@demo.com', password: 'demo123', role: 'Student' },
    { email: 'alumni@demo.com', password: 'demo123', role: 'Alumni' },
    { email: 'admin@demo.com', password: 'demo123', role: 'College Admin' },
    { email: 'faculty@demo.com', password: 'demo123', role: 'College Faculty' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
    navigate('/dashboard');
  };

  const handleDemoLogin = (demoEmail: string, demoPassword: string) => {
    setEmail(demoEmail);
    setPassword(demoPassword);
    setTimeout(() => {
      navigate('/dashboard');
    }, 500);
  };

  return (
    <div className="auth-page">
      <Container>
        <Row className="min-vh-100 align-items-center">
          <Col md={6} className="auth-left d-none d-md-block">
            <div className="auth-illustration">
              <div className="illustration-circle"></div>
              <div className="text-white text-center position-relative">
                <i className="fas fa-laptop-code fa-5x mb-4"></i>
                <h2 className="mb-3">Practice</h2>
                <p className="lead">Easy to complex problems</p>
                <div className="feature-cards mt-5">
                  <div className="feature-card">
                    <div className="feature-badge">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div>5-Day Interview Prep</div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-badge">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div>Mock Interviews</div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-badge">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div>100-Day Coding Sprint</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <Card className="auth-card border-0 shadow-lg">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <h2 className="fw-bold mb-2">Log in</h2>
                  <p className="text-muted">Welcome back! Please login to your account</p>
                </div>

                <Alert variant="info" className="py-2">
                  <strong>Demo Access:</strong>
                  <div className="mt-2">
                    {demoCredentials.map((cred, idx) => (
                      <Button
                        key={idx}
                        variant="outline-primary"
                        size="sm"
                        className="me-2 mb-2"
                        onClick={() => handleDemoLogin(cred.email, cred.password)}
                      >
                        {cred.role}
                      </Button>
                    ))}
                  </div>
                </Alert>

                <div className="mb-4">
                  <Button variant="outline-primary" className="w-100 mb-3" size="lg">
                    <i className="fab fa-google me-2"></i>
                    Continue with Google
                  </Button>
                  <Button variant="outline-primary" className="w-100" size="lg">
                    <i className="fab fa-linkedin me-2"></i>
                    Login with LinkedIn
                  </Button>
                </div>

                <div className="divider mb-4">
                  <span>Or login with email</span>
                </div>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Id</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      size="lg"
                      required
                    />
                  </Form.Group>

                  <div className="mb-3">
                    <Link to="/forgot-password" className="text-primary small">
                      Login via OTP
                    </Link>
                  </div>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <div className="position-relative">
                      <Form.Control
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        size="lg"
                        required
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                      </button>
                    </div>
                  </Form.Group>

                  <div className="mb-4 text-end">
                    <Link to="/forgot-password" className="text-primary">
                      <i className="fas fa-lock me-1"></i>
                      Forgot password?
                    </Link>
                  </div>

                  <Button variant="primary" type="submit" size="lg" className="w-100 mb-3">
                    Login
                  </Button>

                  <div className="text-center">
                    <span className="text-muted">Don't have an account? </span>
                    <Link to="/signup" className="text-primary fw-bold">
                      Sign up
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

export default Login;
