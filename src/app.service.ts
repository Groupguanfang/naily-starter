import { Injectable } from "naily";

@Injectable
export class AppService {
  public getHello() {
    return "hello, naily! ~";
  }
}
