export class Polling {
    private action: () => void;
    private interval: number;
    private pollingId: any;

    constructor(action: () => void, interval: number = 300 * 1000) {
        this.action = action;
        this.interval = interval;
    }

    public start() {
        clearTimeout(this.pollingId);
        this.pollingId = setTimeout(this.action, this.interval);
    }

    public stop() {
        clearTimeout(this.pollingId);
    }
}
