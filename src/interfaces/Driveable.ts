interface Driveable {

  started: boolean;
  currentSpeed: number;

  start(): void;
  accelerate(speed: number): void;
  decelerate(change: number): void;
  stop(): void;
  turn(direction: string): void;
  reverse(): void;
}

export default Driveable;