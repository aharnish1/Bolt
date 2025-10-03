import { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Modal, Form, Tab, Tabs } from 'react-bootstrap';

const Profile = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDigitalCard, setShowDigitalCard] = useState(false);
  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    role: 'Alumni',
    department: 'Computer Science',
    graduationYear: '2020',
    company: 'Google',
    position: 'Software Engineer',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/johndoe',
    bio: 'Passionate software engineer with 5+ years of experience in building scalable web applications. Alumni of XYZ College, Class of 2020.',
    skills: ['React', 'Node.js', 'Python', 'AWS', 'Docker'],
    achievements: [
      'Led development of major feature serving 1M+ users',
      'Speaker at Tech Conference 2023',
      'Mentored 10+ junior developers'
    ]
  });

  const education = [
    {
      institution: 'XYZ College',
      degree: 'Bachelor of Technology',
      field: 'Computer Science',
      year: '2016 - 2020',
      grade: '3.8 GPA'
    }
  ];

  const experience = [
    {
      company: 'Google',
      position: 'Software Engineer',
      duration: '2021 - Present',
      description: 'Working on cloud infrastructure and scalability solutions'
    },
    {
      company: 'Microsoft',
      position: 'Junior Developer',
      duration: '2020 - 2021',
      description: 'Developed features for Microsoft Azure platform'
    }
  ];

  const handleEditProfile = () => {
    setShowEditModal(true);
  };

  const handleSaveProfile = () => {
    setShowEditModal(false);
    setEditing(false);
  };

  return (
    <div className="page-wrapper">
      <Container>
        <Row className="g-4">
          <Col lg={4}>
            <Card className="shadow-sm mb-4">
              <Card.Body className="text-center">
                <div className="mb-3">
                  <img
                    src="https://ui-avatars.com/api/?name=John+Doe&size=150&background=0d6efd&color=fff"
                    alt="Profile"
                    className="rounded-circle"
                    style={{ width: '150px', height: '150px' }}
                  />
                </div>
                <h4 className="mb-1">{profile.name}</h4>
                <p className="text-muted mb-2">{profile.position}</p>
                <p className="text-muted mb-3">
                  <i className="fas fa-building me-2"></i>
                  {profile.company}
                </p>
                <Badge bg="primary" className="mb-3">{profile.role}</Badge>

                <div className="d-grid gap-2 mb-3">
                  <Button variant="primary" onClick={handleEditProfile}>
                    <i className="fas fa-edit me-2"></i>
                    Edit Profile
                  </Button>
                  <Button variant="outline-primary" onClick={() => setShowDigitalCard(true)}>
                    <i className="fas fa-id-card me-2"></i>
                    View Digital Card
                  </Button>
                </div>

                <div className="text-start border-top pt-3">
                  <div className="mb-2">
                    <i className="fas fa-envelope text-primary me-2"></i>
                    <small>{profile.email}</small>
                  </div>
                  <div className="mb-2">
                    <i className="fas fa-phone text-primary me-2"></i>
                    <small>{profile.phone}</small>
                  </div>
                  <div className="mb-2">
                    <i className="fas fa-map-marker-alt text-primary me-2"></i>
                    <small>{profile.location}</small>
                  </div>
                  <div className="mb-2">
                    <i className="fab fa-linkedin text-primary me-2"></i>
                    <small>{profile.linkedin}</small>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card className="shadow-sm">
              <Card.Body>
                <h6 className="mb-3">Skills</h6>
                <div className="d-flex flex-wrap gap-2">
                  {profile.skills.map((skill, idx) => (
                    <Badge key={idx} bg="light" text="dark" className="px-3 py-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={8}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <h5 className="mb-3">About</h5>
                <p className="text-muted">{profile.bio}</p>
              </Card.Body>
            </Card>

            <Card className="shadow-sm mb-4">
              <Card.Body>
                <h5 className="mb-3">Experience</h5>
                {experience.map((exp, idx) => (
                  <div key={idx} className={`${idx !== experience.length - 1 ? 'mb-4 pb-4 border-bottom' : ''}`}>
                    <div className="d-flex align-items-start">
                      <div
                        className="bg-primary bg-opacity-10 text-primary rounded d-flex align-items-center justify-content-center me-3"
                        style={{ width: '50px', height: '50px', minWidth: '50px' }}
                      >
                        <i className="fas fa-briefcase fa-lg"></i>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1">{exp.position}</h6>
                        <p className="text-muted mb-1">{exp.company}</p>
                        <small className="text-muted">
                          <i className="far fa-calendar me-1"></i>
                          {exp.duration}
                        </small>
                        <p className="mt-2 mb-0">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>

            <Card className="shadow-sm mb-4">
              <Card.Body>
                <h5 className="mb-3">Education</h5>
                {education.map((edu, idx) => (
                  <div key={idx}>
                    <div className="d-flex align-items-start">
                      <div
                        className="bg-success bg-opacity-10 text-success rounded d-flex align-items-center justify-content-center me-3"
                        style={{ width: '50px', height: '50px', minWidth: '50px' }}
                      >
                        <i className="fas fa-graduation-cap fa-lg"></i>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1">{edu.degree}</h6>
                        <p className="text-muted mb-1">{edu.institution}</p>
                        <small className="text-muted">
                          <i className="far fa-calendar me-1"></i>
                          {edu.year} | {edu.grade}
                        </small>
                        <p className="mt-1 mb-0"><strong>Field:</strong> {edu.field}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>

            <Card className="shadow-sm">
              <Card.Body>
                <h5 className="mb-3">Achievements</h5>
                {profile.achievements.map((achievement, idx) => (
                  <div key={idx} className="d-flex align-items-start mb-3">
                    <i className="fas fa-trophy text-warning me-3 mt-1"></i>
                    <p className="mb-0">{achievement}</p>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs defaultActiveKey="basic" className="mb-3">
            <Tab eventKey="basic" title="Basic Info">
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="tel"
                        value={profile.phone}
                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Location</Form.Label>
                      <Form.Control
                        type="text"
                        value={profile.location}
                        onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Bio</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  />
                </Form.Group>
              </Form>
            </Tab>

            <Tab eventKey="professional" title="Professional">
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Current Company</Form.Label>
                      <Form.Control
                        type="text"
                        value={profile.company}
                        onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Position</Form.Label>
                      <Form.Control
                        type="text"
                        value={profile.position}
                        onChange={(e) => setProfile({ ...profile, position: e.target.value })}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>LinkedIn Profile</Form.Label>
                  <Form.Control
                    type="text"
                    value={profile.linkedin}
                    onChange={(e) => setProfile({ ...profile, linkedin: e.target.value })}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Skills (comma separated)</Form.Label>
                  <Form.Control
                    type="text"
                    value={profile.skills.join(', ')}
                    onChange={(e) => setProfile({ ...profile, skills: e.target.value.split(',').map(s => s.trim()) })}
                  />
                </Form.Group>
              </Form>
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveProfile}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDigitalCard} onHide={() => setShowDigitalCard(false)} centered>
        <Modal.Body className="p-0">
          <div className="digital-card" style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '40px',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1 }}>
              <i className="fas fa-graduation-cap" style={{ fontSize: '200px', position: 'absolute', top: '-50px', right: '-50px' }}></i>
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="text-center mb-4">
                <img
                  src="https://ui-avatars.com/api/?name=John+Doe&size=100&background=fff&color=667eea"
                  alt="Profile"
                  className="rounded-circle mb-3"
                  style={{ width: '100px', height: '100px', border: '4px solid white' }}
                />
                <h3 className="mb-1">{profile.name}</h3>
                <p className="mb-1">{profile.position}</p>
                <p className="mb-0"><small>{profile.company}</small></p>
              </div>

              <div className="border-top border-bottom border-white border-opacity-50 py-3 mb-3">
                <Row className="text-center">
                  <Col>
                    <div><strong>{profile.role}</strong></div>
                    <small>Role</small>
                  </Col>
                  <Col>
                    <div><strong>{profile.graduationYear}</strong></div>
                    <small>Batch</small>
                  </Col>
                  <Col>
                    <div><strong>{profile.department}</strong></div>
                    <small>Department</small>
                  </Col>
                </Row>
              </div>

              <div className="text-center">
                <small>
                  <i className="fas fa-envelope me-2"></i>
                  {profile.email}
                </small>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => window.print()}>
            <i className="fas fa-download me-2"></i>
            Download Card
          </Button>
          <Button variant="secondary" onClick={() => setShowDigitalCard(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Profile;
