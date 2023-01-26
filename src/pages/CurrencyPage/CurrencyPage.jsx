import WithAuthRedirect from 'hoc/WithAuthRedirect';

function CurrencyPage() {
  return <div>CurrencyPage</div>;
}

export default WithAuthRedirect(CurrencyPage, '/login');
