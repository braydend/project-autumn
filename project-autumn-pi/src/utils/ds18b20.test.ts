import { getNameFromSensorId, transformDS18B20ToSensor, transformDS18B20ArrayToSensorArray } from "./ds18b20";
import { DS18B20 } from "../types/Sensor";

describe("DS18B20 utils", () => {
  test("getNameFromSensorIdTest", () => {
    const exisitingId = "28-0316a30797ff";
    const missingId = "I dont exist";

    expect(getNameFromSensorId(exisitingId)).toBeTruthy();
    expect(getNameFromSensorId(missingId)).toBeFalsy();
  });

  test("transformDS18B20ToSensor", () => {
    const ds18b20: DS18B20 = {id: "28-0316a30797ff", t: 1};

    const result = transformDS18B20ToSensor(ds18b20);

    expect(result).toStrictEqual({
        "id": "28-0316a30797ff",
        "name": "Soil Temperature",
        "type": "temperature",
      });
  });
  
  test("transformDS18B20ArrayToSensorArray", () => {
    const ds18b20Array: DS18B20[] = [
      {id: "28-0316a30797ff", t: 1},
      {id: "28-0516a300f5ff", t: 2},
      {id: "28-0516a323b6ff", t: 3},
    ];

    const result = transformDS18B20ArrayToSensorArray(ds18b20Array);

    expect(result).toStrictEqual([
      {
        "id": "28-0316a30797ff",
        "name": "Soil Temperature",
        "type": "temperature",
      }, 
      {
      "id": "28-0516a300f5ff",
      "name": "Internal Air Temperature",
      "type": "temperature",
      },
      {
      "id": "28-0516a323b6ff",
      "name": "External Air Temperatre",
      "type": "temperature",
     },
    ]);
  });
});
