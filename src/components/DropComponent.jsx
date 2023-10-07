import { useState } from "react";
import { Dropdown } from "primereact/dropdown";

export default function BasicDemo() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "A-Z", code: "NY" },
    { name: "Z-A", code: "RM" },
    { name: "Cena-Rastuca", code: "LDN" },
    { name: "Cena-Opadajuca", code: "IST" },
  ];

  return (
    <div className="card flex justify-content-center">
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="name"
        placeholder="Sortiraj Po"
        className="w-full md:w-14rem"
      />
    </div>
  );
}
