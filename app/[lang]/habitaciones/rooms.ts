const { v4: uuidv4 } = require("uuid");

// Room categories with assigned rooms (in lowercase)
const roomCategories = {
  basicas: [202, 503],
  "doble-camas": [102, 402, 502],
  standards: [501, 203],
  familiares: [302],
  dobles: [403, 504],
  ejecutivas: [201, 301, 401, 204],
};

// Function to generate a random price between 1500 and 4000
const randomPrice = () => Math.floor(Math.random() * (4000 - 1500 + 1)) + 1500;

// Common properties
const beds = 2.5;
const mediaFiles = {
  featuredCardImg: "https://images.pexels.com/photos/27626182/pexels-photo-27626182/free-photo-of-a-bedroom-with-white-walls-and-wooden-floors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  featuredVideo:
    "https://videos.pexels.com/video-files/4095679/4095679-uhd_2560_1440_30fps.mp4",
  layout: "",
  gallery: [
    "https://images.pexels.com/photos/19966760/pexels-photo-19966760/free-photo-of-gray-bedroom-with-a-double-bed-and-a-mirror-in-the-wardrobe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/27626182/pexels-photo-27626182/free-photo-of-a-bedroom-with-white-walls-and-wooden-floors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/28347470/pexels-photo-28347470/free-photo-of-a-hotel-room-with-wooden-floors-and-a-large-bed.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ],
};
const privateBathroom = true;
const availability = {
  isAvailable: true,
  message: "",
};

// Generate room objects
export const rooms = Object.entries(roomCategories).flatMap(([slug, units]) =>
  units.map((unit) => ({
    uuid: uuidv4(),
    pricePerNight: randomPrice(),
    unit,
    slug, // Already in lowercase
    beds,
    mediaFiles,
    privateBathroom,
    availability,
  }))
);

// Output the JSON
// console.log(JSON.stringify({ rooms }, null, 2));
