import React from 'react';
import styled from 'styled-components';

const BaseCircle = styled.div`
  width: 200px;
  height: 200px;
  background: var(--color);
  border-radius: 50%; /* make it round */
  @media (max-width: 1000px) {
    width: 120px;
    height: 120px;
  }
`;

const PercentCircle = styled.div`
  display: grid;
  width: 200px;
  height: 200px;
  background: conic-gradient(var(--color) var(--percent), var(--light) 0);
  border-radius: 50%; /* make it round */
  @media (max-width: 1000px) {
    width: 120px;
    height: 120px;
  }
`;

const WhiteLine = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  width: 180px;
  height: 180px;
  background: white;
  border-radius: 50%;
  @media (max-width: 1000px) {
    width: 110px;
    height: 110px;
  }
`;

const InnerCircle = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  width: 170px;
  height: 170px;
  background: var(--color);
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 100px;
    height: 100px;
  }
`;

export default ({ percent, color, children }) => {
  return (
    <BaseCircle style={{ '--color': `${color}50` }}>
      <PercentCircle
        style={{
          '--color': `${color}`,
          '--light': `${color}50`,
          '--percent': `${100 * percent}%`,
        }}
      >
        <WhiteLine>
          <InnerCircle
            style={{
              '--color': `${color}`,
            }}
          >
            {children}
          </InnerCircle>
        </WhiteLine>
      </PercentCircle>
    </BaseCircle>
  );
};
