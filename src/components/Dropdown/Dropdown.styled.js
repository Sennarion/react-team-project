import styled from 'styled-components';

export const Select = styled.select`
  border-radius: 20px;
  min-width: 280px;
  padding: 12px 40px 14px 40px;
  appearance: none;
  font-family: ${({ theme }) => theme.fonts.primary}
  font-size: ${({ theme }) => theme.fontSizes.small}
  }
`;

// ${({ theme }) => theme.spacing(75)}
