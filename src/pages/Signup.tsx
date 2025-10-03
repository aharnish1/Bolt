import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, ProgressBar } from 'react-bootstrap';
import './Auth.css';

type UserRole = 'student' | 'alumni' | 'recruiter' | 'admin' | 'faculty' | null;

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
  graduationYear?: string;
  currentYear?: string;
  rollNumber?: string;
  department?: string;
  company?: string;
  companyWebsite?: string;
  position?: string;
  designation?: string;
  experience?: string;
  linkedin?: string;
  phone?: string;
  registrationTime: string;
}

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<'student_alumni' | 'recruiter' | 'college' | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: null,
    phone: '',
    linkedin: '',
    registrationTime: new Date().toISOString()
  });

  const handleUserTypeSelect = (type: 'student_alumni' | 'recruiter' | 'college') => {
    setUserType(type);
    setStep(2);
  };

  const handleRoleSelect = (role: UserRole) => {
    setFormData({ ...formData, role });
    setStep(3);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step === 2 && userType) {
      setStep(1);
      setUserType(null);
    } else if (step > 2) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup:', formData);
    navigate('/dashboard');
  };

  const updateFormData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const progress = (step / 5) * 100;

  if (step === 1) {
    return (
      <div className="auth-page">
        <Container>
          <Row className="min-vh-100 align-items-center">
            <Col md={6} className="auth-left d-none d-md-block">
              <div className="auth-illustration">
                <div className="illustration-circle"></div>
                <div className="text-white text-center position-relative">
                  <i className="fas fa-graduation-cap fa-5x mb-4"></i>
                  <h2 className="mb-3">Join Our Alumni Network</h2>
                  <p className="lead">Connect, Grow, and Give Back</p>
                  <div className="tech-icons mt-5">
                    <div className="tech-icon">
                      <i className="fas fa-users"></i>
                    </div>
                    <div className="tech-icon">
                      <i className="fas fa-briefcase"></i>
                    </div>
                    <div className="tech-icon">
                      <i className="fas fa-handshake"></i>
                    </div>
                    <div className="tech-icon">
                      <i className="fas fa-heart"></i>
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
                    <p className="text-muted">Choose your account type to get started</p>
                  </div>

                  <div className="user-type-selection">
                    <div
                      className="user-type-card"
                      onClick={() => handleUserTypeSelect('student_alumni')}
                    >
                      <div className="type-icon">
                        <i className="fas fa-user-graduate"></i>
                      </div>
                      <h5 className="mb-2">Sign up as Alumni / Student</h5>
                      <p className="text-muted small mb-0">
                        Connect with peers, find opportunities, and give back
                      </p>
                    </div>

                    <div
                      className="user-type-card"
                      onClick={() => handleUserTypeSelect('recruiter')}
                    >
                      <div className="type-icon">
                        <i className="fas fa-user-tie"></i>
                      </div>
                      <h5 className="mb-2">Sign up as Recruiter</h5>
                      <p className="text-muted small mb-0">
                        Post jobs, find talent, and build your team
                      </p>
                    </div>

                    <div
                      className="user-type-card"
                      onClick={() => handleUserTypeSelect('college')}
                    >
                      <div className="type-icon">
                        <i className="fas fa-university"></i>
                      </div>
                      <h5 className="mb-2">Sign up as College Admin / Faculty</h5>
                      <p className="text-muted small mb-0">
                        Manage alumni, organize events, and track engagement
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

  if (step === 2 && userType === 'student_alumni') {
    return (
      <div className="auth-page">
        <Container>
          <Row className="min-vh-100 align-items-center justify-content-center">
            <Col md={8} lg={6}>
              <Card className="auth-card border-0 shadow-lg">
                <Card.Body className="p-5">
                  <Button
                    variant="link"
                    onClick={handleBack}
                    className="text-decoration-none mb-3 p-0"
                  >
                    <i className="fas fa-arrow-left me-2"></i>
                    Back
                  </Button>

                  <ProgressBar now={progress} className="mb-4" style={{ height: '6px' }} />

                  <div className="text-center mb-4">
                    <h2 className="fw-bold mb-2">Select Your Role</h2>
                    <p className="text-muted">Are you a current student or an alumni?</p>
                  </div>

                  <div className="user-type-selection">
                    <div
                      className="user-type-card"
                      onClick={() => handleRoleSelect('student')}
                    >
                      <div className="type-icon">
                        <i className="fas fa-user-graduate"></i>
                      </div>
                      <h5 className="mb-2">Student</h5>
                      <p className="text-muted small mb-0">
                        I am currently studying at the institution
                      </p>
                    </div>

                    <div
                      className="user-type-card"
                      onClick={() => handleRoleSelect('alumni')}
                    >
                      <div className="type-icon">
                        <i className="fas fa-graduation-cap"></i>
                      </div>
                      <h5 className="mb-2">Alumni</h5>
                      <p className="text-muted small mb-0">
                        I have graduated from the institution
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  if (step === 2 && userType === 'college') {
    return (
      <div className="auth-page">
        <Container>
          <Row className="min-vh-100 align-items-center justify-content-center">
            <Col md={8} lg={6}>
              <Card className="auth-card border-0 shadow-lg">
                <Card.Body className="p-5">
                  <Button
                    variant="link"
                    onClick={handleBack}
                    className="text-decoration-none mb-3 p-0"
                  >
                    <i className="fas fa-arrow-left me-2"></i>
                    Back
                  </Button>

                  <ProgressBar now={progress} className="mb-4" style={{ height: '6px' }} />

                  <div className="text-center mb-4">
                    <h2 className="fw-bold mb-2">Select Your Role</h2>
                    <p className="text-muted">Choose your role at the institution</p>
                  </div>

                  <div className="user-type-selection">
                    <div
                      className="user-type-card"
                      onClick={() => handleRoleSelect('admin')}
                    >
                      <div className="type-icon">
                        <i className="fas fa-user-shield"></i>
                      </div>
                      <h5 className="mb-2">College Admin</h5>
                      <p className="text-muted small mb-0">
                        Manage platform and oversee all activities
                      </p>
                    </div>

                    <div
                      className="user-type-card"
                      onClick={() => handleRoleSelect('faculty')}
                    >
                      <div className="type-icon">
                        <i className="fas fa-chalkboard-teacher"></i>
                      </div>
                      <h5 className="mb-2">College Faculty</h5>
                      <p className="text-muted small mb-0">
                        Connect with students and alumni
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="auth-page">
        <Container>
          <Row className="min-vh-100 align-items-center justify-content-center">
            <Col md={8} lg={6}>
              <Card className="auth-card border-0 shadow-lg">
                <Card.Body className="p-5">
                  <Button
                    variant="link"
                    onClick={handleBack}
                    className="text-decoration-none mb-3 p-0"
                  >
                    <i className="fas fa-arrow-left me-2"></i>
                    Back
                  </Button>

                  <ProgressBar now={progress} className="mb-4" style={{ height: '6px' }} />

                  <div className="text-center mb-4">
                    <h2 className="fw-bold mb-2">Basic Information</h2>
                    <p className="text-muted">
                      Signing up as {formData.role === 'student' ? 'Student' :
                                    formData.role === 'alumni' ? 'Alumni' :
                                    formData.role === 'recruiter' ? 'Recruiter' :
                                    formData.role === 'admin' ? 'College Admin' : 'Faculty'}
                    </p>
                  </div>

                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => updateFormData('name', e.target.value)}
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
                        onChange={(e) => updateFormData('email', e.target.value)}
                        size="lg"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => updateFormData('phone', e.target.value)}
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
                        onChange={(e) => updateFormData('password', e.target.value)}
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
                        onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                        size="lg"
                        required
                      />
                    </Form.Group>

                    <Button
                      variant="primary"
                      size="lg"
                      className="w-100"
                      onClick={handleNext}
                    >
                      Continue
                      <i className="fas fa-arrow-right ms-2"></i>
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  if (step === 4) {
    return (
      <div className="auth-page">
        <Container>
          <Row className="min-vh-100 align-items-center justify-content-center">
            <Col md={8} lg={6}>
              <Card className="auth-card border-0 shadow-lg">
                <Card.Body className="p-5">
                  <Button
                    variant="link"
                    onClick={handleBack}
                    className="text-decoration-none mb-3 p-0"
                  >
                    <i className="fas fa-arrow-left me-2"></i>
                    Back
                  </Button>

                  <ProgressBar now={progress} className="mb-4" style={{ height: '6px' }} />

                  <div className="text-center mb-4">
                    <h2 className="fw-bold mb-2">Professional Details</h2>
                    <p className="text-muted">Tell us more about yourself</p>
                  </div>

                  <Form>
                    {formData.role === 'student' && (
                      <>
                        <Form.Group className="mb-3">
                          <Form.Label>Department</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="e.g., Computer Science"
                            value={formData.department}
                            onChange={(e) => updateFormData('department', e.target.value)}
                            size="lg"
                            required
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Current Year</Form.Label>
                          <Form.Select
                            value={formData.currentYear}
                            onChange={(e) => updateFormData('currentYear', e.target.value)}
                            size="lg"
                            required
                          >
                            <option value="">Select Year</option>
                            <option value="1">1st Year</option>
                            <option value="2">2nd Year</option>
                            <option value="3">3rd Year</option>
                            <option value="4">4th Year</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Roll Number</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your roll number"
                            value={formData.rollNumber}
                            onChange={(e) => updateFormData('rollNumber', e.target.value)}
                            size="lg"
                            required
                          />
                        </Form.Group>
                      </>
                    )}

                    {formData.role === 'alumni' && (
                      <>
                        <Form.Group className="mb-3">
                          <Form.Label>Department</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="e.g., Computer Science"
                            value={formData.department}
                            onChange={(e) => updateFormData('department', e.target.value)}
                            size="lg"
                            required
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Graduation Year</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="e.g., 2020"
                            value={formData.graduationYear}
                            onChange={(e) => updateFormData('graduationYear', e.target.value)}
                            size="lg"
                            required
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Current Company</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your company name"
                            value={formData.company}
                            onChange={(e) => updateFormData('company', e.target.value)}
                            size="lg"
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Current Position</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="e.g., Software Engineer"
                            value={formData.position}
                            onChange={(e) => updateFormData('position', e.target.value)}
                            size="lg"
                          />
                        </Form.Group>
                      </>
                    )}

                    {formData.role === 'recruiter' && (
                      <>
                        <Form.Group className="mb-3">
                          <Form.Label>Company Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter company name"
                            value={formData.company}
                            onChange={(e) => updateFormData('company', e.target.value)}
                            size="lg"
                            required
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Company Website</Form.Label>
                          <Form.Control
                            type="url"
                            placeholder="https://example.com"
                            value={formData.companyWebsite}
                            onChange={(e) => updateFormData('companyWebsite', e.target.value)}
                            size="lg"
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Your Designation</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="e.g., HR Manager"
                            value={formData.designation}
                            onChange={(e) => updateFormData('designation', e.target.value)}
                            size="lg"
                            required
                          />
                        </Form.Group>
                      </>
                    )}

                    {(formData.role === 'admin' || formData.role === 'faculty') && (
                      <>
                        <Form.Group className="mb-3">
                          <Form.Label>Department</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your department"
                            value={formData.department}
                            onChange={(e) => updateFormData('department', e.target.value)}
                            size="lg"
                            required
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Designation</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="e.g., Professor, Admin Officer"
                            value={formData.designation}
                            onChange={(e) => updateFormData('designation', e.target.value)}
                            size="lg"
                            required
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Years of Experience</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter years"
                            value={formData.experience}
                            onChange={(e) => updateFormData('experience', e.target.value)}
                            size="lg"
                          />
                        </Form.Group>
                      </>
                    )}

                    <Form.Group className="mb-4">
                      <Form.Label>LinkedIn Profile (Optional)</Form.Label>
                      <Form.Control
                        type="url"
                        placeholder="https://linkedin.com/in/yourprofile"
                        value={formData.linkedin}
                        onChange={(e) => updateFormData('linkedin', e.target.value)}
                        size="lg"
                      />
                    </Form.Group>

                    <Button
                      variant="primary"
                      size="lg"
                      className="w-100"
                      onClick={handleNext}
                    >
                      Continue
                      <i className="fas fa-arrow-right ms-2"></i>
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  if (step === 5) {
    return (
      <div className="auth-page">
        <Container>
          <Row className="min-vh-100 align-items-center justify-content-center">
            <Col md={8} lg={6}>
              <Card className="auth-card border-0 shadow-lg">
                <Card.Body className="p-5">
                  <Button
                    variant="link"
                    onClick={handleBack}
                    className="text-decoration-none mb-3 p-0"
                  >
                    <i className="fas fa-arrow-left me-2"></i>
                    Back
                  </Button>

                  <ProgressBar now={100} className="mb-4" style={{ height: '6px' }} />

                  <div className="text-center mb-4">
                    <div className="mb-3">
                      <i className="fas fa-check-circle text-success" style={{ fontSize: '48px' }}></i>
                    </div>
                    <h2 className="fw-bold mb-2">Review & Complete</h2>
                    <p className="text-muted">Please review your information before submitting</p>
                  </div>

                  <div className="mb-4 p-3 bg-light rounded">
                    <div className="mb-2">
                      <strong>Name:</strong> {formData.name}
                    </div>
                    <div className="mb-2">
                      <strong>Email:</strong> {formData.email}
                    </div>
                    <div className="mb-2">
                      <strong>Role:</strong> {formData.role?.charAt(0).toUpperCase() + formData.role?.slice(1)}
                    </div>
                    {formData.department && (
                      <div className="mb-2">
                        <strong>Department:</strong> {formData.department}
                      </div>
                    )}
                    {formData.company && (
                      <div className="mb-2">
                        <strong>Company:</strong> {formData.company}
                      </div>
                    )}
                    {formData.graduationYear && (
                      <div className="mb-2">
                        <strong>Graduation Year:</strong> {formData.graduationYear}
                      </div>
                    )}
                    <div className="mb-2">
                      <strong>Registration Date:</strong> {new Date(formData.registrationTime).toLocaleDateString()}
                    </div>
                  </div>

                  <Form onSubmit={handleSubmit}>
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
                      <i className="fas fa-check me-2"></i>
                      Complete Registration
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
  }

  return null;
};

export default Signup;
