import * as AWS from "aws-sdk";

export const removeTopic = async (snsName: string): Promise<void> => {
  AWS.config.update({ region: "us-east-2" });
  const snsFunction = new AWS.SNS();
  return new Promise<void>(async (resolve, reject) => {
    snsFunction.deleteTopic({ TopicArn: snsName }).promise()
      .then((data: any) => {
        resolve(data);
      })
      .catch((error: any) => {
        reject(error);
      });
});
};
