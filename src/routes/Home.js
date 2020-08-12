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
  const { loading, error, data } = useQuery(allUserQuery);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log(data);
  return data.allUsers.map((u) => <h1 key={u.id}>{u.email}</h1>);
};

export default Home;
