import { Container } from 'react-bootstrap';

interface PlaceholderProps {
  title: string;
  icon: string;
}

const Placeholder = ({ title, icon }: PlaceholderProps) => {
  return (
    <div className="page-wrapper">
      <Container>
        <div className="text-center py-5">
          <i className={`fas ${icon} fa-5x text-primary mb-4`}></i>
          <h1 className="section-title">{title}</h1>
          <p className="section-subtitle">
            This page is under development. More content coming soon!
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Placeholder;
