import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { CardRoutes, CoomerceRoutes } from "../presentation/commerce/routes";
import {
  formatJSONResponse,
  formatJSONResponseBadRequest,
} from "../utils/api-gateway";

export const createCard = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const token = await CardRoutes.routes.createCard(
      JSON.parse(event.body || "")
    );
    console.log("🚀 ~ file: card.ts:11 ~ card:", token);
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          token: token,
        },
        null,
        2
      ),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Error found",
        error,
      }),
    };
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
      message: "Formato de Authorization incorrecto",
    });
  }
  try {
    const commerce = await CoomerceRoutes.routes.getCommerceById(token);
    console.log("🚀 ~ file: card.ts:54 ~ commerce:", commerce);
    const card = await CardRoutes.routes.getCardById(id);
    return formatJSONResponse({ creditCard: card });
  } catch (error) {
    console.log("🚀 ~ file: card.ts:59 ~ error:", error);
    return formatJSONResponseBadRequest({
      message: "card not found",
    });
  }
};
