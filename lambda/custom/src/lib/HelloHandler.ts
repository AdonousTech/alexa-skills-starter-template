import { HandlerInput, RequestHandler } from "ask-sdk";
import { Response } from "ask-sdk-model"

export class HelloHandler implements RequestHandler {
    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'HelloWorldIntent';
    }

    handle(handlerInput: HandlerInput): Response { //  Response | Promise<Response>
        console.log('HelloWorldIntent :: ', handlerInput);
        const responseBuilder = handlerInput.responseBuilder;

        return responseBuilder
                       .speak('hello to you too')
                       .reprompt('what was that?')
                       .getResponse();
    }   
}