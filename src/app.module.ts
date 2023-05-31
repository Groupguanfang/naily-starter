import "./app.controller";

import { BootNailyApplication, CanBoot, type IMount } from "naily/app";

@BootNailyApplication
export class NailyApplication implements CanBoot {
  main(app: IMount): void {
    app.boot(3000);
  }
}
