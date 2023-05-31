import { GetMapping, RestController } from "naily";
import { AppService } from "./app.service";
// controller里可以导入其他controller哦 允许一直嵌套下去
import "./child.controller";

@RestController()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GetMapping()
  public getHello() {
    return this.appService.getHello();
  }
}
