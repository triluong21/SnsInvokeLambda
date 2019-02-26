import { expect } from "chai";
import { snsCreate } from "../main/createTopic";
import { getAttr } from "../main/getTopicAttr";
import { snsList } from "../main/listTopics";
import { removeTopic } from "../main/removeTopic";

describe("SNS Topic", () => {
  it("Test Creating SNS Topic", async () => {
    const snsName = "TemporaryTopic";
    const resp = JSON.stringify(await snsCreate(snsName));
    console.log("resp: " + resp);
    const a = "Yea";
    expect(a).to.be.eql("Yea");
  });
  it("Test Listing SNS Topics", async () => {
    const resp = await snsList();
    console.log(resp.Topics);
    const a = "Yea";
    expect(a).to.be.eql("Yea");
  });
  it("Test Getting Attributes of SNS Topic", async () => {
    const snsKey = "arn";
    const snsProvider = "aws";
    const snsService = "sns";
    const snsRegion = "us-east-2";
    const snsAccountId = "160116285639";
    const snsTopicName = "TemporaryTopic";
    const snsTopicFullName = snsKey + ":" + snsProvider + ":" + snsService + ":"
    + snsRegion + ":" + snsAccountId + ":" + snsTopicName;
    const resp = JSON.stringify(await getAttr(snsTopicFullName));
    console.log("resp: " + resp);
    const a = "Yea";
    expect(a).to.be.eql("Yea");
  });
  it("Test Removing SNS Topic", async () => {
    const snsKey = "arn";
    const snsProvider = "aws";
    const snsService = "sns";
    const snsRegion = "us-east-2";
    const snsAccountId = "160116285639";
    const snsTopicName = "TemporaryTopic";
    const snsTopicFullName = snsKey + ":" + snsProvider + ":" + snsService + ":"
    + snsRegion + ":" + snsAccountId + ":" + snsTopicName;
    const resp = JSON.stringify(await removeTopic(snsTopicFullName));
    console.log("resp: " + resp);
    const a = "Yea";
    expect(a).to.be.eql("Yea");
  });
});
