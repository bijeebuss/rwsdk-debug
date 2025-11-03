import { DurableObject } from "cloudflare:workers";


export class TestDurableObject extends DurableObject {
  private state: DurableObjectState;

  constructor(state: DurableObjectState, env: Env) {
    super(state, env);
    this.state = state;
  }

  async getValue(): Promise<number> {
    return (await this.state.storage.get<number>("value") ?? 0) as number;
  }
}