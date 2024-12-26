/// <reference path="../pb_data/types.d.ts" />
import { LoremIpsum } from "lorem-ipsum";

export function getIp() {
  const res = $http.send({
    url: "https://ifconfig.co",
    method: "GET",
  });

  return res.raw;
}

export function lorem() {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
  });
  return lorem.generateParagraphs(1);
}
