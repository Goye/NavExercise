import test from "ava";
import Nav from "../js/nav.js";
import jsonFile from "../data/nav.json";

// Verify if json is Loaded, comparing object property with json Data
test("Load json file", t => {
  const navObj = new Nav(jsonFile);
  t.is(navObj.htmlData.data, jsonFile);
});

// Verify function htmlCode that returns the <li>, total chars is 2085
test("Verify load nav root elements", t => {
  const navObj = new Nav(jsonFile);
  const rootEl = navObj.htmlCode(jsonFile);
  const htmlEl = navObj.initHtmlElements();
  t.true(rootEl.length > 0);
});
