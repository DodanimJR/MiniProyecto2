import { Request, Response } from "express";
import CurrencyService from "../services/currency.service";
import { BaseController } from "../types/base.controller";
class CurrencyController extends BaseController {
  getAll(_req: Request | any, res: Response) {
    this.responseHandler(res, CurrencyService.getAll(), 200);
  }
  create(_req: Request | any, res: Response) {
    this.responseHandler(res, CurrencyService.createCurrency(_req.body), 201);
  }
}

export default new CurrencyController();
