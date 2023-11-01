import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { CoomerceRoutes } from "./src/presentation/commerce/routes";

export const hello = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  console.log("🚀 ~ file: handler.ts:7 ~ event:", event);
  // const commerce = await CoomerceRoutes.routes.createCommerce(
  //   JSON.parse(event.body || "")
  // );
  // console.log("🚀 ~ file: handler.ts:10 ~ commerce:", commerce);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        // commerce: commerce,
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
