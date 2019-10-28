import { HandlerInput, RequestHandler } from "ask-sdk";
import { Response } from "ask-sdk-model";
import { MessageHelper } from './services/message-helper-service';
import { RandomMessageTypes } from './speech/enums/random-message-types.enum';

export class AmazonFallbackIntentHandler implements RequestHandler {
    canHandle(handlerInput: HandlerInput): boolean {
        return true;
    }

    async handle(handlerInput: HandlerInput): Promise<Response> {
        const { responseBuilder } = handlerInput;
        let rb = responseBuilder.getResponse();

        rb =  responseBuilder
        .speak(MessageHelper.randomMessage(RandomMessageTypes.GENERIC_ERROR))
        .reprompt(MessageHelper.randomMessage(RandomMessageTypes.GENERIC_ERROR))
        .withShouldEndSession(false)
        .getResponse();


        return rb;

        
    }   
}