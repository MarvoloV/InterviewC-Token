export const formatJSONResponse = (response: Record<string, unknown>) => {
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
export const formatJSONResponseBadRequest = (
  response: Record<string, unknown>
) => {
  return {
    statusCode: 404,
    body: JSON.stringify(response),
  };
};
