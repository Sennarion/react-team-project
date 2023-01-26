import WithAuthRedirect from 'hoc/WithAuthRedirect';

function DashboardPage() {
  return <div>DashboardPage</div>;
}

export default WithAuthRedirect(DashboardPage, '/login');
