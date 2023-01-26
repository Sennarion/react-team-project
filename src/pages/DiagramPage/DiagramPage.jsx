import WithAuthRedirect from 'hoc/WithAuthRedirect';

function DiagramPage() {
  return <div>DiagramPage</div>;
}

export default WithAuthRedirect(DiagramPage, '/login');
