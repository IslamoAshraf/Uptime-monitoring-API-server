// import { _axios } from "../configurations/axiosConfig.js";
import { Url } from "../modules/urls/model/urlsModel.js";
import { availability } from "../utilities/availability.js";
import { averageResponseTime } from "../utilities/averageResponseTime.js";
import { isAvailable } from "../utilities/isAvailable.js";
import { history } from "../utilities/pullsHistory.js";
import { totalDownPulls } from "../utilities/totalDownPulls.js";
import { totalDownTime } from "../utilities/totalDownTime.js";
import { totalUpPulls1 } from "../utilities/totalUpPulls.js";
import { totalUpTime } from "../utilities/totalUpTime.js";

let createReportActions = async () => {
  let urlsData = await Url.find({});
  for (const urlData of urlsData) {
    let { status, url, totalUpPulls } = urlData;
    await isAvailable(url);

   
  }
};

export { createReportActions };
