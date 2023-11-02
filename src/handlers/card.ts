import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import {
  CardControllerImpl,
  CoomerceControllerImpl,
} from "../presentation/commerce";
import {
  formatJSONResponse,
  formatJSONResponseBadRequest,
} from "../utils/api-gateway";

export const createCard = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const token = await CardControllerImpl.Card.createCard(
      JSON.parse(event.body || "")
    );
    return formatJSONResponse({ token });
  } catch (error) {
    return formatJSONResponseBadRequest({
      error,
    });
  }
};
export const findCardByToken = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const { id } = event.pathParameters as { id: string };
  const headers = event.headers;
  if (!headers.authorization) {
    return formatJSONResponseBadRequest({
      message: "Authorization token not provided",
    });
  }
  const [bearer, token] = headers.authorization.split(" ");
  if (bearer !== "Bearer") {
    return formatJSONResponseBadRequest({
      message: "format  Authorization incorrect",
    });
  }
  try {
    const commerce = await CoomerceControllerImpl.Commerce.getCommerceById(
      token
    );

    const card = await CardControllerImpl.Card.getCardById(id);
    delete card.cvv;
    return formatJSONResponse(card);
  } catch (error) {
    return formatJSONResponseBadRequest({
      message: "card not found",
    });
  }
};
