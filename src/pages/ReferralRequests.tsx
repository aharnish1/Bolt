import { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Form, Modal, Tabs, Tab } from 'react-bootstrap';

interface ReferralRequest {
  id: number;
  name: string;
  avatar: string;
  position: string;
  company: string;
  requestDate: string;
  status: 'pending' | 'accepted' | 'declined';
  message: string;
  experience: string;
  skills: string[];
}

const ReferralRequests = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<ReferralRequest | null>(null);
  const [activeTab, setActiveTab] = useState('received');

  const receivedRequests: ReferralRequest[] = [
    {
      id: 1,
      name: 'Alex Kumar',
      avatar: 'https://ui-avatars.com/api/?name=Alex+Kumar&background=0d6efd&color=fff',
      position: 'Software Engineer',
      company: 'Google',
      requestDate: '2 days ago',
      status: 'pending',
      message: 'Hi! I saw you work at Google. I\'m very interested in the Software Engineer position and would appreciate your referral.',
      experience: '3 years',
      skills: ['React', 'Node.js', 'Python']
    },
    {
      id: 2,
      name: 'Priya Sharma',
      avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=198754&color=fff',
      position: 'Data Scientist',
      company: 'Microsoft',
      requestDate: '5 days ago',
      status: 'pending',
      message: 'Hello! I\'m applying for the Data Scientist role at Microsoft. Your referral would mean a lot to me.',
      experience: '2 years',
      skills: ['Python', 'ML', 'TensorFlow']
    },
    {
      id: 3,
      name: 'Rahul Verma',
      avatar: 'https://ui-avatars.com/api/?name=Rahul+Verma&background=ffc107&color=000',
      position: 'Product Manager',
      company: 'Amazon',
      requestDate: '1 week ago',
      status: 'accepted',
      message: 'I\'ve been following your career journey and would love to get your referral for the PM role.',
      experience: '5 years',
      skills: ['Product Strategy', 'Agile', 'Analytics']
    },
    {
      id: 4,
      name: 'Anita Singh',
      avatar: 'https://ui-avatars.com/api/?name=Anita+Singh&background=dc3545&color=fff',
      position: 'UX Designer',
      company: 'Apple',
      requestDate: '2 weeks ago',
      status: 'declined',
      message: 'Hi, I\'m interested in the UX Designer position at Apple. Would you be willing to refer me?',
      experience: '4 years',
      skills: ['Figma', 'User Research', 'Prototyping']
    }
  ];

  const sentRequests: ReferralRequest[] = [
    {
      id: 5,
      name: 'Sarah Johnson',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=6f42c1&color=fff',
      position: 'Senior Developer',
      company: 'Netflix',
      requestDate: '3 days ago',
      status: 'accepted',
      message: 'Thanks for considering my referral request!',
      experience: '6 years',
      skills: ['Java', 'Microservices', 'AWS']
    },
    {
      id: 6,
      name: 'Michael Chen',
      avatar: 'https://ui-avatars.com/api/?name=Michael+Chen&background=20c997&color=fff',
      position: 'DevOps Engineer',
      company: 'Facebook',
      requestDate: '1 week ago',
      status: 'pending',
      message: 'Looking forward to hearing from you!',
      experience: '4 years',
      skills: ['Kubernetes', 'Docker', 'CI/CD']
    }
  ];

  const handleViewDetails = (request: ReferralRequest) => {
    setSelectedRequest(request);
    setShowModal(true);
  };

  const handleAcceptRequest = (id: number) => {
    console.log('Accepted request:', id);
    alert('Referral request accepted! The candidate will be notified.');
  };

  const handleDeclineRequest = (id: number) => {
    console.log('Declined request:', id);
    alert('Referral request declined.');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge bg="warning">Pending</Badge>;
      case 'accepted':
        return <Badge bg="success">Accepted</Badge>;
      case 'declined':
        return <Badge bg="danger">Declined</Badge>;
      default:
        return <Badge bg="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="page-wrapper">
      <Container>
        <div className="mb-4">
          <h1 className="section-title">Referral Requests</h1>
          <p className="text-muted">Manage your referral requests and help fellow alumni</p>
        </div>

        <Tabs
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k || 'received')}
          className="mb-4"
        >
          <Tab eventKey="received" title={`Received (${receivedRequests.filter(r => r.status === 'pending').length})`}>
            <Row className="g-4">
              {receivedRequests.map(request => (
                <Col md={6} key={request.id}>
                  <Card className="shadow-sm h-100">
                    <Card.Body>
                      <div className="d-flex align-items-start mb-3">
                        <img
                          src={request.avatar}
                          alt={request.name}
                          className="rounded-circle me-3"
                          style={{ width: '60px', height: '60px' }}
                        />
                        <div className="flex-grow-1">
                          <div className="d-flex justify-content-between align-items-start">
                            <div>
                              <h5 className="mb-1">{request.name}</h5>
                              <p className="text-muted mb-1">
                                <i className="fas fa-briefcase me-1"></i>
                                {request.position}
                              </p>
                              <p className="text-muted mb-0">
                                <i className="fas fa-building me-1"></i>
                                {request.company}
                              </p>
                            </div>
                            {getStatusBadge(request.status)}
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <p className="text-muted mb-2">
                          <i className="fas fa-clock me-1"></i>
                          Requested {request.requestDate}
                        </p>
                        <p className="mb-0">{request.message}</p>
                      </div>

                      <div className="mb-3">
                        <small className="text-muted d-block mb-1">Skills:</small>
                        <div className="d-flex flex-wrap gap-1">
                          {request.skills.map((skill, idx) => (
                            <Badge key={idx} bg="light" text="dark" className="px-2">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="d-flex gap-2">
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() => handleViewDetails(request)}
                        >
                          <i className="fas fa-eye me-1"></i>
                          View Details
                        </Button>
                        {request.status === 'pending' && (
                          <>
                            <Button
                              variant="success"
                              size="sm"
                              onClick={() => handleAcceptRequest(request.id)}
                            >
                              <i className="fas fa-check me-1"></i>
                              Accept
                            </Button>
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => handleDeclineRequest(request.id)}
                            >
                              <i className="fas fa-times me-1"></i>
                              Decline
                            </Button>
                          </>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>

          <Tab eventKey="sent" title={`Sent (${sentRequests.length})`}>
            <Row className="g-4">
              {sentRequests.map(request => (
                <Col md={6} key={request.id}>
                  <Card className="shadow-sm h-100">
                    <Card.Body>
                      <div className="d-flex align-items-start mb-3">
                        <img
                          src={request.avatar}
                          alt={request.name}
                          className="rounded-circle me-3"
                          style={{ width: '60px', height: '60px' }}
                        />
                        <div className="flex-grow-1">
                          <div className="d-flex justify-content-between align-items-start">
                            <div>
                              <h5 className="mb-1">{request.name}</h5>
                              <p className="text-muted mb-1">
                                <i className="fas fa-briefcase me-1"></i>
                                {request.position}
                              </p>
                              <p className="text-muted mb-0">
                                <i className="fas fa-building me-1"></i>
                                {request.company}
                              </p>
                            </div>
                            {getStatusBadge(request.status)}
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <p className="text-muted mb-2">
                          <i className="fas fa-clock me-1"></i>
                          Sent {request.requestDate}
                        </p>
                        <p className="mb-0">{request.message}</p>
                      </div>

                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={() => handleViewDetails(request)}
                      >
                        <i className="fas fa-eye me-1"></i>
                        View Details
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
        </Tabs>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Referral Request Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedRequest && (
            <>
              <div className="d-flex align-items-center mb-4">
                <img
                  src={selectedRequest.avatar}
                  alt={selectedRequest.name}
                  className="rounded-circle me-3"
                  style={{ width: '80px', height: '80px' }}
                />
                <div>
                  <h4 className="mb-1">{selectedRequest.name}</h4>
                  <p className="text-muted mb-0">{selectedRequest.position} at {selectedRequest.company}</p>
                </div>
              </div>

              <Row className="mb-4">
                <Col md={6}>
                  <strong>Experience:</strong>
                  <p>{selectedRequest.experience}</p>
                </Col>
                <Col md={6}>
                  <strong>Status:</strong>
                  <div>{getStatusBadge(selectedRequest.status)}</div>
                </Col>
              </Row>

              <div className="mb-4">
                <strong>Message:</strong>
                <p className="mt-2">{selectedRequest.message}</p>
              </div>

              <div className="mb-4">
                <strong>Skills:</strong>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  {selectedRequest.skills.map((skill, idx) => (
                    <Badge key={idx} bg="primary" className="px-3 py-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          {selectedRequest && selectedRequest.status === 'pending' && activeTab === 'received' && (
            <>
              <Button variant="success" onClick={() => {
                handleAcceptRequest(selectedRequest.id);
                setShowModal(false);
              }}>
                <i className="fas fa-check me-2"></i>
                Accept Request
              </Button>
              <Button variant="danger" onClick={() => {
                handleDeclineRequest(selectedRequest.id);
                setShowModal(false);
              }}>
                <i className="fas fa-times me-2"></i>
                Decline Request
              </Button>
            </>
          )}
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReferralRequests;
