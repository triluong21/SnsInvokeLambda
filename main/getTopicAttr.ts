import * as AWS from "aws-sdk";

export const getAttr = async (snsName: string): Promise<string> => {
  AWS.config.update({region: "us-east-2"});
  const snsFunction = new AWS.SNS();

  return new Promise<string> (async (resolve, reject) => {
    snsFunction.getTopicAttributes({ TopicArn: snsName}).promise()
    .then((data: any) => {
      resolve(data);
    })
    .catch((error: any) => {
      reject(error);
    });
  });
};
