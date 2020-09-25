import React, { useContext } from 'react';
import { Container } from '../../styled/shared';
import { ShopContext } from '../../store';

function Home() {
  const [state] = useContext(ShopContext);

  return (
    <Container>{state.loading ? 'loading...' : 'loaded content'}</Container>
  );
}

export default Home;
