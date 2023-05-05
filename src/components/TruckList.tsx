import React, { useState } from 'react';

interface Truck {
  id: number;
  name: string;
  gasLevel: number;
}

const TruckList: React.FC = () => {
  const [trucks, setTrucks] = useState<Truck[]>([]);
  const [newTruckName, setNewTruckName] = useState('');
  const [newTruckGasLevel, setNewTruckGasLevel] = useState(0);

  const handleAddTruck = () => {
    const newTruck: Truck = {
      id: Date.now(),
      name: newTruckName,
      gasLevel: newTruckGasLevel,
    };

    setTrucks((prevTrucks) => [...prevTrucks, newTruck]);
    setNewTruckName('');
    setNewTruckGasLevel(0);
  };

  const handleGasLevelChange = (id: number, gasLevel: number) => {
    setTrucks((prevTrucks) =>
      prevTrucks.map((truck) =>
        truck.id === id ? { ...truck, gasLevel } : truck
      )
    );
  };

  return (
    <div>
      <h2>Add a Commercial Truck</h2>
      <input
        type="text"
        value={newTruckName}
        onChange={(e) => setNewTruckName(e.target.value)}
        placeholder="Truck name"
      />
      <input
        type="number"
        value={newTruckGasLevel}
        onChange={(e) => setNewTruckGasLevel(Number(e.target.value))}
        placeholder="Gas level"
      />
      <button onClick={handleAddTruck}>Add Truck</button>

      <h2>Truck List</h2>
      {trucks.length === 0 ? (
        <p>No trucks added yet.</p>
      ) : (
        <ul>
          {trucks.map((truck) => (
            <li key={truck.id}>
              <strong>{truck.name}</strong> - Gas Level:{' '}
              <input
                type="number"
                value={truck.gasLevel}
                onChange={(e) =>
                  handleGasLevelChange(truck.id, Number(e.target.value))
                }
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TruckList;
