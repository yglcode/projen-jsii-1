export interface GreeterProps {
  readonly greetee: string
}

export class Greeter {
  private readonly greetee: string
  constructor(props: GreeterProps) {
    this.greetee = props.greetee
  }
  greet(): string {
    return `Hello, ${this.greetee}`
  }
}