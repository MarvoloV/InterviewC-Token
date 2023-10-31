import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { TodoRoutes } from "../presentation/todos/routes";

export const hello = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const todo = await TodoRoutes.routes.createTodo(JSON.parse(event.body || ""));
  console.log("🚀 ~ file: commerce.ts:8 ~ todo:", todo);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        todo,
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
