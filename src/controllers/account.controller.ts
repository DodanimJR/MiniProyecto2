import { Request, Response } from "express";
import AccountService from "../services/account.service";
import { BaseController } from "../types/base.controller";
class AccountController extends BaseController {
  getAll(_req: Request | any, res: Response) {
    this.responseHandler(res, AccountService.getAll(), 200);
  }
  create(_req: Request | any, res: Response) {
    this.responseHandler(res, AccountService.createAccount(_req.body), 201);
  }
}

export default new AccountController();