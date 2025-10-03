import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Nav, Tab } from 'react-bootstrap';

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState('public');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const handleSaveSettings = () => {
    console.log('Settings saved');
    alert('Settings saved successfully!');
  };

  return (
    <div className="page-wrapper">
      <Container>
        <div className="mb-4">
          <h1 className="section-title">Settings</h1>
          <p className="text-muted">Manage your account settings and preferences</p>
        </div>

        <Tab.Container defaultActiveKey="account">
          <Row>
            <Col md={3}>
              <Card className="shadow-sm mb-4">
                <Card.Body className="p-0">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="account" className="rounded-0">
                        <i className="fas fa-user me-2"></i>
                        Account
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="security" className="rounded-0">
                        <i className="fas fa-lock me-2"></i>
                        Security
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="notifications" className="rounded-0">
                        <i className="fas fa-bell me-2"></i>
                        Notifications
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="privacy" className="rounded-0">
                        <i className="fas fa-shield-alt me-2"></i>
                        Privacy
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="preferences" className="rounded-0">
                        <i className="fas fa-cog me-2"></i>
                        Preferences
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Body>
              </Card>
            </Col>

            <Col md={9}>
              <Tab.Content>
                <Tab.Pane eventKey="account">
                  <Card className="shadow-sm">
                    <Card.Header className="bg-white">
                      <h5 className="mb-0">Account Settings</h5>
                    </Card.Header>
                    <Card.Body>
                      <Form>
                        <Form.Group className="mb-3">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control type="email" defaultValue="john.doe@example.com" />
                          <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control type="tel" defaultValue="+1 234 567 8900" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Language</Form.Label>
                          <Form.Select defaultValue="en">
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-4">
                          <Form.Label>Timezone</Form.Label>
                          <Form.Select defaultValue="pst">
                            <option value="pst">Pacific Standard Time (PST)</option>
                            <option value="est">Eastern Standard Time (EST)</option>
                            <option value="gmt">Greenwich Mean Time (GMT)</option>
                            <option value="ist">Indian Standard Time (IST)</option>
                          </Form.Select>
                        </Form.Group>

                        <Button variant="primary" onClick={handleSaveSettings}>
                          <i className="fas fa-save me-2"></i>
                          Save Changes
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card>
                </Tab.Pane>

                <Tab.Pane eventKey="security">
                  <Card className="shadow-sm mb-4">
                    <Card.Header className="bg-white">
                      <h5 className="mb-0">Change Password</h5>
                    </Card.Header>
                    <Card.Body>
                      <Form>
                        <Form.Group className="mb-3">
                          <Form.Label>Current Password</Form.Label>
                          <Form.Control type="password" placeholder="Enter current password" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>New Password</Form.Label>
                          <Form.Control type="password" placeholder="Enter new password" />
                        </Form.Group>

                        <Form.Group className="mb-4">
                          <Form.Label>Confirm New Password</Form.Label>
                          <Form.Control type="password" placeholder="Confirm new password" />
                        </Form.Group>

                        <Button variant="primary">
                          <i className="fas fa-key me-2"></i>
                          Update Password
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card>

                  <Card className="shadow-sm">
                    <Card.Header className="bg-white">
                      <h5 className="mb-0">Two-Factor Authentication</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                          <h6 className="mb-1">Enable 2FA</h6>
                          <small className="text-muted">
                            Add an extra layer of security to your account
                          </small>
                        </div>
                        <Form.Check
                          type="switch"
                          id="2fa-switch"
                          checked={twoFactorEnabled}
                          onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                        />
                      </div>
                      {twoFactorEnabled && (
                        <Button variant="outline-primary" size="sm">
                          <i className="fas fa-qrcode me-2"></i>
                          Set Up Authenticator App
                        </Button>
                      )}
                    </Card.Body>
                  </Card>
                </Tab.Pane>

                <Tab.Pane eventKey="notifications">
                  <Card className="shadow-sm">
                    <Card.Header className="bg-white">
                      <h5 className="mb-0">Notification Preferences</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="mb-4">
                        <h6 className="mb-3">Email Notifications</h6>
                        <Form.Check
                          type="switch"
                          id="email-all"
                          label="Enable all email notifications"
                          checked={emailNotifications}
                          onChange={(e) => setEmailNotifications(e.target.checked)}
                          className="mb-2"
                        />
                        <Form.Check
                          type="switch"
                          id="email-events"
                          label="Event updates and reminders"
                          defaultChecked
                          className="mb-2"
                        />
                        <Form.Check
                          type="switch"
                          id="email-jobs"
                          label="New job postings"
                          defaultChecked
                          className="mb-2"
                        />
                        <Form.Check
                          type="switch"
                          id="email-messages"
                          label="New messages"
                          defaultChecked
                          className="mb-2"
                        />
                        <Form.Check
                          type="switch"
                          id="email-newsletter"
                          label="Newsletter and updates"
                          defaultChecked
                          className="mb-2"
                        />
                      </div>

                      <div className="mb-4">
                        <h6 className="mb-3">Push Notifications</h6>
                        <Form.Check
                          type="switch"
                          id="push-all"
                          label="Enable all push notifications"
                          checked={pushNotifications}
                          onChange={(e) => setPushNotifications(e.target.checked)}
                          className="mb-2"
                        />
                        <Form.Check
                          type="switch"
                          id="push-messages"
                          label="New messages"
                          defaultChecked
                          className="mb-2"
                        />
                        <Form.Check
                          type="switch"
                          id="push-mentions"
                          label="Mentions and tags"
                          defaultChecked
                          className="mb-2"
                        />
                      </div>

                      <Button variant="primary" onClick={handleSaveSettings}>
                        <i className="fas fa-save me-2"></i>
                        Save Preferences
                      </Button>
                    </Card.Body>
                  </Card>
                </Tab.Pane>

                <Tab.Pane eventKey="privacy">
                  <Card className="shadow-sm">
                    <Card.Header className="bg-white">
                      <h5 className="mb-0">Privacy Settings</h5>
                    </Card.Header>
                    <Card.Body>
                      <Form>
                        <Form.Group className="mb-4">
                          <Form.Label>Profile Visibility</Form.Label>
                          <Form.Select
                            value={profileVisibility}
                            onChange={(e) => setProfileVisibility(e.target.value)}
                          >
                            <option value="public">Public - Anyone can view</option>
                            <option value="alumni">Alumni Only - Only alumni can view</option>
                            <option value="private">Private - Only you can view</option>
                          </Form.Select>
                          <Form.Text className="text-muted">
                            Control who can see your profile information
                          </Form.Text>
                        </Form.Group>

                        <Form.Check
                          type="switch"
                          id="show-email"
                          label="Show email address on profile"
                          defaultChecked
                          className="mb-3"
                        />

                        <Form.Check
                          type="switch"
                          id="show-phone"
                          label="Show phone number on profile"
                          className="mb-3"
                        />

                        <Form.Check
                          type="switch"
                          id="allow-messages"
                          label="Allow others to message you"
                          defaultChecked
                          className="mb-3"
                        />

                        <Form.Check
                          type="switch"
                          id="show-activity"
                          label="Show activity status"
                          defaultChecked
                          className="mb-4"
                        />

                        <Button variant="primary" onClick={handleSaveSettings}>
                          <i className="fas fa-save me-2"></i>
                          Save Privacy Settings
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card>
                </Tab.Pane>

                <Tab.Pane eventKey="preferences">
                  <Card className="shadow-sm">
                    <Card.Header className="bg-white">
                      <h5 className="mb-0">Display Preferences</h5>
                    </Card.Header>
                    <Card.Body>
                      <Form>
                        <Form.Group className="mb-3">
                          <Form.Label>Theme</Form.Label>
                          <Form.Select defaultValue="light">
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                            <option value="auto">Auto (System)</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-4">
                          <Form.Label>Items per page</Form.Label>
                          <Form.Select defaultValue="20">
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                          </Form.Select>
                        </Form.Group>

                        <Button variant="primary" onClick={handleSaveSettings}>
                          <i className="fas fa-save me-2"></i>
                          Save Preferences
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default Settings;
