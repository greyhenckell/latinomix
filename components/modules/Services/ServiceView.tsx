import React from "react";
import { Journal, Ticket } from "typing";

interface Props {
  danceday: Journal;
  refreshData: () => void;
}

import { Link, Stack, Text } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useEffect } from "react";

import { useForm } from "react-hook-form";
import AddService from "./AddService";

function ServiceView({ danceday, refreshData }: Props) {
  //console.log("view", danceday);
  const [serviceState, setServiceState] = useState<"view" | "edit">("view");

  const editService = async (data: any) => {
    {
      /*try {
      const body = {
        name: data.ticketName,
        description: data.ticketDescription,
        price: parseFloat(data.ticketPrice),
        offer: data.ticketOffer,
      };
      await fetch(`/api/services/${journals.id}`, {
        method: "PUT",
        body: JSON.stringify(body),
      });
      refreshData();
      setServiceState("view");
    } catch (error) {
      console.log(error);
    }
*/
    }
    //console.log(data);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setFocus,
  } = useForm();

  useEffect(() => {
    setFocus("servDay");
  }, [setFocus, serviceState]);

  const cancelEdit = () => {
    setServiceState("view");
    reset();
  };

  return (
    <>
      {serviceState === "view" && (
        <Stack direction="row">
          <Text my={4}>{danceday.day}</Text>
          <button
          //className="icon-button"
          //onClick={() => setServiceState("edit")}
          >
            <Link href={`/admin/login/services/${danceday.id}`}>
              <EditIcon name="Edit" />{" "}
            </Link>
          </button>
        </Stack>
      )}
      {/*{serviceState === "edit" && <div></div>}*/}
    </>
  );
}

export default ServiceView;
