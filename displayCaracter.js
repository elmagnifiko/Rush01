function displayCaracter(n) 
{
    let sortie = "";
    for (var i = 1; i <= n; i++) 
    {
      if (i % 2 === 0) 
      {
        sortie += (i % 4 === 0) ? "C" : "B";
      } else 
      {
        sortie += "A";
      }
    }
    console.log(sortie);
}
  displayCaracter(10);