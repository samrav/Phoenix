// to test a function and get back its return
//function printElapsedTime () 
  var start = new Date('July 10, 2016 12:00:00');
  var end = new Date ();
  var vReturn= Number(end-start)/ (1000*60*60*24);

 console.log('Elapsed time: ' + vReturn + ' milliseconds');
  document.getElementById("dayssince").innerHTML=String( Math.round(vReturn));

