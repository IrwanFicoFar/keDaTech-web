import React from "react";

export const InputLogin = ({
  label,
  fill,
}: {
  label: string;
  fill: string;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <p>{label}</p>
      <input
        className="py-4 px-5 rounded-2xl border-2 border-blue-700 focus:outline-none"
        placeholder={fill}
      />
    </div>
  );
};
