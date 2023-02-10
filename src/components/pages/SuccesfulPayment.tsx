import HeaderHomepage from "../homepage/HeaderHomepage";

function SuccesfulPayment() {
  return (
    <div className="min-h-screen max-h-full pb-10 bg-gradient-to-br from-emerald-100 to-emerald-300">
      <HeaderHomepage isCart />
      <div className="flex flex-col m-10 items-center">
        <h1 className="font-bold">Thank You For Your Order</h1>
        <p>Check your email for more details</p>
      </div>
    </div>
  );
}

export default SuccesfulPayment;
