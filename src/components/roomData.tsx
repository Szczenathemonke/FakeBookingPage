import place1 from "../assets/rooms/place1.jpg";
import place2 from "../assets/rooms/place2.jpg";
import place3 from "../assets/rooms/place3.jpg";
import place4 from "../assets/rooms/place4.jpg";
import place5 from "../assets/rooms/place5.jpg";
import place6 from "../assets/rooms/place6.jpg";
import place7 from "../assets/rooms/place7.jpg";
import place8 from "../assets/rooms/place8.jpg";
import place9 from "../assets/rooms/place9.jpg";

import petsEmerald100 from "../assets/icons/petsEmerald100.svg";
import petsGrey from "../assets/icons/petsGrey.svg";

const roomImg = [
  {
    name: "Potęga PRL",
    id: 1,
    quantity: 0,
    src: `${place1}`,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente eligendi obcaecati atque accusamus nobis aspernatur quo cum! Praesentium laborum iste veniam velit beatae exercitationem, sapiente delectus quia autem aspernatur.",
  },
  {
    name: "Następny Remont w 2052",
    id: 2,
    quantity: 0,
    src: `${place2}`,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente eligendi obcaecati atque accusamus nobis aspernatur quo cum! Praesentium laborum iste veniam velit beatae exercitationem, sapiente delectus quia autem aspernatur.",
  },
  {
    name: "Elegancki Pan z Odim",
    id: 3,
    quantity: 0,
    src: `${place3}`,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente eligendi obcaecati atque accusamus nobis aspernatur quo cum! Praesentium laborum iste veniam velit beatae exercitationem, sapiente delectus quia autem aspernatur.",
  },
  {
    name: "Salcesonik",
    id: 4,
    quantity: 0,
    src: `${place4}`,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente eligendi obcaecati atque accusamus nobis aspernatur quo cum! Praesentium laborum iste veniam velit beatae exercitationem, sapiente delectus quia autem aspernatur.",
  },
  {
    name: "Działkowiec DELUXE",
    id: 5,
    quantity: 0,
    src: `${place5}`,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente eligendi obcaecati atque accusamus nobis aspernatur quo cum! Praesentium laborum iste veniam velit beatae exercitationem, sapiente delectus quia autem aspernatur.",
  },
  {
    name: "Prezydencki",
    id: 6,
    quantity: 0,
    src: `${place6}`,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente eligendi obcaecati atque accusamus nobis aspernatur quo cum! Praesentium laborum iste veniam velit beatae exercitationem, sapiente delectus quia autem aspernatur.",
  },
  {
    name: "Windsurferski",
    id: 7,
    quantity: 0,
    src: `${place7}`,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente eligendi obcaecati atque accusamus nobis aspernatur quo cum! Praesentium laborum iste veniam velit beatae exercitationem, sapiente delectus quia autem aspernatur.",
  },
  {
    name: "Bogactwo",
    id: 8,
    quantity: 0,
    src: `${place8}`,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente eligendi obcaecati atque accusamus nobis aspernatur quo cum! Praesentium laborum iste veniam velit beatae exercitationem, sapiente delectus quia autem aspernatur.",
  },
  {
    name: "Złota Komnata",
    id: 9,
    quantity: 0,
    src: `${place9}`,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente eligendi obcaecati atque accusamus nobis aspernatur quo cum! Praesentium laborum iste veniam velit beatae exercitationem, sapiente delectus quia autem aspernatur.",
  },
];
const petsIco = { yes: `${petsEmerald100}`, no: `${petsGrey}` };

function getProductData(id: number) {
  let productData = roomImg.find((product) => product.id === id);

  return productData;
}
export { roomImg, petsIco, getProductData };
