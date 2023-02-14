import React, { useEffect, useState } from "react";
import { Journal, Ticket } from "typing";

interface TicketsProps {
  journals: Journal[];
  refreshData: () => void;
}

import { useForm } from "react-hook-form";
import ServiceView from "./ServiceView";

function ServiceList({ journals, refreshData }: TicketsProps) {
  const {
    formState: { errors },
    setFocus,
  } = useForm();

  return (
    <>
      <div>
        {journals.map((danceDay) => (
          <ServiceView
            key={danceDay.id}
            danceday={danceDay}
            refreshData={refreshData}
          ></ServiceView>
        ))}
      </div>
    </>
  );
}

export default ServiceList;
