import inquirer from "inquirer";
let zakat = 2.5;
let goldValueInTola = 234800;
let goldWeightInTolaReq = 7.5;
let isConditionTrue = true;
while (isConditionTrue) {
    const answer = await inquirer.prompt([
        {
            name: "goldWeight",
            massage: "Enter goldWeight:",
            type: "number"
        }
    ]);
    let goldWeight = answer.goldWeight;
    if (goldWeight >= goldWeightInTolaReq) {
        let calculatedzakat = (goldWeight * goldValueInTola) * (zakat / 100);
        console.log(`calculated value of gold weighing
         ${goldWeight} tola is ${calculatedzakat}`);
    }
    else {
        console.log("zakat not applicable");
        break; //or condition =false;
    }
}
const answer = await inquirer.prompt([
    {
        name: "goldWeight",
        massage: "Enter goldWeight:",
        type: "number"
    }
]);
let goldWeight = answer.goldWeight;
if (goldWeight >= goldWeightInTolaReq) {
    let calculatedzakat = (goldWeight * goldValueInTola) * (zakat / 100);
    console.log(`calculated value of gold weighing
     ${goldWeight} tola is ${calculatedzakat}`);
}
else {
    console.log("zakat not applicable");
}
