
import * as AWS from "aws-sdk";

export const snsCreate = async (snsName: string): Promise<string> => {
  AWS.config.update({ region: "us-east-2" });
  const snsFunction = new AWS.SNS();

  return new Promise<string>(async (resolve, reject) => {
    snsFunction.createTopic({ Name: snsName }).promise()
      .then((data: any) => {
        resolve(data);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};
