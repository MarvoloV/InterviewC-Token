import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { CardRoutes } from "../presentation/commerce/routes";

export const createCard = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const card = await CardRoutes.routes.createCard(
      JSON.parse(event.body || "")
    );
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          commerce: card,
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

  try {
    const card = await CardRoutes.routes.getCardById(id);
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          commerce: card,
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
