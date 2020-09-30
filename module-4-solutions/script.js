var array=["chandler","ross","joey","rachel","phoebe","monica","Jenelia"];
for(i=0;i<array.length;i++){
	if(array[i].charAt(0)==='j' || array[i].charAt(0)=== 'J'){
		console.log("Goodbye "+array[i]);
	}
	else
		console.log("Hello "+array[i]);
}