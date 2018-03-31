function evaporator(content, evap_per_day, threshold){
  //considering we know that the evaporation, and threshold are to be taken into consideration
  //we know in the end we're gonna have to return the number of days that we've gone thru
  let days = 0;
  //since we're dealing with percentage, evaporator is assumed to be full I'll creqate a variable that will start at hundred
  let currentLvl = 100;
  //we know that after a certain threshold the container will be of no use, so once currentLvl reaches lowestLvl the loop will end there
  let lowestLvl = 100 * (threshold* .01);
  //when the loop passes that means a day has passed therefore we need to increment the days passed
  while (currentLvl >= lowestLvl){
  days++;

  currentLvl -= (currentLvl * (evap_per_day * .01));
  }


  return days;
};
