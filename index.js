// code your solution here
saturdayFun();
function saturdayFun(activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`);
}
saturdayFun("bathe my dog");

function mondayWork(mondayLocation = "go to the office") {
    return(`This Monday, I will ${mondayLocation}.`)
}
mondayWork("will work from home")

function wrapAdjective(parameter = "*") {
return function (adjective = "special") {
return (`You are ${parameter}${adjective}${parameter}!`)    
    }
}
const encouragingPromptFunction = wrapAdjective("||")
console.log(encouragingPromptFunction())
