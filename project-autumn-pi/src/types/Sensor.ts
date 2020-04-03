export type SensorData = { value: number; timestamp: number };
export type DS18B20 = { id: string; t: number };

export enum SensorType {
  Temperature = 'temperature',
  Moisture = 'moisture',
}

export default class Sensor {
  private id: string;
  private name: string;
  private connection: firebase.firestore.Firestore;
  private type: SensorType;

  constructor(
    id: string,
    name: string,
    type: SensorType,
    connection: firebase.firestore.Firestore
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.connection = connection;
    this.createDocument();
  }

  public getId(): string {
    return this.id;
  }

  private createDocument(): boolean {
    try {
      this.connection
        .collection("sensors")
        .doc(this.id)
        .set({ name: this.name, type: this.type });
      return true;
    } catch (exception) {
      console.error(exception);
    }
    return false;
  }

  public storeData(data: SensorData): boolean {
    try {
      this.connection
        .collection("sensors")
        .doc(this.id)
        .collection("data")
        .add(data);
      return true;
    } catch (exception) {
      console.error(exception);
    }
    return false;
  }
}
