class SampleApplication {
  private message: string;
  constructor(msg: string) {
    this.setMessage(msg);
    this.displayMessage();
  }
  private displayMessage() {
    console.log(this.message);
  }

  private setMessage(value: string) {
    this.message = value;
  }
}

const sampleObj = new SampleApplication('Hello Jenkins from jenkins branch');
