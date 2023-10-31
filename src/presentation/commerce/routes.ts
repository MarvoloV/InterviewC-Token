import { CommerceController } from "./controller.ddd";
import { CommerceDatasourceImpl } from "../../infrastructure/datasource/commerce.datasource.impl";
import { CommerceRepositoryImpl } from "../../infrastructure/repositories/commerce.repository.impl";

export class CoomerceRoutes {
  static get routes() {
    const datasource = new CommerceDatasourceImpl();
    const commerceRepository = new CommerceRepositoryImpl(datasource);
    const commerceController = new CommerceController(commerceRepository);

    return commerceController;
  }
}
