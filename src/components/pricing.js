import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const pricingData = [
  {
    id: 1,
    plan: 'Basic',
    price: '£49',
    features: [
      'Wireframing',
      'Visual Design',
      '5 pages',
      'Free Hosting',
      'Support & Assistance',
    ],
    link: 'https://www.google.com',
  },
  {
    id: 2,
    plan: 'Premium',
    price: '£149',
    features: [
      'Wireframing',
      'Visual Design',
      '15 pages',
      'Free Hosting',
      'Support & Assistance',
    ],
    link: 'https://www.facebook.com',
  },
  {
    id: 3,
    plan: 'Ultimate',
    price: '£349',
    features: [
      'Wireframing',
      'Visual Design',
      'Unlimited pages',
      'Free Hosting',
      'Support & Assistance',
    ],
    link: 'https://www.twitter.com',
  },
];

export default function AppPricing() {
  return (
    <section id="pricing" className="block pricing-block">
      <Container fluid>
        <div className="title-holder">
          <h2>pricing &amp; plans</h2>
          <div className="subtitle">check out pricing &amp; plans</div>
        </div>
        <Row>
          {pricingData.map((pricing) => {
            return (
              <Col key={pricing.id} sm={4}>
                <div className="heading">
                  <h3>{pricing.plan}</h3>
                  <span className="price">{pricing.price}</span>
                </div>
                <div className="content">
                  <ListGroup>
                    {pricing.features.map((feature, idx) => {
                      return (
                        <ListGroup.Item key={idx}>{feature}</ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                </div>
                <div className="btn-holder">
                  <a href="#" className="btn btn-primary">
                    Order now
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
