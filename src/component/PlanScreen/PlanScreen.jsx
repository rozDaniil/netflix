import React from "react";
import cn from "classnames";
import "./PlanScreen.css";

const PLANS = [
  { active: true, description: "4K + HDR", name: "Premium" },
  { active: false, description: "720p", name: "Basic" },
  { active: false, description: "1080p", name: "Standart" },
];

const renewalDate = (date) => {
  const now = new Date();
  return ` ${now.getDate() <= 9 ? "0" + now.getDate() : now.getDate()}/${
    now.getMonth() <= 9 ? "0" + (now.getMonth() + 2) : now.getMonth() + 2
  }/${now.getFullYear()}`;
};

export const PlanScreen = () => {
  return (
    <>
      <p>
        Renewal date:
        {renewalDate()}
      </p>
      {PLANS.map((plan) => (
        <div key={plan.name} className="planScreen">
          <div
            className={cn("planScreen__plan", {
              "planScreen__plan--disabled": plan.active,
            })}
          >
            <div className="planScreen__info">
              <h5>{plan.name}</h5>
              <h6>{plan.description}</h6>
            </div>

            <button>{plan.active ? "Current Package" : "Subscribe"}</button>
          </div>
        </div>
      ))}
    </>
  );
};
