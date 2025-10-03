import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Badge, InputGroup } from 'react-bootstrap';

interface Message {
  id: number;
  sender: string;
  text: string;
  time: string;
  isOwn: boolean;
}

interface Chat {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
}

const Messaging = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(1);
  const [messageText, setMessageText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const chats: Chat[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=0d6efd&color=fff',
      lastMessage: 'Thanks for the mentorship session!',
      time: '2m ago',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: 'https://ui-avatars.com/api/?name=Michael+Chen&background=198754&color=fff',
      lastMessage: 'Can we schedule a call?',
      time: '15m ago',
      unread: 1,
      online: true
    },
    {
      id: 3,
      name: 'Emily Williams',
      avatar: 'https://ui-avatars.com/api/?name=Emily+Williams&background=ffc107&color=000',
      lastMessage: 'Great! See you at the event',
      time: '1h ago',
      unread: 0,
      online: false
    },
    {
      id: 4,
      name: 'David Martinez',
      avatar: 'https://ui-avatars.com/api/?name=David+Martinez&background=dc3545&color=fff',
      lastMessage: 'Thanks for connecting',
      time: '3h ago',
      unread: 0,
      online: false
    },
    {
      id: 5,
      name: 'Alumni Group 2020',
      avatar: 'https://ui-avatars.com/api/?name=AG&background=6c757d&color=fff',
      lastMessage: 'Reunion planning discussion',
      time: '1d ago',
      unread: 5,
      online: false
    }
  ];

  const messages: Message[] = [
    {
      id: 1,
      sender: 'Sarah Johnson',
      text: 'Hi! I saw your profile and would love to learn more about your career path.',
      time: '10:30 AM',
      isOwn: false
    },
    {
      id: 2,
      sender: 'You',
      text: 'Hello Sarah! I\'d be happy to help. What specifically would you like to know?',
      time: '10:32 AM',
      isOwn: true
    },
    {
      id: 3,
      sender: 'Sarah Johnson',
      text: 'I\'m interested in transitioning into software engineering. How did you get started?',
      time: '10:35 AM',
      isOwn: false
    },
    {
      id: 4,
      sender: 'You',
      text: 'That\'s great! I started with online courses and built several projects. I can share some resources with you.',
      time: '10:37 AM',
      isOwn: true
    },
    {
      id: 5,
      sender: 'Sarah Johnson',
      text: 'Thanks for the mentorship session!',
      time: '10:40 AM',
      isOwn: false
    }
  ];

  const handleSendMessage = () => {
    if (messageText.trim()) {
      console.log('Sending message:', messageText);
      setMessageText('');
    }
  };

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page-wrapper">
      <Container fluid>
        <div className="mb-4">
          <h1 className="section-title">Messages</h1>
          <p className="text-muted">Connect with alumni, students, and mentors</p>
        </div>

        <Row style={{ height: 'calc(100vh - 250px)' }}>
          <Col md={4} className="pe-0">
            <Card className="shadow-sm h-100 d-flex flex-column">
              <Card.Header className="bg-white">
                <InputGroup>
                  <InputGroup.Text>
                    <i className="fas fa-search"></i>
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Search messages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </InputGroup>
              </Card.Header>
              <Card.Body className="p-0 overflow-auto">
                {filteredChats.map(chat => (
                  <div
                    key={chat.id}
                    className={`d-flex align-items-center p-3 border-bottom cursor-pointer ${
                      selectedChat === chat.id ? 'bg-light' : ''
                    }`}
                    onClick={() => setSelectedChat(chat.id)}
                    style={{ cursor: 'pointer', transition: 'background-color 0.2s' }}
                    onMouseEnter={(e) => {
                      if (selectedChat !== chat.id) {
                        e.currentTarget.style.backgroundColor = '#f8f9fa';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedChat !== chat.id) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    <div className="position-relative me-3">
                      <img
                        src={chat.avatar}
                        alt={chat.name}
                        className="rounded-circle"
                        style={{ width: '50px', height: '50px' }}
                      />
                      {chat.online && (
                        <div
                          className="position-absolute bg-success rounded-circle border border-2 border-white"
                          style={{
                            width: '14px',
                            height: '14px',
                            bottom: '2px',
                            right: '2px'
                          }}
                        ></div>
                      )}
                    </div>
                    <div className="flex-grow-1 min-width-0">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <h6 className="mb-0 text-truncate">{chat.name}</h6>
                        <small className="text-muted">{chat.time}</small>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0 text-muted text-truncate small">{chat.lastMessage}</p>
                        {chat.unread > 0 && (
                          <Badge bg="primary" pill className="ms-2">
                            {chat.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>

          <Col md={8} className="ps-0">
            {selectedChat ? (
              <Card className="shadow-sm h-100 d-flex flex-column">
                <Card.Header className="bg-white">
                  <div className="d-flex align-items-center">
                    <img
                      src={chats.find(c => c.id === selectedChat)?.avatar}
                      alt="Profile"
                      className="rounded-circle me-3"
                      style={{ width: '40px', height: '40px' }}
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-0">{chats.find(c => c.id === selectedChat)?.name}</h6>
                      <small className="text-muted">
                        {chats.find(c => c.id === selectedChat)?.online ? (
                          <><span className="text-success">●</span> Online</>
                        ) : (
                          'Offline'
                        )}
                      </small>
                    </div>
                    <div>
                      <Button variant="link" className="text-muted p-1 me-2">
                        <i className="fas fa-phone"></i>
                      </Button>
                      <Button variant="link" className="text-muted p-1 me-2">
                        <i className="fas fa-video"></i>
                      </Button>
                      <Button variant="link" className="text-muted p-1">
                        <i className="fas fa-ellipsis-v"></i>
                      </Button>
                    </div>
                  </div>
                </Card.Header>

                <Card.Body className="overflow-auto flex-grow-1" style={{ maxHeight: 'calc(100vh - 400px)' }}>
                  {messages.map(message => (
                    <div
                      key={message.id}
                      className={`d-flex mb-3 ${message.isOwn ? 'justify-content-end' : 'justify-content-start'}`}
                    >
                      {!message.isOwn && (
                        <img
                          src={chats.find(c => c.id === selectedChat)?.avatar}
                          alt="Profile"
                          className="rounded-circle me-2"
                          style={{ width: '32px', height: '32px' }}
                        />
                      )}
                      <div style={{ maxWidth: '70%' }}>
                        <div
                          className={`p-3 rounded ${
                            message.isOwn
                              ? 'bg-primary text-white'
                              : 'bg-light'
                          }`}
                          style={{
                            borderRadius: message.isOwn ? '20px 20px 5px 20px' : '20px 20px 20px 5px'
                          }}
                        >
                          <p className="mb-0">{message.text}</p>
                        </div>
                        <small className={`text-muted d-block mt-1 ${message.isOwn ? 'text-end' : 'text-start'}`}>
                          {message.time}
                        </small>
                      </div>
                      {message.isOwn && (
                        <img
                          src="https://ui-avatars.com/api/?name=John+Doe&background=0d6efd&color=fff"
                          alt="Profile"
                          className="rounded-circle ms-2"
                          style={{ width: '32px', height: '32px' }}
                        />
                      )}
                    </div>
                  ))}
                </Card.Body>

                <Card.Footer className="bg-white">
                  <InputGroup>
                    <Button variant="link" className="text-muted">
                      <i className="fas fa-paperclip"></i>
                    </Button>
                    <Button variant="link" className="text-muted">
                      <i className="fas fa-image"></i>
                    </Button>
                    <Form.Control
                      placeholder="Type a message..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleSendMessage();
                        }
                      }}
                    />
                    <Button variant="primary" onClick={handleSendMessage}>
                      <i className="fas fa-paper-plane"></i>
                    </Button>
                  </InputGroup>
                </Card.Footer>
              </Card>
            ) : (
              <Card className="shadow-sm h-100 d-flex align-items-center justify-content-center">
                <div className="text-center text-muted">
                  <i className="fas fa-comments fa-4x mb-3"></i>
                  <h5>Select a conversation to start messaging</h5>
                </div>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Messaging;
