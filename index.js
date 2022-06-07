function saturdayFun(thing = "roller-skate"){
    return `This Saturday, I want to ${thing}!`
}
function mondayWork(todo = "go to the office"){
    return `This Monday, I will ${todo}.`
}
function wrapAdjective(style="*"){
    function inner (special =" a hard worker"){
        return `You are ${style}${special}${style}!`
    }
    return inner
}