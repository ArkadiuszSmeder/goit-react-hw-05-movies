import React, { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Container, Header, Link } from "styled/styled-SharedLayout";

export const SharedLayout = () => {

  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};