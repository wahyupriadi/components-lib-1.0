import React, { useState } from "react";
import { RadioButton, Box, Text } from "../../../Components/Atom";

export default {
  title: "Atom/Radio Button",
  component: RadioButton
};

export const Single = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedFruit, setSelectedFruit] = useState("mango");

  return (
    <>
      <Box>
        <Text H14>Normal</Text>
        <RadioButton
          radioProps={{
            onChange: e => setSelectedColor(e.target.value),
            name: "color",
            id: "colorBlue"
          }}
          radioItems={[
            { label: "Blue", value: "blue" }
          ]}
          selected={selectedColor}
        />
        <RadioButton
          radioProps={{
            onChange: e => setSelectedColor(e.target.value),
            name: "color",
            id: "colorRed"
          }}
          radioItems={[
            { label: "Red", value: "red" }
          ]}
          selected={selectedColor}
        />
      </Box>

      <Box mt={16}>
        <Text H14>Selected from data</Text>
        <RadioButton
          radioProps={{
            onChange: e => setSelectedFruit(e.target.value),
            name: "fruit",
            id: "fruitApple"
          }}
          radioItems={[
            { label: "Apple", value: "apple" }
          ]}
          selected={selectedFruit}
        />
        <RadioButton
          radioProps={{
            onChange: e => setSelectedFruit(e.target.value),
            name: "fruit",
            id: "fruitMango"
          }}
          radioItems={[
            { label: "Mango", value: "mango" }
          ]}
          selected={selectedFruit}
        />
      </Box>

      <Box mt={16}>
        <Text H14>Selected from props</Text>
        <RadioButton
          radioProps={{
            onChange: e => setSelectedFruit(e.target.value),
            name: "fruitFresh",
            id: "fruitApple",
            checked: selectedFruit === 'apple'
          }}
          radioItems={[
            { label: "Apple", value: "apple" }
          ]}
        />
        <RadioButton
          radioProps={{
            onChange: e => setSelectedFruit(e.target.value),
            name: "fruitFresh",
            id: "fruitMango",
            checked: selectedFruit === 'mango'
          }}
          radioItems={[
            { label: "Mango", value: "mango" }
          ]}
        />
      </Box>

      <Box mt={16}>
        <Text H14>Disabled from data</Text>
        <RadioButton
          radioProps={{
            onChange: e => console.log(e.target.value),
            name: "color",
            id: "colorBlack"
          }}
          radioItems={[
            { label: "Black", value: "black", disabled: true }
          ]}
          selected={selectedColor}
        />
      </Box>

      <Box mt={16}>
        <Text H14>Disabled from props</Text>
        <RadioButton
          radioProps={{
            onChange: e => console.log(e.target.value),
            name: "color",
            id: "colorGreen",
            disabled: true
          }}
          radioItems={[
            { label: "Green", value: "green" }
          ]}
          selected={selectedColor}
        />
      </Box>
    </>
  );
};

export const Bulk = () => {
  const [selectedHobby, setSelectedHobby] = useState("");
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedFruit, setSelectedFruit] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");

  const hobbies = [
    { label: "Fishing", value: "fishing" },
    { label: "Golf", value: "gold" }
  ];

  const colors = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" }
  ];

  const fruits = [
    { label: "Apple", value: "003", disabled: true },
    { label: "Mango", value: "004", disabled: true }
  ];

  const vehicles = [
    { label: "Car", value: "car" },
    { label: "Truck", value: "truck" }
  ];

  return (
    <>
      <Box>
        <Text H14>Normal</Text>
        <RadioButton
          radioProps={{
            onChange: e => setSelectedHobby(e.target.value),
            name: "hobby",
            id: "hobby"
          }}
          radioItems={hobbies}
          selected={selectedHobby}
        />
      </Box>

      <Box mt={16}>
        <Text H14>Selected from data</Text>
        <RadioButton
          radioProps={{
            onChange: e => setSelectedColor(e.target.value),
            name: "color",
            id: "color"
          }}
          radioItems={colors}
          selected={selectedColor}
        />
      </Box>

      <Box mt={16}>
        <Text H14>Disabled from data</Text>
        <RadioButton
          radioProps={{
            onChange: e => setSelectedFruit(e.target.value),
            name: "fruit",
            id: "fruit"
          }}
          radioItems={fruits}
          selected={selectedFruit}
        />
      </Box>

      <Box mt={16}>
        <Text H14>Disabled from props</Text>
        <RadioButton
          radioProps={{
            onChange: e => setSelectedVehicle(e.target.value),
            name: "vehicle",
            id: "vehicle",
            disabled: true
          }}
          radioItems={vehicles}
          selected={selectedVehicle}
        />
      </Box>
    </>
  );
};