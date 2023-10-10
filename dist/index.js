class SampleApplication {
    constructor(msg) {
        this.setMessage(msg);
        this.displayMessage();
    }
    displayMessage() {
        console.log(this.message);
    }
    setMessage(value) {
        this.message = value;
    }
}
const sampleObj = new SampleApplication('Hello');
//# sourceMappingURL=index.js.map