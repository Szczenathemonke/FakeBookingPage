import React from "react";
import { Values } from "./MultiPageForm";

type Props = {
  value: string;
  valueName: string;
};

export default function ValuesInSummary({ value, valueName }: Props) {
  return (
    <div className="flex gap-5 justify-between">
      <span>{valueName} </span>
      <span>{value}</span>
    </div>
  );
}
