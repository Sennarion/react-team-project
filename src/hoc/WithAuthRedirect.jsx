// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function WithAuthRedirect(Component, navigateTo) {
  const ProtectedComponent = props => {
    const userData = {}; // тут треба потім переписати
    return userData !== null ? (
      <Component {...props} />
    ) : (
      <Navigate to={navigateTo} />
    );
  };
  return ProtectedComponent;
}
