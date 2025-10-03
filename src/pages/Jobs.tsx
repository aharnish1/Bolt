import { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Form } from 'react-bootstrap';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Google India',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '5-8 years',
      salary: '₹25-35 LPA',
      postedBy: 'Rahul Singh',
      postedDate: '2 days ago',
      skills: ['React', 'Node.js', 'AWS', 'TypeScript']
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'Microsoft',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹20-30 LPA',
      postedBy: 'Anjali Verma',
      postedDate: '5 days ago',
      skills: ['Product Strategy', 'Agile', 'Analytics']
    },
    {
      id: 3,
      title: 'Frontend Developer Intern',
      company: 'Startup Hub',
      location: 'Remote',
      type: 'Internship',
      experience: '0-1 years',
      salary: '₹15-20k/month',
      postedBy: 'Priya Sharma',
      postedDate: '1 week ago',
      skills: ['React', 'HTML/CSS', 'JavaScript']
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'Amazon',
      location: 'Mumbai, India',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹18-28 LPA',
      postedBy: 'Vikram Patel',
      postedDate: '3 days ago',
      skills: ['Python', 'ML', 'SQL', 'TensorFlow']
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'Flipkart',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '4-6 years',
      salary: '₹22-32 LPA',
      postedBy: 'Shubham Kumar',
      postedDate: '1 day ago',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS']
    },
    {
      id: 6,
      title: 'UI/UX Design Intern',
      company: 'Design Studio',
      location: 'Delhi, India',
      type: 'Internship',
      experience: '0-1 years',
      salary: '₹10-15k/month',
      postedBy: 'Sneha Gupta',
      postedDate: '4 days ago',
      skills: ['Figma', 'Adobe XD', 'Prototyping']
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = !selectedType || job.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="page-wrapper">
      <Container>
        <div className="text-center mb-5">
          <h1 className="section-title">Job & Internship Portal</h1>
          <p className="section-subtitle">
            Explore exclusive opportunities posted by alumni and partner companies
          </p>
        </div>

        <div className="filter-section">
          <Row className="g-3">
            <Col md={8}>
              <div className="search-bar">
                <i className="fas fa-search search-icon"></i>
                <Form.Control
                  type="text"
                  placeholder="Search by job title, company, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  size="lg"
                />
              </div>
            </Col>
            <Col md={4}>
              <Form.Select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                size="lg"
              >
                <option value="">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
              </Form.Select>
            </Col>
          </Row>
        </div>

        <Row className="g-4">
          {filteredJobs.map(job => (
            <Col md={12} key={job.id}>
              <Card className="job-card">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col md={8}>
                      <div className="d-flex align-items-start mb-3">
                        <div className="feature-icon me-3" style={{ width: '50px', height: '50px', fontSize: '20px' }}>
                          <i className="fas fa-building"></i>
                        </div>
                        <div>
                          <Card.Title className="mb-1">{job.title}</Card.Title>
                          <Card.Text className="text-muted mb-2">
                            <i className="fas fa-building me-2"></i>
                            {job.company}
                            <span className="mx-2">•</span>
                            <i className="fas fa-map-marker-alt me-2"></i>
                            {job.location}
                          </Card.Text>
                        </div>
                      </div>

                      <div className="mb-3">
                        <Badge bg="primary" className="me-2">{job.type}</Badge>
                        <Badge bg="secondary" className="me-2">{job.experience}</Badge>
                        <Badge bg="success">{job.salary}</Badge>
                      </div>

                      <div className="mb-3">
                        <strong className="me-2">Required Skills:</strong>
                        {job.skills.map((skill, idx) => (
                          <Badge key={idx} bg="light" text="dark" className="me-2">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <Card.Text className="text-muted small">
                        <i className="fas fa-user-circle me-2"></i>
                        Posted by {job.postedBy} • {job.postedDate}
                      </Card.Text>
                    </Col>

                    <Col md={4} className="text-end">
                      <Button variant="primary" size="lg" className="w-100 mb-2">
                        <i className="fas fa-paper-plane me-2"></i>
                        Apply Now
                      </Button>
                      <Button variant="outline-primary" className="w-100">
                        <i className="fas fa-bookmark me-2"></i>
                        Save Job
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {filteredJobs.length === 0 && (
          <div className="text-center py-5">
            <i className="fas fa-briefcase fa-3x text-muted mb-3"></i>
            <h4 className="text-muted">No jobs found</h4>
            <p className="text-muted">Try adjusting your search criteria</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Jobs;
