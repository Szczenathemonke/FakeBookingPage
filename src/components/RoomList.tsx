import { useQuery, useQueryClient } from "@tanstack/react-query";
import RoomCard from "./RoomCard";

function RoomList() {
  const fetchRoomList = async () => {
    const res = await fetch("https://hotels.niezniszczalny-chinczyk.com/rooms");
    return res.json();
  };

  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery(
    ["rooms"],
    fetchRoomList
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      {data.map((room) => (
        <span>{room.name}</span>
        // <RoomCard roomName={room.name} />
      ))}
    </>
  );
}

export default RoomList;

// method: "POST",
//         headers: { "Content-Type": "application/json" },
