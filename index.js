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
    return drive.charAt(0).toUpperCase() != str.charAt(0).toUpperCase())
    });
}

function matchName(drivers,str)
{
  
}

findMatching(drivers,"Bobby");
findMatching(drivers, 'Susan');
fuzzyMatch(drivers, 'sa');