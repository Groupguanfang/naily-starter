import { GetMapping, RestController } from "naily";

@RestController()
export class AppController {
  @GetMapping("/child")
  public getHello() {
    return "666";
  }
}
