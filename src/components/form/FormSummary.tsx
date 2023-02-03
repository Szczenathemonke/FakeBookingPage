import { useContext } from "react";
import { CartContext } from "../dataAndFeatures/CartContext";
import { useFormikContext } from "formik";
import { Values } from "./MultiPageForm";
import RoomCardCheckout from "./RoomCardCheckout";

const FormSummary = () => {
  const cart = useContext(CartContext);
  const { values } = useFormikContext<Values>();

  return (
    <>
      <div className="font-bold">Summary</div>

      <div className="flex flex-col items-center gap-2 my-2  bg-emerald-100 rounded-xl p-4">
        <div className="font-bold">Dane adresowe:</div>
        <div className="w-1/2">
          <div className="flex gap-5 justify-between">
            <span>FirstName: </span>
            <span>{values.firstName}</span>
          </div>
          <div className="flex gap-5 justify-between">
            <span>LastName: </span>
            <span>{values.lastName}</span>
          </div>
          <div className="flex gap-5 justify-between">
            <span>address1: </span>
            <span>{values.address1}</span>
          </div>
          <div className="flex gap-5 justify-between">
            <span>address2: </span>
            <span>{values.address2}</span>
          </div>
          <div className="flex gap-5 justify-between">
            <span>city: </span>
            <span>{values.city}</span>
          </div>
          <div className="flex gap-5 justify-between">
            <span>country: </span>
            <span>{values.country}</span>
          </div>
          <div className="flex gap-5 justify-between">
            <span>email: </span>
            <span>{values.email}</span>
          </div>
          <div className="flex gap-5 justify-between">
            <span>zip: </span>
            <span>{values.zip}</span>
          </div>
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
