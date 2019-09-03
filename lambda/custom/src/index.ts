import { SkillBuilders } from "ask-sdk";
import { LambdaHandler } from "ask-sdk-core/dist/skill/factory/BaseSkillFactory";

import { LaunchRequestHandler } from "./lib/LaunchRequestHandler";
import { AmazonCancelIntentHandler } from "./lib/AMAZON_CancelIntent_Handler";
import { AmazonStopIntentHandler } from "./lib/AMAZON_StopIntent_Handler";
import { HelloHandler } from "./lib/HelloHandler";
import { SessionEndedHandler } from "./lib/SessionEndedHandler";
import { CustomErrorHandler } from "./lib/CustomErrorHandler";


function buildLambdaSkill(): LambdaHandler {
    return SkillBuilders.standard()
    .addRequestHandlers(
        new AmazonCancelIntentHandler,
        new AmazonStopIntentHandler,
        new HelloHandler(),
        new LaunchRequestHandler(),
        new SessionEndedHandler()
    )
    .addErrorHandlers(new CustomErrorHandler())
    .lambda();
 }

 // Lambda handler - entry point for skill
 export let handler = buildLambdaSkill();