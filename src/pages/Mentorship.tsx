import { Container, Row, Col, Card, Badge, Button, Form } from 'react-bootstrap';
import './Mentorship.css';

const Mentorship = () => {
  const mentors = [
    {
      id: 1,
      name: 'Shubham Kumar',
      rating: 4.8,
      reviews: 125,
      company: 'vivo India | Hindustan Times Group | IIFT | SSCBS',
      experience: '6 years of Experience',
      expertise: ['Product Management', 'Business Strategy', 'Marketing'],
      available: true,
      sessions: 424,
      image: 'https://ui-avatars.com/api/?name=Shubham+Kumar&background=0d6efd&color=fff'
    },
    {
      id: 2,
      name: 'Shiri Agarwal',
      rating: 4.9,
      reviews: 98,
      company: 'Product @Telstra | MBA @MDI Gurgaon\'24 | Rank 18 Unstoppable',
      experience: '5 years of Experience',
      expertise: ['Product Strategy', 'Data Analytics', 'Growth'],
      available: true,
      sessions: 312,
      image: 'https://ui-avatars.com/api/?name=Shiri+Agarwal&background=28a745&color=fff'
    },
    {
      id: 3,
      name: 'Palak Gupta',
      rating: 4.9,
      reviews: 156,
      company: 'Consulting Analyst @Accenture | MBA (Gold Medalist) @IIM Indore, Ex-IBM',
      experience: '7 years of Experience',
      expertise: ['Consulting', 'Strategy', 'Management'],
      available: true,
      sessions: 567,
      image: 'https://ui-avatars.com/api/?name=Palak+Gupta&background=dc3545&color=fff'
    },
    {
      id: 4,
      name: 'Dhananjay Sharma',
      rating: 4.9,
      reviews: 203,
      company: 'Corporate Finance Manager @ Somany Impresa Group | IIM Ranchi MBA\'24',
      experience: '6 years of Experience',
      expertise: ['Finance', 'Investment Banking', 'Corporate Strategy'],
      available: true,
      sessions: 489,
      image: 'https://ui-avatars.com/api/?name=Dhananjay+Sharma&background=ffc107&color=000'
    },
    {
      id: 5,
      name: 'Yash Patel',
      rating: 4.8,
      reviews: 142,
      company: 'Strategy Manager @ Parag Milk Foods (MD\'s Office) | 300k+ Impressions | 32x',
      experience: '8 years of Experience',
      expertise: ['Strategy', 'Operations', 'Leadership'],
      available: true,
      sessions: 398,
      image: 'https://ui-avatars.com/api/?name=Yash+Patel&background=6f42c1&color=fff'
    },
    {
      id: 6,
      name: 'Rutwik Borkar',
      rating: 4.9,
      reviews: 187,
      company: 'Flipkart | Bain & Co.| Gold Medalist, IIT Madras | XLRI Jamshedpur-BM\'24',
      experience: '7 years of Experience',
      expertise: ['Technology', 'Product', 'Consulting'],
      available: true,
      sessions: 521,
      image: 'https://ui-avatars.com/api/?name=Rutwik+Borkar&background=fd7e14&color=fff'
    }
  ];

  const services = [
    {
      title: 'Mentorship Query',
      duration: '48 Hrs',
      price: 'Free',
      icon: 'fa-question-circle',
      badge: 'Best Seller'
    },
    {
      title: 'Quick Chat | Mentorship on any topic',
      duration: '30 Min',
      price: '₹200',
      icon: 'fa-comments'
    },
    {
      title: 'Resume Review | Profile Analysis',
      duration: '30 Min',
      price: '₹300',
      icon: 'fa-file-alt'
    },
    {
      title: 'Placement Preparation & Mock Interview',
      duration: '30 Min',
      price: '₹400',
      icon: 'fa-user-tie'
    }
  ];

  return (
    <div className="page-wrapper mentorship-page">
      <Container>
        <div className="text-center mb-5">
          <h1 className="section-title">Mentorship Programs</h1>
          <p className="section-subtitle">
            In search of excellence? Explore the highest-rated mentors as recognized by the learner community
          </p>
        </div>

        <div className="mb-5 text-center">
          <Button variant="primary" size="lg" className="mentor-match-btn">
            <i className="fas fa-magic me-2"></i>
            Mentor Match
          </Button>
        </div>

        <div className="mb-5 p-4 bg-light rounded">
          <h5 className="mb-3">Available Services</h5>
          <Row className="g-3">
            {services.map((service, idx) => (
              <Col md={6} lg={3} key={idx}>
                <Card className="h-100 text-center service-card">
                  <Card.Body>
                    {service.badge && (
                      <Badge bg="warning" text="dark" className="mb-2">
                        <i className="fas fa-trophy me-1"></i>
                        {service.badge}
                      </Badge>
                    )}
                    <div className="mb-3">
                      <i className={`fas ${service.icon} fa-2x text-primary`}></i>
                    </div>
                    <h6 className="mb-2">{service.title}</h6>
                    <div className="text-muted small mb-2">
                      <i className="far fa-clock me-1"></i>
                      {service.duration}
                    </div>
                    <div className="fw-bold text-primary">{service.price}</div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <h3 className="mb-4">Top Mentors</h3>
        <Row className="g-4">
          {mentors.map(mentor => (
            <Col md={6} lg={4} key={mentor.id}>
              <Card className="h-100 mentor-card">
                <div className={`mentor-header ${mentor.available ? 'available' : 'unavailable'}`}>
                  {mentor.available && (
                    <Badge bg="success" className="availability-badge">
                      <i className="fas fa-circle me-1"></i>
                      Available
                    </Badge>
                  )}
                  <div className="trophy-icon">
                    <i className="fas fa-trophy"></i>
                  </div>
                </div>
                <Card.Body className="text-center">
                  <img src={mentor.image} alt={mentor.name} className="mentor-avatar" />

                  <h5 className="mb-2">{mentor.name}</h5>

                  <div className="rating mb-3">
                    <span className="rating-star">
                      <i className="fas fa-star text-warning"></i>
                      {mentor.rating}
                    </span>
                    <span className="text-muted small ms-2">
                      ({mentor.reviews} Reviews)
                    </span>
                  </div>

                  <Card.Text className="text-muted small mb-3">
                    {mentor.company}
                  </Card.Text>

                  <div className="mb-3">
                    <i className="fas fa-briefcase me-2 text-primary"></i>
                    <span className="small">{mentor.experience}</span>
                  </div>

                  <div className="stats-row mb-3">
                    <div>
                      <i className="fas fa-calendar-check text-primary"></i>
                      <div className="stats-value">{mentor.sessions}</div>
                      <div className="stats-label">Sessions</div>
                    </div>
                  </div>

                  <div className="mb-3">
                    {mentor.expertise.slice(0, 2).map((skill, idx) => (
                      <Badge key={idx} bg="light" text="dark" className="me-1 mb-1">
                        {skill}
                      </Badge>
                    ))}
                    {mentor.expertise.length > 2 && (
                      <Badge bg="light" text="dark" className="mb-1">
                        +{mentor.expertise.length - 2} more
                      </Badge>
                    )}
                  </div>

                  <Button variant="primary" className="w-100 mb-2">
                    View Profile
                  </Button>
                  <Button variant="outline-primary" className="w-100">
                    <i className="fas fa-calendar-plus me-2"></i>
                    Book Session
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Button variant="outline-primary" size="lg">
            <i className="fas fa-users me-2"></i>
            Browse More Mentors
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Mentorship;
