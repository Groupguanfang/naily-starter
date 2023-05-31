// 导入controller
import "./app.controller";
// 再导入注解 否则会报错
import { BootNailyApplication, CanBoot, type IMount } from "naily/app";

@BootNailyApplication
export class NailyApplication implements CanBoot {
  main(app: IMount): void {
    app.boot(3000);
  }
}
