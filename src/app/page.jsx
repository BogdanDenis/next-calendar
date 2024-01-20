import { Container } from '@mui/material';

import { Calendar } from '@/features';

const HomePage = () => {
  return (
    <Container maxWidth={false}>
      <Calendar />
    </Container>
  );
}

export default HomePage;
