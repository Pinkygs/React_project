import React from 'react'

export const About = () => {
  const { pname } = useParame();
  return (
    <div>
      <h1>It is about Page and {pname}</h1>
    </div>
  );
};
