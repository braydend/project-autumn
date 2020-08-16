import { sensorIdNameMap } from "../consts/ds18b20";
import Sensor, { DS18B20, SensorData, SensorType } from "../types/Sensor";

export const getNameFromSensorId = (id: string): string | false => {
  const value = sensorIdNameMap.get(id);
  if (value === undefined) return false;
  return value;
};

export const transformDS18B20ToSensor = (
  ds18b20: DS18B20,
): Sensor => {
  const { id } = ds18b20;
  const name = getNameFromSensorId(id);

  if (!name) throw Error(`No corresponding name for DS18B20 id: ${id}`);

  return {
    id,
    name,
    type: SensorType.Temperature,
  };
};

export const transformDS18B20ArrayToSensorArray = (
  ds18b20Array: DS18B20[],
): Sensor[] => {
  return ds18b20Array.map(ds18b20 => transformDS18B20ToSensor(ds18b20));
};

export const getDataForSensor = (
  { id: sensorId }: Sensor,
  ds18b20Array: DS18B20[]
): SensorData => {
  const ds18b20 = ds18b20Array.find(
    ({ id }: { id: string }) => id === sensorId
  );
  if (!ds18b20)
    throw Error(`Unable to get data for sensor ID: ${sensorId}`);
  return {
    value: ds18b20.t,
    timestamp: Date.now(),
  };
};
