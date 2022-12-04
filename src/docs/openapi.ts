const openapiDocument = {
  openapi: "3.0.1",
  info: {
    description: "Documentação da maratona hacker",
    version: "v1",
    title: "Maratona Hacker",
  },
  paths: {
    "/": {
      get: {
        tags: ["TEST"],
        summary: "Test",
        responses: {
          "200": {
            description: "Hello World",
            content: {
              "application/json": {
                schema: {
                  properties: {
                    message: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export default openapiDocument;
