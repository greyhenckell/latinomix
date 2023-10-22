import { Box, Text, Stack } from "@chakra-ui/react";
import React from "react";

import { News } from "typing";

import { useState } from "react";

import { DeleteIcon } from "@chakra-ui/icons";

interface Props {
  news: News[];
  refreshData: () => void;
}

function NewsView({ news, refreshData }: Props) {
  const [newsState, setNewsState] = useState<"view" | "edit">("view");

  async function deleteItem(id: string) {
    try {
      fetch(`/api/news/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      }).then(() => {
        refreshData();
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {newsState === "view" && (
        <Box ml={4}>
          {news.map((itemNew) => (
            <Stack id={itemNew.id} direction="row">
              <Text> {itemNew.event_name}</Text>
              <button onClick={() => deleteItem(itemNew.id)}>
                <DeleteIcon />
              </button>
            </Stack>
          ))}
        </Box>
      )}
    </>
  );
}

export default NewsView;
