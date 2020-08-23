export type SensorData = { value?: number; timestamp: string };
export type DS18B20 = { id: string; t: number };

export enum SensorType {
  Temperature = "temperature",
  Moisture = "moisture",
}

type Sensor = {
  type: SensorType,
  name: string,
  id: string,
  reading?: SensorData,
};

export default Sensor;