import { ThreeCircles } from 'react-loader-spinner';
import { theme } from 'styles/theme';
import { LoaderWrapper } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderWrapper>
      <ThreeCircles
        color={theme.colors.accentGreen}
        innerCircleColor={theme.colors.accentBlue}
        ariaLabel="three-circles-rotating"
        height="150"
        width="150"
      />
    </LoaderWrapper>
  );
}
