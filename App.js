import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Paper,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  CssBaseline,
  createTheme,
  ThemeProvider,
  useMediaQuery
} from '@mui/material';
import {
  Home as HomeIcon,
  Info as InfoIcon,
  School as SchoolIcon,
  Description as FileTextIcon,
  Phone as PhoneIcon,
  Menu as MenuIcon,
  ChevronRight as ChevronRightIcon,
  ArrowBack as ArrowBackIcon
} from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0A3161', // Dark blue, inspired by the college logo placeholder
    },
    secondary: {
      main: '#3B82F6', // Lighter blue for accents
    },
    background: {
      default: '#F0F4F8', // Off-white for background
      paper: '#FFFFFF', // White for card backgrounds
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 700,
      color: '#0A3161',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50, // Rounded button corners
          fontWeight: 600,
          textTransform: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 24, // Consistent rounded corners for sections
        },
      },
    },
  },
});

const navItems = [
  { name: 'Home', icon: HomeIcon, page: 'home' },
  { name: 'About Us', icon: InfoIcon, page: 'about' },
  { name: 'Academics', icon: SchoolIcon, page: 'academics' },
  { name: 'Admissions', icon: FileTextIcon, page: 'admissions' },
  { name: 'Contact', icon: PhoneIcon, page: 'contact' },
];

const academicData = [
  {
    title: 'Computer Engineering',
    description: 'Advanced studies in software development, data science, and artificial intelligence.',
    details: 'The Computer Engineering program focuses on core concepts of computing, including algorithms, data structures, and computer architecture. Students gain hands-on experience in building complex software systems and are prepared for careers in a wide range of industries, from technology to finance.',
  },
  {
    title: 'Mechanical Engineering',
    description: 'Focus on machine design, thermal sciences, and manufacturing processes.',
    details: 'Mechanical Engineering is one of the oldest and broadest engineering disciplines. Our program covers the design, analysis, and manufacturing of mechanical systems. Students learn to apply principles of motion, energy, and force to create innovative solutions for various real-world problems.',
  },
  {
    title: 'Civil Engineering',
    description: 'Building the future with expertise in structural design, transportation, and environmental systems.',
    details: 'The Civil Engineering department trains students to design, construct, and maintain physical and naturally built environments, including roads, bridges, canals, dams, and buildings. The curriculum integrates modern technologies with foundational engineering principles.',
  },
  {
    title: 'Electronics & Telecommunication',
    description: 'Exploring the world of communication systems, embedded systems, and signal processing.',
    details: 'This program delves into the design and development of electronic circuits, telecommunication systems, and embedded systems. Students learn about digital and analog electronics, signal processing, and communication networks, preparing them for the ever-evolving technology sector.',
  },
  {
    title: 'Information Technology',
    description: 'Specialized courses in network security, database management, and web technologies.',
    details: 'The Information Technology program is designed to equip students with the skills required to manage and secure information systems. Key areas of study include networking, database management, cybersecurity, and modern web development, all essential for today’s digital world.',
  },
];

const Section = ({ title, children, showBack = false }) => (
  <Paper elevation={4} sx={{ my: 6, p: { xs: 3, md: 6 }, borderRadius: 6 }}>
    {showBack && (
      <Button
        onClick={() => {
          setCurrentPage('academics');
          setSelectedProgram(null);
        }}
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 2 }}
      >
        Back to Academics
      </Button>
    )}
    <Typography variant="h2" align="center" gutterBottom sx={{ mb: 4 }}>
      {title}
    </Typography>
    {children}
  </Paper>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderContent = () => {
    if (selectedProgram) {
      return (
        <Section title={selectedProgram.title} showBack={true}>
          <Typography variant="body1" sx={{ mt: 3, color: 'text.secondary' }}>
            {selectedProgram.details}
          </Typography>
        </Section>
      );
    }

    switch (currentPage) {
      case 'home':
        return (
          <>
            <Box
              sx={{
                height: { xs: '60vh', md: '80vh' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 6,
                mb: 6,
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url('https://placehold.co/1920x1080/0A3161/F0F4F8?text=DYPCET+Campus')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.8,
                }}
              />
              <Box sx={{
                position: 'relative',
                zIndex: 10,
                p: 4,
                backgroundColor: 'rgba(10, 49, 97, 0.7)',
                backdropFilter: 'blur(4px)',
                borderRadius: 6,
                boxShadow: 3,
                color: 'white',
              }}>
                <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' }, mb: 2 }}>
                  Welcome to DYPCET
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 300, maxWidth: 'md', mx: 'auto' }}>
                  Pioneering excellence in engineering education and research since 1984.
                </Typography>
                <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ backgroundColor: 'white', color: 'primary.main', '&:hover': { backgroundColor: 'grey.200' } }}
                    onClick={() => setCurrentPage('about')}
                    endIcon={<ChevronRightIcon />}
                  >
                    Learn More
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => setCurrentPage('admissions')}
                    endIcon={<ChevronRightIcon />}
                  >
                    Apply Now
                  </Button>
                </Box>
              </Box>
            </Box>

            <Section title="Why Choose DYPCET?">
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
                <Paper elevation={2} sx={{ p: 4, textAlign: 'center' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <SchoolIcon sx={{ fontSize: 60, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" color="primary" gutterBottom>
                    Academic Excellence
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    A curriculum designed to meet global standards with highly qualified faculty.
                  </Typography>
                </Paper>
                <Paper elevation={2} sx={{ p: 4, textAlign: 'center' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <FileTextIcon sx={{ fontSize: 60, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" color="primary" gutterBottom>
                    Research & Innovation
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    State-of-the-art labs and research centers to foster creativity and innovation.
                  </Typography>
                </Paper>
                <Paper elevation={2} sx={{ p: 4, textAlign: 'center' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <PhoneIcon sx={{ fontSize: 60, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" color="primary" gutterBottom>
                    Placements
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Strong industry connections leading to excellent placement opportunities for students.
                  </Typography>
                </Paper>
              </Box>
            </Section>
          </>
        );
      case 'about':
        return (
          <Section title="About Us">
            <Typography variant="body1" paragraph>
              Established in 1984, the D. Y. Patil College of Engineering & Technology (DYPCET) is a premier institution in Kolhapur, Maharashtra, committed to providing quality technical education. Our vision is to empower young minds with knowledge, skills, and values to become competent professionals and responsible citizens.
            </Typography>
            <Typography variant="body1" paragraph>
              We offer a wide range of undergraduate and postgraduate programs in various engineering disciplines. Our dedicated faculty, modern infrastructure, and vibrant campus life provide a holistic learning environment that encourages academic excellence and personal growth.
            </Typography>
            <Typography variant="body1" sx={{ fontStyle: 'italic', fontWeight: 'medium', mt: 4, color: 'primary.main' }}>
              "Our mission is to create a community of learners who are innovative, ethical, and ready to meet the challenges of the future."
            </Typography>
          </Section>
        );
      case 'academics':
        return (
          <Section title="Academics">
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
              {academicData.map((dept, index) => (
                <Button
                  key={index}
                  onClick={() => setSelectedProgram(dept)}
                  variant="outlined"
                  sx={{
                    p: 3,
                    height: '100%',
                    textAlign: 'left',
                    textTransform: 'none',
                    borderColor: 'primary.main',
                    borderWidth: 2,
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'white',
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                      {dept.title}
                    </Typography>
                    <Typography variant="body2">{dept.description}</Typography>
                  </Box>
                </Button>
              ))}
            </Box>
          </Section>
        );
      case 'admissions':
        return (
          <Section title="Admissions">
            <Typography variant="body1" paragraph>
              Admissions to our undergraduate and postgraduate programs are based on merit and performance in national and state-level entrance examinations. We encourage prospective students to visit our campus and explore the facilities and academic environment.
            </Typography>
            <List sx={{ color: 'text.secondary' }}>
              <ListItemButton sx={{ p: 0 }}>
                <ListItemText primary="Eligibility criteria vary by program." />
              </ListItemButton>
              <ListItemButton sx={{ p: 0 }}>
                <ListItemText primary="Application forms are available online from June onwards." />
              </ListItemButton>
              <ListItemButton sx={{ p: 0 }}>
                <ListItemText primary="Entrance exams accepted: JEE, MHT-CET, etc." />
              </ListItemButton>
              <ListItemButton sx={{ p: 0 }}>
                <ListItemText primary="For more details, please download our admission brochure." />
              </ListItemButton>
            </List>
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Button
                variant="contained"
                color="secondary"
                href="#"
              >
                Download Brochure
              </Button>
            </Box>
          </Section>
        );
      case 'contact':
        return (
          <Section title="Contact Us">
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h5" color="primary" gutterBottom>
                  DYPCET, Kolhapur
                </Typography>
                <Typography variant="body1" paragraph>
                  DYP Campus, Kasaba Bawada, Kolhapur, Maharashtra - 416006
                </Typography>
                <Typography variant="body1">
                  <Typography component="span" fontWeight="bold">Phone:</Typography> +91-231-2601431
                </Typography>
                <Typography variant="body1">
                  <Typography component="span" fontWeight="bold">Email:</Typography> info@dypcet.ac.in
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h5" color="primary" gutterBottom>
                  Location
                </Typography>
                <Paper elevation={2} sx={{ height: 256, overflow: 'hidden' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.839847184206!2d74.25419999999999!3d16.736999999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc141b712c5b76b%3A0xc0f1b2d0a0b6d274!2sDYP+Campus%2C+Kasaba+Bawada%2C+Kolhapur%2C+Maharashtra+416006!5e0!3m2!1sen!2sin!4v1678888888888!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Paper>
              </Box>
            </Box>
          </Section>
        );
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', pb: 8 }}>
        {/* Navigation Bar */}
        <AppBar position="sticky" elevation={6}>
          <Toolbar>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <Box
                component="img"
                src="https://placehold.co/50x50/FFFFFF/000000?text=DYP"
                alt="DYPCET Logo"
                sx={{ width: 40, height: 40, mr: 1, borderRadius: '50%' }}
              />
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                DYPCET
              </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {navItems.map((item) => (
                <Button
                  key={item.page}
                  color="inherit"
                  onClick={() => {
                    setCurrentPage(item.page);
                    setSelectedProgram(null);
                  }}
                  sx={{
                    mx: 1,
                    fontWeight: 600,
                    ...(currentPage === item.page && { color: 'secondary.main' }),
                  }}
                  startIcon={<item.icon />}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton color="inherit" onClick={handleMenuToggle}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Mobile Menu Drawer */}
        <Drawer
          anchor="left"
          open={isMenuOpen}
          onClose={handleMenuToggle}
          sx={{ '& .MuiDrawer-paper': { bgcolor: 'primary.main', color: 'white' } }}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={handleMenuToggle}
            onKeyDown={handleMenuToggle}
          >
            <List>
              {navItems.map((item) => (
                <ListItemButton
                  key={item.page}
                  onClick={() => {
                    setCurrentPage(item.page);
                    setSelectedProgram(null);
                  }}
                >
                  <ListItemIcon sx={{ color: 'white' }}>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText primary={item.name} sx={{ color: 'white', fontWeight: 'bold' }} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Main Content */}
        <Container component="main" maxWidth="lg">
          <Box sx={{ pt: 4, animation: 'fadeInUp 0.8s ease-out' }}>
            {renderContent()}
          </Box>
        </Container>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            py: 4,
            textAlign: 'center',
            mt: 'auto',
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="body2">
              &copy; 2024 D. Y. Patil College of Engineering & Technology, Kolhapur. All Rights Reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
