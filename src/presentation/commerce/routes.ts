import { CommerceController } from "./controller";
import { CommerceDatasourceImpl } from "../../infrastructure/datasource/commerce.datasource.impl";
import { CommerceRepositoryImpl } from "../../infrastructure/repositories/commerce.repository.impl";
import { CardDatasourceImpl } from "../../infrastructure/datasource/card.datasource.impl";
import { CardRepositoryImpl } from "../../infrastructure/repositories/card.repository.impl";
import { CardController } from "../card/controller";

export class CoomerceRoutes {
  static get routes() {
    const datasource = new CommerceDatasourceImpl();
    const commerceRepository = new CommerceRepositoryImpl(datasource);
    const commerceController = new CommerceController(commerceRepository);

    return commerceController;
  }
}
export class CardRoutes {
  static get routes() {
    const cardDatasource = new CardDatasourceImpl();
    const cardRepository = new CardRepositoryImpl(cardDatasource);
    const cardController = new CardController(cardRepository);

    return cardController;
  }
}
