
import prisma from "../database/client";
import { Account } from "@prisma/client";

class AccountService {
  getAll() {
    const Account = prisma.account.findMany();
    return Account;
  }

  createAccount(account: Account) {
    return prisma.account.create({ data: account });
  }

  }
  
  export default new AccountService();