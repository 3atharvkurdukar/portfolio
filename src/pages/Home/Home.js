import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { ArrowRight, ChevronDown } from 'react-feather';
import { Link } from 'react-router-dom';
import { ReactComponent as LandingIcon } from '../../assets/img/landing.svg';
import { ReactComponent as AutomationIcon } from '../../assets/img/automation.svg';
import { ReactComponent as DashboardIcon } from '../../assets/img/dashboard.svg';
import classes from './Home.module.scss';

const Home = () => {
  return (
    <main>
      <section id="hero" className={classes.heroSection}>
        <Container>
          <Row>
            <Col md={7}>
              <h1 className={classes.name}>
                Atharv <br /> Kurdukar
              </h1>
              <span className="px-5 bg-primary"></span>
            </Col>
            <Col md={5}>
              <h2 className="text-secondary">Full Stack Developer</h2>
              <h2 className="text-secondary">UI/UX Designer</h2>
              <h2 className="text-secondary">Tech Enthusiast</h2>
              <h2 className="text-secondary">Student</h2>
              <p className="text-light">
                Currently situated in{' '}
                <span className="text-primary">Latur, MH, India</span>, I create
                web applications that look great, without compromisng on
                functionality.
              </p>
              <Button
                as={Link}
                to="/projects"
                variant="outline-primary"
                size="lg"
                className="mt-3"
              >
                View Projects <ArrowRight className="ml-2" />
              </Button>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="auto"></Col>
          </Row>
        </Container>
        <div className="align-self-center">
          <ChevronDown className="text-secondary mt-5" size={48} />
        </div>
      </section>
      <section id="specialization">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center text-secondary display-4 mb-5">
                My Specialization
              </h2>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Card className="bg-dark border-0">
                <Card.Body>
                  <div className="d-flex justify-content-center p-3">
                    <LandingIcon className={classes.icon} />
                  </div>
                  <Card.Title className="text-center text-secondary">
                    Landing Pages
                  </Card.Title>
                  <Card.Text className="text-light">
                    Beautifully designed website to attract your customers
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="bg-dark border-0">
                <Card.Body>
                  <div className="d-flex justify-content-center p-3">
                    <AutomationIcon className={classes.icon} />
                  </div>
                  <Card.Title className="text-center text-secondary">
                    Automation Tools
                  </Card.Title>
                  <Card.Text className="text-light">
                    Complex logic to handle your business needs
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="bg-dark border-0">
                <Card.Body>
                  <div className="d-flex justify-content-center p-3">
                    <DashboardIcon className={classes.icon} />
                  </div>
                  <Card.Title className="text-center text-secondary">
                    Admin Dashboard
                  </Card.Title>
                  <Card.Text className="text-light">
                    Monitor &amp; manage your IT solution with ease
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Home;
