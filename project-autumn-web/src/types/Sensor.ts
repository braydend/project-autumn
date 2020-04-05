export type SensorData = { value: number; timestamp: number };

export enum MoistureSensorStates {
    WET,
    DRY,
};

export enum SensorType {
    Temperature = "temperature",
    Moisture = "moisture"
}

export default class Sensor {
    private id: string;
    private name: string;
    private type: SensorType;
    private min: number;
    private max: number;
    private connection: firebase.firestore.Firestore;

    constructor(
        id: string,
        name: string,
        type: SensorType,
        min: number,
        max: number,
        connection: firebase.firestore.Firestore
    ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.min = min;
        this.max = max;
        this.connection = connection;
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getType(): SensorType {
        return this.type;
    }

    public getMin(): number {
        return this.min;
    }

    public getMax(): number {
        return this.max;
    }

    public async fetchData(): Promise<SensorData[] | false> {
        try {
            let data: SensorData[] = [];
            await this.connection
                .collection("sensors")
                .doc(this.id)
                .collection("data")
                .get()
                .then(snap => {
                    snap.forEach(doc => {
                        const { value, timestamp } = doc.data();
                        data.push({ value, timestamp });
                    });
                });
            return data;
        } catch (exception) {
            console.error(exception);
        }
        return false;
    }

    public async getLastestData(): Promise<SensorData> {
        const latest = await this.fetchData().then(data => {
            if (data) {
                return data.reduce<SensorData>(
                    (acc, cur) => (cur.timestamp > acc.timestamp ? cur : acc),
                    { value: 0, timestamp: 0 }
                );
            }
        });
        if (!latest) throw Error("No data");
        return latest;
    }
}
