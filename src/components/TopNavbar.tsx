import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Badge } from 'react-bootstrap';
import './TopNavbar.css';

const TopNavbar = () => {
  const [isLoggedIn] = useState(true);

  const messages = [
    { id: 1, sender: 'John Doe', text: 'Thanks for connecting!', time: '2m ago' },
    { id: 2, sender: 'Jane Smith', text: 'Looking forward to the event', time: '1h ago' },
    { id: 3, sender: 'Mike Johnson', text: 'Can we schedule a call?', time: '3h ago' }
  ];

  const notifications = [
    { id: 1, text: 'New job posting in Software Engineering', time: '5m ago', type: 'job' },
    { id: 2, text: 'Alumni meetup scheduled for next week', time: '1h ago', type: 'event' },
    { id: 3, text: 'Sarah accepted your mentorship request', time: '2h ago', type: 'mentorship' },
    { id: 4, text: 'Your donation was successful', time: '1d ago', type: 'donation' }
  ];

  return (
    <Navbar expand="lg" fixed="top" className="top-navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <i className="fas fa-graduation-cap me-2"></i>
          Ikroop
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto navbar-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            <NavDropdown title="Community Hub" id="community-dropdown" className="mega-dropdown">
              <NavDropdown.Item as={Link} to="/alumni-directory">
                <i className="fas fa-users me-2"></i>
                Alumni Directory
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/student-directory">
                <i className="fas fa-user-graduate me-2"></i>
                Student Directory
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/stories">
                <i className="fas fa-star me-2"></i>
                Stories & Achievements
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/gallery">
                <i className="fas fa-images me-2"></i>
                Gallery
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Careers & Mentorship" id="careers-dropdown">
              <NavDropdown.Item as={Link} to="/jobs">
                <i className="fas fa-briefcase me-2"></i>
                Jobs
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/internships">
                <i className="fas fa-laptop-code me-2"></i>
                Internships
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mentorship">
                <i className="fas fa-hands-helping me-2"></i>
                Mentorship Programs
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Events & Campaigns" id="events-dropdown">
              <NavDropdown.Item as={Link} to="/events">
                <i className="fas fa-calendar-alt me-2"></i>
                Events & Reunions
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/donations">
                <i className="fas fa-donate me-2"></i>
                Campaigns & Donations
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          </Nav>

          <Nav className="ms-auto navbar-right">
            {isLoggedIn ? (
              <>
                <NavDropdown
                  title={
                    <span className="icon-wrapper">
                      <i className="fas fa-envelope"></i>
                      <Badge bg="danger" className="badge-notification">{messages.length}</Badge>
                    </span>
                  }
                  id="messages-dropdown"
                  align="end"
                  className="icon-dropdown"
                >
                  <div className="dropdown-header">
                    <strong>Messages</strong>
                  </div>
                  {messages.map(msg => (
                    <NavDropdown.Item key={msg.id} className="message-item">
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <div className="fw-bold">{msg.sender}</div>
                          <small className="text-muted">{msg.text}</small>
                        </div>
                        <small className="text-muted ms-2">{msg.time}</small>
                      </div>
                    </NavDropdown.Item>
                  ))}
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="text-center text-primary">
                    View all messages
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title={
                    <span className="icon-wrapper">
                      <i className="fas fa-bell"></i>
                      <Badge bg="danger" className="badge-notification">{notifications.length}</Badge>
                    </span>
                  }
                  id="notifications-dropdown"
                  align="end"
                  className="icon-dropdown"
                >
                  <div className="dropdown-header">
                    <strong>Notifications</strong>
                  </div>
                  {notifications.map(notif => (
                    <NavDropdown.Item key={notif.id} className="notification-item">
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <small>{notif.text}</small>
                        </div>
                        <small className="text-muted ms-2">{notif.time}</small>
                      </div>
                    </NavDropdown.Item>
                  ))}
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="text-center text-primary">
                    View all notifications
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title={
                    <span className="d-flex align-items-center">
                      <img
                        src="https://ui-avatars.com/api/?name=John+Doe&background=0d6efd&color=fff"
                        alt="Profile"
                        className="profile-avatar"
                      />
                    </span>
                  }
                  id="profile-dropdown"
                  align="end"
                >
                  <div className="dropdown-header">
                    <strong>John Doe</strong>
                    <br />
                    <small className="text-muted">john.doe@example.com</small>
                  </div>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/profile">
                    <i className="fas fa-user me-2"></i>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/settings">
                    <i className="fas fa-cog me-2"></i>
                    Settings
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/login">
                    <i className="fas fa-sign-out-alt me-2"></i>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" className="btn btn-outline-primary me-2">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup" className="btn btn-primary">
                  Sign Up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
