import { useSelector } from 'react-redux';
import { getUsername } from 'redux/auth/selectors';
import {
  UserWrapper,
  UserName,
  LogoutBtn,
  LogoutIcon,
  LogoutText,
} from './User.styled';
import icons from '../../images/icons.svg';

export default function User() {
  const username = useSelector(getUsername);

  return (
    <UserWrapper>
      <UserName>{username}</UserName>
      <LogoutBtn>
        <LogoutIcon width="18" height="18">
          <use href={`${icons}#icon-logout`}></use>
        </LogoutIcon>
        <LogoutText>Exit</LogoutText>
      </LogoutBtn>
    </UserWrapper>
  );
}
