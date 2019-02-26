import { Callback, Context, Handler, SNSEvent } from "aws-lambda";

// export const lambdaHandler: Handler = async (event: SNSEvent, context: Context, callback?: Callback) => {
export const subscribeSns: Handler = (event: SNSEvent, context: Context, callback?: Callback) => {
    console.log("Message intercepted");
    console.log("Event: ", event.Records[0].Sns.Message);
    console.log("Received event:", JSON.stringify(event, null, 2));
};
