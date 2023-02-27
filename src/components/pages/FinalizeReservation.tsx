import Header from "../homepage/Header";
import MultiPageForm from "../form/MultiPageForm";

function FinalizeReservation() {
  return (
    <div className="min-h-screen max-h-full pb-10 bg-gradient-to-br from-emerald-100 to-emerald-300">
      <Header isCart={false} />
      <div className="flex flex-col m-10 ">
        <div className="flex flex-row justify-center">
          <MultiPageForm />
        </div>
      </div>
    </div>
  );
}

export default FinalizeReservation;
