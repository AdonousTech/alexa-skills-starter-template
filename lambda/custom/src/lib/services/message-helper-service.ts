import * as _ from "lodash";
import { Messages } from '../speech/enums/messages.enum';
import { CanonicalSSML } from '../speech/enums/canonical-ssml.enum';
export class MessageHelper {
    static randomMessages: any = {
        "WELCOME": [
            CanonicalSSML.SKILL_FIRST_LAUNCH + Messages.welcome_0_0_0
        ],
        "GENERIC_ERROR": [
            Messages.generic_error_0_0_0
        ],
        "HELP": [
            Messages.generic_help_0_0_0
        ],
        "EXIT": [
            Messages.generic_exit_0_0_0
        ]
    }

    static randomMessage(type: string): string {
        return '<speak>' + _.sample(this.randomMessages[type])  + '</speak>';
    }

    static randomMessageFragment(type: string): string {
        return _.sample(this.randomMessages[type]);
    }
}