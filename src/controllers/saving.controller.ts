import { Request, Response } from "express";
import SavingService from "../services/saving.service";
import { BaseController } from "../types/base.controller";
class SavingController extends BaseController {
  getAll(_req: Request | any, res: Response) {
    this.responseHandler(res, SavingService.getAll(), 200);
  }
  create(_req: Request | any, res: Response) {
    this.responseHandler(res, SavingService.createSaving(_req.body), 201);
  }
}

export default new SavingController();
