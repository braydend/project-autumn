import { getNameFromSensorId } from "./ds18b20";

// test("getNameFromSensorIdTest", () => {
//   const exisitingId = "28-0316a30797ff";
//   const missingId = "I dont exist";

//   expect(getNameFromSensorId(exisitingId)).toBeTruthy();
//   expect(getNameFromSensorId(missingId)).toBeFalsy();
// });

test("getNameFromSensorId", () => {
  const sensors: Map<string, string> = new Map([
    ["12345", 'Sensor One'],
    ["23456", 'Sensor Two'],
    ["34567", 'Sensor Three'],
    ["45678", 'Sensor Four'],
    ["56789", 'Sensor Five'],
  ]);

  test.each([
    ["12345", 'Sensor One'],
    ["23456", 'Sensor Two'],
    ["34567", 'Sensor Three'],
    ["45678", 'Sensor Four'],
    ["56789", 'Sensor Five'],
  ])('.getNameForSensorId())', (id, expectedName) => {
    expect(getNameFromSensorId(sensors, id)).toReturnWith(expectedName);
  });


});