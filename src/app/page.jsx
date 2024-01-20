import { Container } from '@mui/material';

import { Calendar } from '@/components';

const HomePage = () => {
  return (
    <Container maxWidth={false}>
      <Calendar />
    </Container>
  );
}

export default HomePage;
