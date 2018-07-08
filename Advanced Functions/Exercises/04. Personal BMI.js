function personalBMI(name, age, weight, height) {
    let obj = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round(weight /(height * height / 10000))
    };
    //console.log(obj.personalInfo.age);
    obj.status = obj.BMI < 18.5 ? "underweight" : obj.BMI < 25 ? "normal" : obj.BMI < 30 ? "overweight" : "obese";

    if(obj.status == "obese"){
        obj.recommendation = "admission required";
    }

    return obj;
}

console.log(personalBMI('Peter', 29, 75, 182));