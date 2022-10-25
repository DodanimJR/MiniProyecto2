import { Request, Response } from "express";
import PaymentService from "../services/payment.service";
import { BaseController } from "../types/base.controller";
class PaymentController extends BaseController {
  getAll(_req: Request | any, res: Response) {
    this.responseHandler(res, PaymentService.getAll(), 200);
  }
  create(_req: Request | any, res: Response) {
    this.responseHandler(res, PaymentService.createPayment(_req.body), 201);
  }
}

export default new PaymentController();
