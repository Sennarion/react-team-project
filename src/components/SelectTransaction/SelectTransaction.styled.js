import styled from 'styled-components';

export const SelectWrapper = styled.div`
  position: relative;
`;

export const ButtonSelect = styled.button`
  width: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.grey};
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(1)};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.spacing(5)};
  line-height: ${({ theme }) => theme.spacing(8)};
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;
export const SelectList = styled.ul`
  position: absolute;
  top: ${({ theme }) => theme.spacing(9.5)};
  left: 0;
  z-index: 1;
  width: 100%;
  height: ${({ theme }) => theme.spacing(75)};
  overflow: auto;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(25px);
  border-radius: ${({ theme }) => theme.spacing(5)};

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
export const SelectItem = styled.li`
  cursor: pointer;
  padding-top: ${({ theme }) => theme.spacing(3.5)};
  padding-bottom: ${({ theme }) => theme.spacing(3.5)};
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: ${({ theme }) => theme.spacing(4)};
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accentPink};
    background: ${({ theme }) => theme.colors.white};
  }
`;
