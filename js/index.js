//javascript document
var compteurimage=0;
var totalimage=6;
var liens = document.getElementById('liens');
var lien = document.getElementById('lien');
	lien.style.textAlign = "center";
	lien.innerHTML = "Web 3D";
	lien.style.background = "#A5B8B4";
    lien.style.fontWeight = "bold";
	liens.href = "pages/web3D.html";

function slider(x)
{
	var image=document.getElementById("voiture");
	compteurimage= compteurimage + x;

	if (compteurimage < totalimage)
	{
		lien.style.textAlign = "center";
		switch(compteurimage){
			case 1: 
						lien.innerHTML = "Web 3D";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/web3D.html";
				break;
			case 2: 
						lien.innerHTML = "Web mining";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/web-mining.html";
				break;
			case 3: 
						lien.innerHTML = "Système multi-agents";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/sma.html";
				break;
			case 4: 
						lien.innerHTML = "Recherche d'information";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/ri.html";
				break;
			case 5: 
						lien.innerHTML = "Entrepôt des données";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/edd.html";
				break;
			case 6: 
						lien.innerHTML = "Apprentissage automatique";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/aa.html";
				break;
    	}
		image.src="resources/module"+compteurimage+".jpg";
	}
	if(compteurimage==totalimage)
	{
		lien.style.textAlign = "center";
		switch(compteurimage){
			case 1: 
						lien.innerHTML = "Web 3D";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/web3D.html";
				break;
			case 2: 
						lien.innerHTML = "Web mining";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/web-mining.html";
				break;
			case 3: 
						lien.innerHTML = "Système multi-agents";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/sma.html";
				break;
			case 4: 
						lien.innerHTML = "Recherche d'information";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/ri.html";
				break;
			case 5: 
						lien.innerHTML = "Entrepôt des données";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/edd.html";
				break;
			case 6: 
						lien.innerHTML = "Apprentissage automatique";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/aa.html";
				break;
    	}
		image.src="resources/module"+compteurimage+".jpg";
		compteurimage=0;
	}
}
function slidery(x)
{
	var image=document.getElementById("voiture");
	compteurimage= compteurimage + x;
	lien.style.textAlign = "center";

	if (compteurimage < totalimage)
	{
		switch(compteurimage){
			case 1: 
						lien.innerHTML = "Web 3D";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/web3D.html";
				break;
			case 2: 
						lien.innerHTML = "Web mining";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/web-mining.html";
				break;
			case 3: 
						lien.innerHTML = "Système multi-agents";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/sma.html";
				break;
			case 4: 
						lien.innerHTML = "Recherche d'information";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/ri.html";
				break;
			case 5: 
						lien.innerHTML = "Entrepôt des données";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/edd.html";
				break;
			case 6: 
						lien.innerHTML = "Apprentissage automatique";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/aa.html";
				break;
    	}
		image.src="resources/module"+compteurimage+".jpg";
	}
	if(compteurimage<1)
	{
		compteurimage=totalimage;
		image.src="resources/module"+compteurimage+".jpg";
		lien.style.textAlign = "center";
		switch(compteurimage){
			case 1: 
						lien.innerHTML = "Web 3D";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/web3D.html";
				break;
			case 2: 
						lien.innerHTML = "Web mining";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/web-mining.html";
				break;
			case 3: 
						lien.innerHTML = "Système multi-agents";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "../pages/sma.html";
				break;
			case 4: 
						lien.innerHTML = "Recherche d'information";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/ri.html";
				break;
			case 5: 
						lien.innerHTML = "Entrepôt des données";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/edd.html";
				break;
			case 6: 
						lien.innerHTML = "Apprentissage automatique";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/aa.html";
				break;
    	}
    }
}
	
function sliderauto()
{
	var image=document.getElementById("voiture");
	compteurimage=compteurimage + 1;
	var lien = document.getElementById('lien');
	
	lien.style.textAlign = "center";
	switch(compteurimage){
		case 1: 
						lien.innerHTML = "Web 3D";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/web3D.html";
				break;
			case 2: 
						lien.innerHTML = "Web mining";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/web-mining.html";
				break;
			case 3: 
						lien.innerHTML = "Système multi-agents";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/sma.html";
				break;
			case 4: 
						lien.innerHTML = "Recherche d'information";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/ri.html";
				break;
			case 5: 
						lien.innerHTML = "Entrepôt des données";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/edd.html";
				break;
			case 6: 
						lien.innerHTML = "Apprentissage automatique";
						lien.style.background = "#A5B8B4";
           				lien.style.fontWeight = "bold";
						liens.href = "pages/aa.html";
				break;
	}
	image.src="resources/module"+compteurimage+".jpg";
	if(compteurimage==totalimage)
	{
		compteurimage=0;
	}
	/*if(compteurimage<1)
	{
		compteurimage=0;
	}*/
}
	window.setInterval(sliderauto,5000);


