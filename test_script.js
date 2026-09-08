const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const fileContent = fs.readFileSync('c:/Users/John/Desktop/stitch_healing_mind_platform/psychometric_assessments_locus_of_control/code.html', 'utf8');

const dom = new JSDOM(fileContent, { runScripts: "dangerously" });
setTimeout(() => {
    const container = dom.window.document.getElementById('questionsContainer');
    console.log("Container innerHTML length:", container.innerHTML.length);
    if (container.innerHTML.length === 0) {
        console.log("Empty container! Check window errors.");
    }
}, 500);
