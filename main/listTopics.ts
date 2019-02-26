import * as AWS from "aws-sdk";

export const snsList = async (): Promise<any> => {
  AWS.config.update({ region: "us-east-2" });
  const snsFunction = new AWS.SNS();

  return new Promise<string>(async (resolve, reject) => {
    snsFunction.listTopics().promise()
      .then((data: any) => {
        resolve(data);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};
