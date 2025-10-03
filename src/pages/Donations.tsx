import { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, ProgressBar } from 'react-bootstrap';

const Donations = () => {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const campaigns = [
    {
      id: 1,
      title: 'New Library Development',
      description: 'Help us build a state-of-the-art library for current students',
      goal: 5000000,
      raised: 3750000,
      donors: 245,
      daysLeft: 45
    },
    {
      id: 2,
      title: 'Scholarship Fund',
      description: 'Support deserving students with educational scholarships',
      goal: 3000000,
      raised: 2100000,
      donors: 189,
      daysLeft: 60
    },
    {
      id: 3,
      title: 'Research Lab Upgrade',
      description: 'Modernize our research facilities with latest equipment',
      goal: 8000000,
      raised: 4500000,
      donors: 312,
      daysLeft: 90
    }
  ];

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="page-wrapper">
      <Container>
        <div className="text-center mb-5">
          <h1 className="section-title">Campaigns & Donations</h1>
          <p className="section-subtitle">
            Support your alma mater and make a difference in students' lives
          </p>
        </div>

        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <Card className="shadow-sm">
              <Card.Body className="p-4">
                <h4 className="mb-4 text-center">Make a Donation</h4>

                <Form>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">Select Amount</Form.Label>
                    <Row className="g-3">
                      {predefinedAmounts.map(amt => (
                        <Col xs={6} md={4} lg={2} key={amt}>
                          <Button
                            variant={amount === amt.toString() ? 'primary' : 'outline-primary'}
                            className="w-100"
                            onClick={() => {
                              setAmount(amt.toString());
                              setCustomAmount('');
                            }}
                          >
                            ₹{amt}
                          </Button>
                        </Col>
                      ))}
                      <Col xs={6} md={4} lg={2}>
                        <Button
                          variant={customAmount ? 'primary' : 'outline-primary'}
                          className="w-100"
                          onClick={() => setAmount('')}
                        >
                          Custom
                        </Button>
                      </Col>
                    </Row>
                  </Form.Group>

                  {(!amount || customAmount) && (
                    <Form.Group className="mb-4">
                      <Form.Label>Enter Amount</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter custom amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        size="lg"
                      />
                    </Form.Group>
                  )}

                  <Form.Group className="mb-4">
                    <Form.Label>Select Campaign</Form.Label>
                    <Form.Select size="lg">
                      <option value="">General Fund</option>
                      {campaigns.map(campaign => (
                        <option key={campaign.id} value={campaign.id}>
                          {campaign.title}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Donor Information</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Full Name"
                      className="mb-3"
                      size="lg"
                    />
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                      className="mb-3"
                      size="lg"
                    />
                    <Form.Control
                      type="tel"
                      placeholder="Phone Number"
                      size="lg"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Check
                      type="checkbox"
                      label="I want to remain anonymous"
                      id="anonymous"
                    />
                  </Form.Group>

                  <Button variant="primary" size="lg" className="w-100">
                    <i className="fas fa-heart me-2"></i>
                    Proceed to Payment
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="mb-4">
          <h3 className="text-center mb-4">Active Campaigns</h3>
        </div>

        <Row className="g-4">
          {campaigns.map(campaign => {
            const percentage = (campaign.raised / campaign.goal) * 100;
            return (
              <Col md={6} lg={4} key={campaign.id}>
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title className="mb-3">{campaign.title}</Card.Title>
                    <Card.Text className="text-muted mb-4">
                      {campaign.description}
                    </Card.Text>

                    <div className="mb-3">
                      <ProgressBar
                        now={percentage}
                        variant="success"
                        style={{ height: '12px' }}
                      />
                      <div className="d-flex justify-content-between mt-2 small">
                        <span className="fw-bold text-success">
                          {formatCurrency(campaign.raised)} raised
                        </span>
                        <span className="text-muted">
                          Goal: {formatCurrency(campaign.goal)}
                        </span>
                      </div>
                    </div>

                    <Row className="text-center mb-3">
                      <Col>
                        <div className="fw-bold text-primary">{percentage.toFixed(0)}%</div>
                        <small className="text-muted">Funded</small>
                      </Col>
                      <Col>
                        <div className="fw-bold text-primary">{campaign.donors}</div>
                        <small className="text-muted">Donors</small>
                      </Col>
                      <Col>
                        <div className="fw-bold text-primary">{campaign.daysLeft}</div>
                        <small className="text-muted">Days Left</small>
                      </Col>
                    </Row>

                    <Button variant="primary" className="w-100">
                      <i className="fas fa-donate me-2"></i>
                      Donate Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        <div className="text-center mt-5 p-5 bg-light rounded">
          <i className="fas fa-heart fa-3x text-danger mb-3"></i>
          <h4 className="mb-3">Every Contribution Matters</h4>
          <p className="text-muted mb-4">
            Your generous donations help us provide better education, facilities, and opportunities for current and future students.
          </p>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <div>
              <div className="display-6 fw-bold text-primary">₹2.5Cr+</div>
              <div className="text-muted">Total Raised</div>
            </div>
            <div>
              <div className="display-6 fw-bold text-primary">1,200+</div>
              <div className="text-muted">Donors</div>
            </div>
            <div>
              <div className="display-6 fw-bold text-primary">25+</div>
              <div className="text-muted">Projects Funded</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Donations;
