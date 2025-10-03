# Ikroop - Digital Alumni Engagement Platform

A comprehensive React-based web application for alumni engagement, built for SIH Problem Statement ID: 25017.

## Features

### Core Functionality
- **Home Page**: Hero section with platform highlights and feature cards
- **Alumni Directory**: Searchable alumni profiles with filters (batch, department)
- **Job/Internship Portal**: Job listings with search and filter capabilities
- **Events & Reunions**: Event management with registration options
- **Mentorship Programs**: Connect with mentors and book sessions
- **Donations & Campaigns**: Support campaigns with progress tracking
- **Dashboard**: Analytics and quick actions for administrators

### User Features
- **Authentication**: Login and signup pages with user type selection
- **Navigation**: Sticky navbar with mega dropdowns
- **Messages & Notifications**: Real-time updates with badge indicators
- **Profile Management**: User profile and settings

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: React-Bootstrap + Custom CSS
- **Icons**: Font Awesome
- **Routing**: React Router DOM
- **Build Tool**: Vite

## Project Structure

```
src/
├── components/
│   ├── TopNavbar.tsx          # Main navigation component
│   ├── TopNavbar.css          # Navbar styles
│   └── Footer.tsx             # Footer component
├── pages/
│   ├── Home.tsx               # Landing page
│   ├── AlumniDirectory.tsx    # Alumni profiles
│   ├── Jobs.tsx               # Job/internship listings
│   ├── Events.tsx             # Events and reunions
│   ├── Donations.tsx          # Donation campaigns
│   ├── Mentorship.tsx         # Mentorship programs
│   ├── Mentorship.css         # Mentorship styles
│   ├── Dashboard.tsx          # Admin dashboard
│   ├── Login.tsx              # Login page
│   ├── Signup.tsx             # Signup page
│   ├── Auth.css               # Authentication styles
│   └── Placeholder.tsx        # Placeholder for future pages
├── App.tsx                    # Main app component with routing
├── index.css                  # Global styles
└── main.tsx                   # Application entry point
```

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Design Highlights

- **Responsive Design**: Mobile-first approach with Bootstrap grid system
- **Modern UI**: Clean, professional theme with card-based layouts
- **Smooth Transitions**: Hover effects and animations for better UX
- **Consistent Branding**: Blue primary color (#0d6efd) throughout
- **Accessible**: Semantic HTML and proper ARIA labels

## Pages Overview

1. **Home**: Platform introduction with feature highlights
2. **Alumni Directory**: Browse and filter alumni profiles
3. **Jobs**: Search and apply for jobs/internships
4. **Mentorship**: View mentor profiles and book sessions
5. **Events**: Register for upcoming events and reunions
6. **Donations**: Contribute to campaigns with progress tracking
7. **Dashboard**: View analytics and manage platform (admin)
8. **Login/Signup**: User authentication with role selection

## Future Enhancements

- Student Directory
- Stories & Achievements gallery
- Photo gallery
- Real-time messaging
- Advanced search and filters
- Payment gateway integration
- Email notifications
- Mobile app version

## License

This project was developed for Smart India Hackathon 2025.
