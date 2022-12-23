import fetch from "node-fetch";
import cheerio from "cheerio";

// function to get the raw data
const getRawData = (URL) => {
  return fetch(URL)
    .then((response) => response.text())
    .then((data) => {
      return data;
    });
};

//URL for data
const URL = "https://www.baseball-reference.com/players/a/alonspe01.shtml";

const getBRefList = async () => {
  const bRefRawData = await getRawData(URL);

  //parsing the data
  const parsedBRefData = cheerio.load(bRefRawData);

  //extracting stats popup

  //parsedBRefData(".p1")[0] selects div.p1 where the current and career stats popup is located
  //parsedBRefData(".p1")[0].children goes into div.p1 (elements are where we have the data we need)
  //parseBRefData(".p1").children["odd #"] allows you to access the elements containing column of WAR, AB, or etc
  //parseBRefData(".p1").children["odd #"].children[2] allows you to access element with 2022 data
  //parseBRefData(".p1").children["odd #"].children[2].childre[0] allows you to select the data within i.e WAR 2022

  //war data from 2022
  const statsPopUp =
    parsedBRefData(".p1")[0].children[1].children[2].children[0].data;

  const ABData =
    parsedBRefData(".p1")[0].children[3].children[2].children[0].data;
  console.log(ABData);
  debugger;
};

getBRefList();
