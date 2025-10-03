import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Alumni',
      value: '50,234',
      change: '+12.5%',
      icon: 'fa-users',
      color: 'primary'
    },
    {
      title: 'Active Events',
      value: '24',
      change: '+8 this month',
      icon: 'fa-calendar-alt',
      color: 'success'
    },
    {
      title: 'Job Postings',
      value: '156',
      change: '+23 this week',
      icon: 'fa-briefcase',
      color: 'info'
    },
    {
      title: 'Total Donations',
      value: '₹2.5Cr',
      change: '+18.2%',
      icon: 'fa-donate',
      color: 'warning'
    },
    {
      title: 'Mentorship Sessions',
      value: '892',
      change: '+45 this month',
      icon: 'fa-hands-helping',
      color: 'danger'
    },
    {
      title: 'New Registrations',
      value: '1,234',
      change: '+156 this month',
      icon: 'fa-user-plus',
      color: 'secondary'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'event',
      title: 'New Event: Annual Alumni Reunion 2025',
      time: '2 hours ago',
      icon: 'fa-calendar-check',
      color: 'success'
    },
    {
      id: 2,
      type: 'job',
      title: 'New Job Posted: Senior Software Engineer at Google',
      time: '5 hours ago',
      icon: 'fa-briefcase',
      color: 'info'
    },
    {
      id: 3,
      type: 'donation',
      title: 'New Donation: ₹50,000 for Library Development',
      time: '1 day ago',
      icon: 'fa-heart',
      color: 'danger'
    },
    {
      id: 4,
      type: 'alumni',
      title: '25 New Alumni Registered',
      time: '2 days ago',
      icon: 'fa-user-plus',
      color: 'primary'
    }
  ];

  const topRecruiters = [
    { name: 'Google India', positions: 12 },
    { name: 'Microsoft', positions: 10 },
    { name: 'Amazon', positions: 8 },
    { name: 'Flipkart', positions: 7 },
    { name: 'TCS', positions: 6 }
  ];

  return (
    <div className="page-wrapper">
      <Container>
        <div className="mb-4">
          <h1 className="section-title">Dashboard</h1>
          <p className="text-muted">Welcome back! Here's what's happening with your alumni network.</p>
        </div>

        <Row className="g-4 mb-4">
          {stats.map((stat, idx) => (
            <Col md={6} lg={4} key={idx}>
              <Card className="h-100 stats-card">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col xs={8}>
                      <div className="text-muted mb-1">{stat.title}</div>
                      <div className="h3 mb-0">{stat.value}</div>
                      <small className={`text-${stat.color}`}>
                        <i className="fas fa-arrow-up me-1"></i>
                        {stat.change}
                      </small>
                    </Col>
                    <Col xs={4} className="text-end">
                      <div
                        className={`bg-${stat.color} bg-opacity-10 text-${stat.color} rounded-circle d-inline-flex align-items-center justify-content-center`}
                        style={{ width: '60px', height: '60px' }}
                      >
                        <i className={`fas ${stat.icon} fa-2x`}></i>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="g-4">
          <Col lg={8}>
            <Card>
              <Card.Header className="bg-white">
                <h5 className="mb-0">Recent Activities</h5>
              </Card.Header>
              <Card.Body>
                <div className="activity-list">
                  {recentActivities.map(activity => (
                    <div key={activity.id} className="d-flex align-items-start mb-3 pb-3 border-bottom">
                      <div
                        className={`bg-${activity.color} bg-opacity-10 text-${activity.color} rounded-circle d-inline-flex align-items-center justify-content-center me-3`}
                        style={{ width: '40px', height: '40px', minWidth: '40px' }}
                      >
                        <i className={`fas ${activity.icon}`}></i>
                      </div>
                      <div className="flex-grow-1">
                        <div className="mb-1">{activity.title}</div>
                        <small className="text-muted">
                          <i className="far fa-clock me-1"></i>
                          {activity.time}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="mb-4">
              <Card.Header className="bg-white">
                <h5 className="mb-0">Top Recruiters</h5>
              </Card.Header>
              <Card.Body>
                {topRecruiters.map((recruiter, idx) => (
                  <div key={idx} className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
                    <div>
                      <div className="fw-bold">{recruiter.name}</div>
                      <small className="text-muted">{recruiter.positions} open positions</small>
                    </div>
                    <div className="bg-primary bg-opacity-10 text-primary rounded px-2 py-1">
                      #{idx + 1}
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>

            <Card>
              <Card.Header className="bg-white">
                <h5 className="mb-0">Quick Actions</h5>
              </Card.Header>
              <Card.Body>
                <div className="d-grid gap-2">
                  <button className="btn btn-outline-primary text-start">
                    <i className="fas fa-plus-circle me-2"></i>
                    Create Event
                  </button>
                  <button className="btn btn-outline-primary text-start">
                    <i className="fas fa-briefcase me-2"></i>
                    Post Job
                  </button>
                  <button className="btn btn-outline-primary text-start">
                    <i className="fas fa-bullhorn me-2"></i>
                    Send Announcement
                  </button>
                  <button className="btn btn-outline-primary text-start">
                    <i className="fas fa-download me-2"></i>
                    Export Data
                  </button>
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
