import { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Tabs, Tab, Form, Modal } from 'react-bootstrap';

interface PostedJob {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  postedDate: string;
  applications: number;
  status: 'active' | 'closed';
}

interface PostedEvent {
  id: number;
  title: string;
  date: string;
  location: string;
  attendees: number;
  status: 'upcoming' | 'completed';
}

const PostedItems = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [showJobModal, setShowJobModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);

  const postedJobs: PostedJob[] = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Google',
      location: 'Mountain View, CA',
      type: 'Full-time',
      postedDate: '3 days ago',
      applications: 45,
      status: 'active'
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'Microsoft',
      location: 'Seattle, WA',
      type: 'Full-time',
      postedDate: '1 week ago',
      applications: 32,
      status: 'active'
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'Amazon',
      location: 'Remote',
      type: 'Contract',
      postedDate: '2 weeks ago',
      applications: 67,
      status: 'closed'
    }
  ];

  const postedEvents: PostedEvent[] = [
    {
      id: 1,
      title: 'Alumni Tech Meetup 2025',
      date: 'March 15, 2025',
      location: 'San Francisco, CA',
      attendees: 120,
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Career Workshop: Breaking into Tech',
      date: 'February 28, 2025',
      location: 'Virtual',
      attendees: 85,
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Annual Alumni Reunion',
      date: 'January 20, 2025',
      location: 'College Campus',
      attendees: 250,
      status: 'completed'
    }
  ];

  return (
    <div className="page-wrapper">
      <Container>
        <div className="mb-4 d-flex justify-content-between align-items-center">
          <div>
            <h1 className="section-title">Posted Items</h1>
            <p className="text-muted">Manage your job postings and events</p>
          </div>
          <div>
            <Button variant="primary" className="me-2" onClick={() => setShowJobModal(true)}>
              <i className="fas fa-plus me-2"></i>
              Post Job
            </Button>
            <Button variant="success" onClick={() => setShowEventModal(true)}>
              <i className="fas fa-plus me-2"></i>
              Create Event
            </Button>
          </div>
        </div>

        <Tabs
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k || 'jobs')}
          className="mb-4"
        >
          <Tab eventKey="jobs" title={`Jobs (${postedJobs.length})`}>
            <Row className="g-4">
              {postedJobs.map(job => (
                <Col md={6} key={job.id}>
                  <Card className="shadow-sm h-100">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                          <h5 className="mb-2">{job.title}</h5>
                          <p className="text-muted mb-1">
                            <i className="fas fa-building me-2"></i>
                            {job.company}
                          </p>
                          <p className="text-muted mb-1">
                            <i className="fas fa-map-marker-alt me-2"></i>
                            {job.location}
                          </p>
                          <p className="text-muted mb-0">
                            <i className="fas fa-clock me-2"></i>
                            {job.type}
                          </p>
                        </div>
                        <Badge bg={job.status === 'active' ? 'success' : 'secondary'}>
                          {job.status}
                        </Badge>
                      </div>

                      <div className="border-top pt-3 mb-3">
                        <Row className="text-center">
                          <Col xs={6}>
                            <div className="text-primary fw-bold">{job.applications}</div>
                            <small className="text-muted">Applications</small>
                          </Col>
                          <Col xs={6}>
                            <div className="text-muted">{job.postedDate}</div>
                            <small className="text-muted">Posted</small>
                          </Col>
                        </Row>
                      </div>

                      <div className="d-flex gap-2">
                        <Button variant="outline-primary" size="sm" className="flex-grow-1">
                          <i className="fas fa-eye me-1"></i>
                          View
                        </Button>
                        <Button variant="outline-secondary" size="sm" className="flex-grow-1">
                          <i className="fas fa-edit me-1"></i>
                          Edit
                        </Button>
                        <Button variant="outline-danger" size="sm">
                          <i className="fas fa-trash"></i>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>

          <Tab eventKey="events" title={`Events (${postedEvents.length})`}>
            <Row className="g-4">
              {postedEvents.map(event => (
                <Col md={6} key={event.id}>
                  <Card className="shadow-sm h-100">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                          <h5 className="mb-2">{event.title}</h5>
                          <p className="text-muted mb-1">
                            <i className="fas fa-calendar me-2"></i>
                            {event.date}
                          </p>
                          <p className="text-muted mb-0">
                            <i className="fas fa-map-marker-alt me-2"></i>
                            {event.location}
                          </p>
                        </div>
                        <Badge bg={event.status === 'upcoming' ? 'primary' : 'secondary'}>
                          {event.status}
                        </Badge>
                      </div>

                      <div className="border-top pt-3 mb-3">
                        <div className="text-center">
                          <div className="text-success fw-bold fs-4">{event.attendees}</div>
                          <small className="text-muted">Registered Attendees</small>
                        </div>
                      </div>

                      <div className="d-flex gap-2">
                        <Button variant="outline-primary" size="sm" className="flex-grow-1">
                          <i className="fas fa-eye me-1"></i>
                          View
                        </Button>
                        <Button variant="outline-secondary" size="sm" className="flex-grow-1">
                          <i className="fas fa-edit me-1"></i>
                          Edit
                        </Button>
                        <Button variant="outline-danger" size="sm">
                          <i className="fas fa-trash"></i>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
        </Tabs>
      </Container>

      <Modal show={showJobModal} onHide={() => setShowJobModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Post a New Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" placeholder="e.g., Senior Software Engineer" />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter company name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Location</Form.Label>
                  <Form.Control type="text" placeholder="e.g., San Francisco, CA" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Job Type</Form.Label>
                  <Form.Select>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Experience Level</Form.Label>
                  <Form.Select>
                    <option>Entry Level</option>
                    <option>Mid Level</option>
                    <option>Senior Level</option>
                    <option>Lead</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Job Description</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Describe the role, responsibilities, and requirements" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Required Skills (comma separated)</Form.Label>
              <Form.Control type="text" placeholder="e.g., React, Node.js, Python" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Salary Range (Optional)</Form.Label>
              <Form.Control type="text" placeholder="e.g., $100,000 - $150,000" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Application Deadline</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowJobModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => {
            alert('Job posted successfully!');
            setShowJobModal(false);
          }}>
            <i className="fas fa-check me-2"></i>
            Post Job
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEventModal} onHide={() => setShowEventModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Create a New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Event Title</Form.Label>
              <Form.Control type="text" placeholder="e.g., Alumni Tech Meetup" />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Event Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Event Time</Form.Label>
                  <Form.Control type="time" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Enter event location or 'Virtual'" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Event Type</Form.Label>
              <Form.Select>
                <option>Networking</option>
                <option>Workshop</option>
                <option>Conference</option>
                <option>Reunion</option>
                <option>Seminar</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Event Description</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Describe the event, agenda, and what attendees can expect" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Maximum Attendees (Optional)</Form.Label>
              <Form.Control type="number" placeholder="Leave empty for unlimited" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Registration required" />
              <Form.Check type="checkbox" label="Send calendar invite" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEventModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={() => {
            alert('Event created successfully!');
            setShowEventModal(false);
          }}>
            <i className="fas fa-check me-2"></i>
            Create Event
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PostedItems;
