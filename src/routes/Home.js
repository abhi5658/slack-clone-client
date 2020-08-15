import React from 'react';
import { gql, useQuery } from '@apollo/client';

const allUserQuery = gql`
  {
    allUsers {
      id
      email
    }
  }
`;

const Home = () => {
  const {
    loading,
    error,
    data: { allUsers = [] } = { allUsers: [] },
  } = useQuery(allUserQuery);

  if (loading) return 'Loading users...';
  if (error) return `Error! ${error.message}`;

  return allUsers.map((u) => (
    <h1 id={u.id} key={u.id}>
      {u.email}
    </h1>
  ));
};

export default Home;
