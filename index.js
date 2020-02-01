// Code your solution here
 const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
function findMatching( drivers,str)
{
  return drivers.filter(drive =>{
    
    return drive.toUpperCase() === str.toUpperCase()});
}

function fuzzyMatch(drivers,str)
{
  
  return drivers.filter(drive => {
    let all=[];
    let i;
      for(i=0;i<str.length ;i++ ){
          if(drive.charAt(i).toUpperCase() != str.charAt(i).toUpperCase())
          break;
          
          }
          if(i==str.length)
          {all.push(drive);}
     return all;
  });
}

function matchName(drivers,str)
{
  
}

findMatching(drivers,"Bobby");
findMatching(drivers, 'Susan');
fuzzyMatch(drivers, 'sa');