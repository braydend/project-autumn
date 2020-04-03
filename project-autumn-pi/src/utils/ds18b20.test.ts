import { getNameFromSensorId } from "./ds18b20";

test("getNameFromSensorIdTest", () => {
  const exisitingId = "28-0316a30797ff";
  const missingId = "I dont exist";

  expect(getNameFromSensorId(exisitingId)).toBeTruthy();
  expect(getNameFromSensorId(missingId)).toBeFalsy();
});
