import React from "react";
import Records from "./resume.json";

export default function Eductation() {
  return (
    <div>
      {Records.map((el) => {
        return (
          <div key={el.id}>
            <h1>{el.title}</h1>
          </div>
        );
      })}
    </div>
  );
}
