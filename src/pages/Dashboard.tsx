import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

const Dashboard = () => {
  const [columns] = useState([
    { id: 1, title: 'Referral Requests', count: 3, icon: 'fa-handshake', color: 'primary', link: '/referral-requests' },
    { id: 2, title: 'Messaging', count: 5, icon: 'fa-comments', color: 'success', link: '/messaging' },
    { id: 3, title: 'Posted Jobs', count: 2, icon: 'fa-briefcase', color: 'info', link: '/posted-items' },
    { id: 4, title: 'Posted Events', count: 1, icon: 'fa-calendar', color: 'warning', link: '/posted-items' }
  ]);

  const myActivities = [
    {
      id: 1,
      type: 'referral',
      title: 'New referral request from Alex Kumar',
      description: 'For Software Engineer position at Google',
      time: '2 hours ago',
      icon: 'fa-handshake',
      color: 'primary',
      action: 'View Request'
    },
    {
      id: 2,
      type: 'message',
      title: 'New message from Sarah Johnson',
      description: 'Thanks for the mentorship session!',
      time: '5 hours ago',
      icon: 'fa-envelope',
      color: 'success',
      action: 'Reply'
    },
    {
      id: 3,
      type: 'application',
      title: '12 new applications for your job post',
      description: 'Senior Software Engineer - Google',
      time: '1 day ago',
      icon: 'fa-file-alt',
      color: 'info',
      action: 'Review'
    },
    {
      id: 4,
      type: 'event',
      title: 'Upcoming event reminder',
      description: 'Alumni Tech Meetup 2025 - March 15',
      time: '2 days ago',
      icon: 'fa-calendar-check',
      color: 'warning',
      action: 'View Event'
    }
  ];

  const quickStats = [
    { label: 'Profile Views', value: '234', trend: '+12%', color: 'primary' },
    { label: 'Connections', value: '156', trend: '+5%', color: 'success' },
    { label: 'Pending Tasks', value: '8', trend: '-3%', color: 'warning' },
    { label: 'Completed', value: '45', trend: '+18%', color: 'info' }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Alumni Tech Meetup',
      date: 'March 15, 2025',
      attendees: 120,
      status: 'Registered'
    },
    {
      id: 2,
      title: 'Career Workshop',
      date: 'March 22, 2025',
      attendees: 85,
      status: 'Interested'
    },
    {
      id: 3,
      title: 'Networking Mixer',
      date: 'April 5, 2025',
      attendees: 65,
      status: 'Not Registered'
    }
  ];

  return (
    <div className="page-wrapper">
      <Container fluid>
        <div className="mb-4">
          <h1 className="section-title">My Activity Dashboard</h1>
          <p className="text-muted">Track your engagement and manage your activities</p>
        </div>

        <Row className="g-4 mb-4">
          {quickStats.map((stat, idx) => (
            <Col md={6} lg={3} key={idx}>
              <Card className="shadow-sm h-100" style={{ transition: 'transform 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <p className="text-muted mb-1 small">{stat.label}</p>
                      <h3 className="mb-0">{stat.value}</h3>
                    </div>
                    <Badge bg={stat.color} className="fs-6">{stat.trend}</Badge>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="g-4 mb-4">
          {columns.map((column) => (
            <Col md={6} lg={3} key={column.id}>
              <Link to={column.link} className="text-decoration-none">
                <Card className="shadow-sm h-100 border-0" style={{ transition: 'all 0.3s' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '';
                  }}>
                  <Card.Body className="text-center p-4">
                    <div
                      className={`bg-${column.color} bg-opacity-10 text-${column.color} rounded-circle d-inline-flex align-items-center justify-content-center mb-3`}
                      style={{ width: '70px', height: '70px' }}
                    >
                      <i className={`fas ${column.icon} fa-2x`}></i>
                    </div>
                    <h5 className="mb-2">{column.title}</h5>
                    <div className="d-flex align-items-center justify-content-center">
                      <Badge bg={column.color} pill className="px-3 py-2">
                        {column.count} new
                      </Badge>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>

        <Row className="g-4">
          <Col lg={8}>
            <Card className="shadow-sm border-0">
              <Card.Header className="bg-white border-bottom">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Recent Activity</h5>
                  <Button variant="link" className="text-decoration-none p-0">
                    View All
                  </Button>
                </div>
              </Card.Header>
              <Card.Body>
                {myActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="d-flex align-items-start p-3 mb-2 rounded"
                    style={{
                      transition: 'background-color 0.2s',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <div
                      className={`bg-${activity.color} bg-opacity-10 text-${activity.color} rounded-circle d-inline-flex align-items-center justify-content-center me-3`}
                      style={{ width: '50px', height: '50px', minWidth: '50px' }}
                    >
                      <i className={`fas ${activity.icon} fa-lg`}></i>
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start mb-1">
                        <h6 className="mb-0">{activity.title}</h6>
                        <small className="text-muted">{activity.time}</small>
                      </div>
                      <p className="text-muted mb-2 small">{activity.description}</p>
                      <Button variant={`outline-${activity.color}`} size="sm">
                        {activity.action}
                      </Button>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="shadow-sm border-0 mb-4">
              <Card.Header className="bg-white border-bottom">
                <h5 className="mb-0">Upcoming Events</h5>
              </Card.Header>
              <Card.Body>
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="mb-3 pb-3 border-bottom">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div>
                        <h6 className="mb-1">{event.title}</h6>
                        <small className="text-muted">
                          <i className="far fa-calendar me-1"></i>
                          {event.date}
                        </small>
                      </div>
                      <Badge
                        bg={event.status === 'Registered' ? 'success' : event.status === 'Interested' ? 'warning' : 'secondary'}
                        className="text-wrap"
                        style={{ maxWidth: '80px' }}
                      >
                        {event.status}
                      </Badge>
                    </div>
                    <small className="text-muted">
                      <i className="fas fa-users me-1"></i>
                      {event.attendees} attendees
                    </small>
                  </div>
                ))}
                <Button variant="outline-primary" className="w-100" as={Link} to="/events">
                  <i className="fas fa-calendar-plus me-2"></i>
                  View All Events
                </Button>
              </Card.Body>
            </Card>

            <Card className="shadow-sm border-0">
              <Card.Header className="bg-white border-bottom">
                <h5 className="mb-0">Quick Actions</h5>
              </Card.Header>
              <Card.Body>
                <div className="d-grid gap-2">
                  <Button variant="outline-primary" as={Link} to="/posted-items" className="text-start">
                    <i className="fas fa-briefcase me-2"></i>
                    Post a Job
                  </Button>
                  <Button variant="outline-success" as={Link} to="/posted-items" className="text-start">
                    <i className="fas fa-calendar-plus me-2"></i>
                    Create Event
                  </Button>
                  <Button variant="outline-info" as={Link} to="/profile" className="text-start">
                    <i className="fas fa-edit me-2"></i>
                    Edit Profile
                  </Button>
                  <Button variant="outline-warning" as={Link} to="/alumni-directory" className="text-start">
                    <i className="fas fa-search me-2"></i>
                    Find Alumni
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
