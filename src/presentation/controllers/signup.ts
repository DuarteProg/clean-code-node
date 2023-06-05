import { HttpRequest, HttpResponse } from "../protocols/http";
import { MissingParamError } from "../erros/missing-params-error";
import { badRequest } from "../helpers/http-helper";

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requireFields = ["name", "email"];
    for (let i = 0; i < requireFields.length; i++) {
      const field = requireFields[i];
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    return {
      statusCode: 200,
      body: null,
    };
  }
}
