import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { CoomerceRoutes } from "../presentation/commerce/routes";

export const hello = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const commerce = await CoomerceRoutes.routes.createCommerce(
    JSON.parse(event.body || "")
  );

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        commerce: commerce,
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
