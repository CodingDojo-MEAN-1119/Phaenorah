var users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]    
function userLanguages(lang){    
    for (let index = 0; index < lang.length; index++){ 
        var result = lang[index].languages;

        var join = ""; //to convert to String
        for(j=0; j<result.length-2; j++){
            var join= result[j] + ",";
        }
        join+= " and " + result[result.length-1] + ".";
        console.log(lang[index].fname +" "+ lang[index].lname + " knows "+ join);
      }     
}
userLanguages(users);
