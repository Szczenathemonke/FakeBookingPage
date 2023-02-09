import { useContext } from "react";
import { CartContext } from "../dataAndFeatures/CartContext";
import { useFormikContext } from "formik";
import { Values } from "./MultiPageForm";
import RoomCardCheckout from "./RoomCardCheckout";
import ValuesInSummary from "./ValuesInSummary";

const FormSummary = () => {
  const cart = useContext(CartContext);
  const { values } = useFormikContext<Values>();

  return (
    <>
      <div className="font-bold">Summary</div>

      <div className="flex flex-col items-center gap-2 my-2  bg-emerald-100 rounded-xl p-4">
        <div className="font-bold">Purchase Details:</div>
        <div className="w-1/2">
          <ValuesInSummary valueName={"firstName: "} value={values.firstName} />
          <ValuesInSummary valueName={"lastName: "} value={values.lastName} />
          <ValuesInSummary valueName={"address1: "} value={values.address1} />
          <ValuesInSummary valueName={"address2: "} value={values.address2} />
          <ValuesInSummary valueName={"city: "} value={values.city} />
          <ValuesInSummary valueName={"country: "} value={values.country} />
          <ValuesInSummary valueName={"email: "} value={values.email} />
          <ValuesInSummary valueName={"zip: "} value={values.zip} />
        </div>
      </div>

      {cart?.items.map((item) => (
        <div className="flex flex-row items-center gap-5 my-2 pr-2 bg-emerald-100 rounded-xl">
          <RoomCardCheckout name={item.details.name} />
          <div key={item.id}>
            <div>{item.details.name} </div>
            <span>od </span>
            <span>
              {
                values.reservation.find((e) => e.room_id === item.id)
                  ?.start_date
              }
            </span>
            <span> do </span>
            <span>
              {values.reservation.find((e) => e.room_id === item.id)?.end_date}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default FormSummary;
