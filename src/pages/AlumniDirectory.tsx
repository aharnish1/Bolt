import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Badge } from 'react-bootstrap';

const AlumniDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const alumni = [
    {
      id: 1,
      name: 'Shubham Kumar',
      batch: '2018',
      department: 'Computer Science',
      company: 'vivo India | Hindustan Times Group | IIFT | SSCBS',
      location: 'Delhi, India',
      experience: '6 years',
      image: 'https://ui-avatars.com/api/?name=Shubham+Kumar&background=0d6efd&color=fff'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      batch: '2019',
      department: 'Mechanical Engineering',
      company: 'Tata Motors',
      location: 'Mumbai, India',
      experience: '5 years',
      image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=28a745&color=fff'
    },
    {
      id: 3,
      name: 'Rahul Singh',
      batch: '2017',
      department: 'Electrical Engineering',
      company: 'Google India',
      location: 'Bangalore, India',
      experience: '7 years',
      image: 'https://ui-avatars.com/api/?name=Rahul+Singh&background=dc3545&color=fff'
    },
    {
      id: 4,
      name: 'Anjali Verma',
      batch: '2020',
      department: 'Computer Science',
      company: 'Microsoft',
      location: 'Hyderabad, India',
      experience: '4 years',
      image: 'https://ui-avatars.com/api/?name=Anjali+Verma&background=ffc107&color=000'
    },
    {
      id: 5,
      name: 'Vikram Patel',
      batch: '2016',
      department: 'Civil Engineering',
      company: 'L&T Construction',
      location: 'Chennai, India',
      experience: '8 years',
      image: 'https://ui-avatars.com/api/?name=Vikram+Patel&background=6f42c1&color=fff'
    },
    {
      id: 6,
      name: 'Sneha Gupta',
      batch: '2019',
      department: 'Electronics Engineering',
      company: 'Intel India',
      location: 'Pune, India',
      experience: '5 years',
      image: 'https://ui-avatars.com/api/?name=Sneha+Gupta&background=fd7e14&color=fff'
    }
  ];

  const filteredAlumni = alumni.filter(alum => {
    const matchesSearch = alum.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          alum.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBatch = !selectedBatch || alum.batch === selectedBatch;
    const matchesDepartment = !selectedDepartment || alum.department === selectedDepartment;
    return matchesSearch && matchesBatch && matchesDepartment;
  });

  return (
    <div className="page-wrapper">
      <Container>
        <div className="text-center mb-5">
          <h1 className="section-title">Alumni Directory</h1>
          <p className="section-subtitle">
            Connect with our distinguished alumni community
          </p>
        </div>

        <div className="filter-section">
          <Row className="g-3">
            <Col md={6}>
              <div className="search-bar">
                <i className="fas fa-search search-icon"></i>
                <Form.Control
                  type="text"
                  placeholder="Search by name or company..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  size="lg"
                />
              </div>
            </Col>
            <Col md={3}>
              <Form.Select
                value={selectedBatch}
                onChange={(e) => setSelectedBatch(e.target.value)}
                size="lg"
              >
                <option value="">All Batches</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Form.Select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                size="lg"
              >
                <option value="">All Departments</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Electrical Engineering">Electrical Engineering</option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Electronics Engineering">Electronics Engineering</option>
              </Form.Select>
            </Col>
          </Row>
        </div>

        <Row className="g-4">
          {filteredAlumni.map(alum => (
            <Col md={6} lg={4} key={alum.id}>
              <Card className="h-100">
                <Card.Body className="profile-card">
                  <img src={alum.image} alt={alum.name} />
                  <Card.Title className="mb-2">{alum.name}</Card.Title>
                  <div className="mb-3">
                    <Badge bg="primary" className="me-2">Batch {alum.batch}</Badge>
                    <Badge bg="secondary">{alum.experience}</Badge>
                  </div>
                  <Card.Text className="text-muted mb-2">
                    <i className="fas fa-graduation-cap me-2"></i>
                    {alum.department}
                  </Card.Text>
                  <Card.Text className="text-muted mb-2">
                    <i className="fas fa-building me-2"></i>
                    {alum.company}
                  </Card.Text>
                  <Card.Text className="text-muted mb-3">
                    <i className="fas fa-map-marker-alt me-2"></i>
                    {alum.location}
                  </Card.Text>
                  <div className="d-flex gap-2">
                    <Button variant="primary" className="flex-grow-1">
                      <i className="fas fa-user-plus me-2"></i>
                      Connect
                    </Button>
                    <Button variant="outline-primary">
                      <i className="fas fa-envelope"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {filteredAlumni.length === 0 && (
          <div className="text-center py-5">
            <i className="fas fa-search fa-3x text-muted mb-3"></i>
            <h4 className="text-muted">No alumni found</h4>
            <p className="text-muted">Try adjusting your search criteria</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default AlumniDirectory;
