import { FormSlider } from './slider.styles';
import { Container } from 'react-bootstrap';

const Slider = ({ value, onChangeHandler }) => {
  return (
    <Container fluid>
      <h5 className="text-light">Number of Bars: {value}</h5>
      <FormSlider onChange={onChangeHandler} />
    </Container>
  );
};

export default Slider;
