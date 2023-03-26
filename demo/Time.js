class Time {
    constructor() {
        this.date = new Date();
        this.startedTime = this.date.getTime();
        this.passedTime = this.startedTime;
        this.lastTime = this.startedTime;
        this.minDeltaTime = 0;
        this.maxDeltaTime = 1;
        this.deltaTime = 0.1;
    }

    update() {
        this.date = new Date();
        this.passedTime = (this.date.getTime() - this.startedTime) * 0.001;
        this.deltaTime = Math.max(this.minDeltaTime, Math.min(this.maxDeltaTime, (this.date.getTime() - this.lastTime) * 0.001 ));
        this.lastTime = this.date.getTime();
    }
}