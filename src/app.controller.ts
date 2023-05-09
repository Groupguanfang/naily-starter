import { GetMapping, RestController } from "naily";
import { AppService } from "./app.service";

@RestController()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GetMapping()
  public getHello() {
    return "aa";
  }
}
