export type SensorData = { value: number; timestamp: number };
export type DS18B20 = { id: string; t: number };

export default class Sensor {
    private id: string;
    private name: string;
    private connection: firebase.firestore.Firestore;

    constructor(
        id: string,
        name: string,
        connection: firebase.firestore.Firestore
    ) {
        this.id = id;
        this.name = name;
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
                .set({ name: this.name });
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
