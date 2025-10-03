import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Annual Alumni Reunion 2025',
      date: 'March 15, 2025',
      time: '10:00 AM - 6:00 PM',
      location: 'Main Campus Auditorium',
      type: 'Reunion',
      attendees: 250,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
      description: 'Join us for the grand annual reunion celebrating our alumni community.'
    },
    {
      id: 2,
      title: 'Career Guidance Webinar',
      date: 'March 20, 2025',
      time: '5:00 PM - 7:00 PM',
      location: 'Online',
      type: 'Webinar',
      attendees: 500,
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400',
      description: 'Expert insights on navigating your career path in the tech industry.'
    },
    {
      id: 3,
      title: 'Sports & Recreation Day',
      date: 'March 25, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Sports Complex',
      type: 'Recreation',
      attendees: 180,
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400',
      description: 'A day filled with sports, games, and recreational activities for alumni and families.'
    },
    {
      id: 4,
      title: 'Entrepreneurship Summit',
      date: 'April 5, 2025',
      time: '11:00 AM - 4:00 PM',
      location: 'Innovation Hub',
      type: 'Summit',
      attendees: 300,
      image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=400',
      description: 'Connect with alumni entrepreneurs and learn about startup success stories.'
    },
    {
      id: 5,
      title: 'Tech Talks: AI & Future',
      date: 'April 12, 2025',
      time: '6:00 PM - 8:00 PM',
      location: 'Online',
      type: 'Webinar',
      attendees: 450,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400',
      description: 'Explore the future of AI with industry experts from our alumni network.'
    },
    {
      id: 6,
      title: 'Batch of 2015 Reunion',
      date: 'April 20, 2025',
      time: '7:00 PM - 11:00 PM',
      location: 'Hotel Grand Plaza',
      type: 'Reunion',
      attendees: 120,
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400',
      description: 'Reconnect with your batchmates and relive the golden days.'
    }
  ];

  return (
    <div className="page-wrapper">
      <Container>
        <div className="text-center mb-5">
          <h1 className="section-title">Events & Reunions</h1>
          <p className="section-subtitle">
            Stay connected through exciting events, webinars, and reunion celebrations
          </p>
        </div>

        <Row className="g-4">
          {events.map(event => (
            <Col md={6} lg={4} key={event.id}>
              <Card className="h-100 event-card">
                <div style={{ height: '200px', overflow: 'hidden', background: '#f8f9fa' }}>
                  <Card.Img
                    variant="top"
                    src={event.image}
                    style={{ height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body>
                  <div className="mb-2">
                    <Badge bg="primary">{event.type}</Badge>
                  </div>
                  <Card.Title className="mb-3">{event.title}</Card.Title>
                  <Card.Text className="text-muted mb-3">
                    {event.description}
                  </Card.Text>

                  <div className="mb-2">
                    <i className="far fa-calendar text-primary me-2"></i>
                    <span className="small">{event.date}</span>
                  </div>
                  <div className="mb-2">
                    <i className="far fa-clock text-primary me-2"></i>
                    <span className="small">{event.time}</span>
                  </div>
                  <div className="mb-2">
                    <i className="fas fa-map-marker-alt text-primary me-2"></i>
                    <span className="small">{event.location}</span>
                  </div>
                  <div className="mb-3">
                    <i className="fas fa-users text-primary me-2"></i>
                    <span className="small">{event.attendees} attendees registered</span>
                  </div>

                  <Button variant="primary" className="w-100">
                    <i className="fas fa-check-circle me-2"></i>
                    Register Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Button variant="outline-primary" size="lg">
            <i className="fas fa-calendar-alt me-2"></i>
            View All Events
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Events;
