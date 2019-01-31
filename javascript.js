//include ("maaltijden.txt");

function mealGenerator () {
	
	var numberOfMeals = 33;
	var mealNumber = Math.floor(Math.random() * (numberOfMeals)) + 1;

	//using array
	var mealName	= ["Meal 0"	,"Aardappel-vlees-groente"	,"Babi pangang"		,"Bami"				,"Bloemkool"		,"Boerenkool"	,"Chili con carne"	,"Chinees"	,"Couscous"	,"Gourmetten"	,"Gyros"	,"Hutspot"	,"Kip kerrie"	,"Lasagne"	,"Maaltijdsalade"	,"Macaroni"	,"Nasi"	,"Pannenkoeken"	,"Patat"	,"Pilav"	,"Pizza"	,"Rijst met prut"	,"Risotto"	,"Sajoer boontjes"	,"Soep met geroosterd brood"	,"Spaghetti"	,"Spinazie"	,"Stampot rauwe andijvie"	,"Tagliatelle"	,"Tikka masala"	,"Tjap tjoy"	,"Groenteschotel"	,"Wraps / taco's"	,"Zoetzure saus"];
	var ingredient1	= [""		,"Aardappel"				,"Komt nog"			,"Mie"				,"Aardappelblokjes"	,"Aardappel"	,"Bonen"			,"Komt nog"	,"Couscous"	,	];			
	var ingredient2	= [""		,"Schnitzel"				,"Komt nog"			,"Groentenpakket"	,"Bloemkool"		,"Boerenkool"	,"Paprika"			,"Komt nog"	,"Komt nog" ,	];
	var allergeen1	= [""		,"Melk"						,"Komt nog"			,"Gluten"			,"Aardappel"		,"Aardappel"	,"Bonen"			,"Komt nog"	,"Komt nog" ,	];	

	document.getElementById("mealname").innerHTML = mealName[mealNumber];
	document.getElementById("mealingredients").innerHTML = ingredient1[mealNumber];
	document.getElementById("mealingredients2").innerHTML = ingredient2[mealNumber];
	document.getElementById("allergeneninfo").innerHTML = allergeen1[mealNumber];
	
	/*function nameMealNumber () {
	var mealName = ('An error occurred...');
	var mealAllergens = ('An error occurred...');
	var mealIngredients = ('An error occurred...');
	var mealMethodOfPreparation = ('An error occurred...');
	var mealYetToCome = ('An error occurred...');
	
		
		switch(mealNumber) {
		case 1:
        mealName = ('Aardappel-vlees-groente');
        break;
		case 2:
        mealName = ('Bami');
		mealAllergens = ('Gluten');	
        break;
		case 3:
        mealName = ('Bloemkool');
		mealIngredients = ('1 bloemkool, vlees naar keuze.');		
        break;
		case 4:
        mealName = ('Boerenkool');	
        break;
		case 5:
        mealName = ('Chili con carne');	
        break;
		case 6:
        mealName = ('Chinees');	
        break;
		case 7:
        mealName = ('Gourmetten');	
        break;
		case 8:
        mealName = ('Gyros');	
        break;
		case 9:
        mealName = ('Kip kerrie');	
        break;
		case 10:
        mealName = ('Lasagne');	
        break;
		case 11:
        mealName = ('Maaltijdsalade');	
        break;
		case 12:
        mealName = ('Macaroni');	
        break;
		case 13:
        mealName = ('Nasi');	
        break;
		case 14:
        mealName = ('Pannenkoeken');	
        break;
		case 15:
        mealName = ('Patat');	
        break;
		case 16:
        mealName = ('Pilav');	
        break;
		case 17:
        mealName = ('Pizza');	
        break;
		case 18:
        mealName = ('Risotto');	
        break;
		case 19:
        mealName = ('Rijst met prut');	
        break;
		case 20:
        mealName = ('Soep met geroosterd brood');	
        break;
		case 21:
        mealName = ('Spaghetti');	
        break;
		case 22:
        mealName = ('Spinazie');	
        break;
		case 23:
        mealName = ('Stampot rauwe andijvie');	
        break;
		case 24:
        mealName = ('Tikka masala');	
        break;
		case 25:
        mealName = ('Tjap tjoy');	
        break;
		case 26:
        mealName = ('Wraps / taco"s');	
        break;
		case 27:
        mealName = ('Zoetzure saus');	
        break;
		case 28:
        mealName = ('Hutspot');	
        break;
		case 29:
        mealName = ('Tagliatelle');	
        break;
		case 30:
        mealName = ('Couscous');	
        break;
		case 31:
        mealName = ('Sajoer boontjes');	
        break;
		case 32:
        mealName = ('Babi pangang');	
        break;
		case 33:
        mealName = ('Toscaanse/provencaalse groenteschotel');	
        break;
		case 34:
        mealName = ('NotYetMade');	
        break;
		case 35:
        mealName = ('NotYetMade');	
        break;
		case 36:
        mealName = ('NotYetMade');	
        break;
		case 37:
        mealName = ('NotYetMade');	
        break;
		case 38:
        mealName = ('NotYetMade');	
        break;
		case 39:
        mealName = ('NotYetMade');	
        break;
		case 40:
        mealName = ('NotYetMade');	
        break;
		case 41:
        mealName = ('NotYetMade');	
        break;
		case 42:
        mealName = ('NotYetMade');	
        break;
		case 43:
        mealName = ('NotYetMade');	
        break;
		case 44:
        mealName = ('NotYetMade');	
        break;
		case 45:
        mealName = ('NotYetMade');	
        break;
		case 46:
        mealName = ('NotYetMade');	
        break;
		case 47:
        mealName = ('NotYetMade');	
        break;
		case 48:
        mealName = ('NotYetMade');	
        break;
		case 49:
        mealName = ('NotYetMade');	
        break;
		case 50:
        mealName = ('NotYetMade');	
        break;
		
	default:
        mealName = ('zelf kiezen');	
		} 
		
		document.getElementById("mealname").innerHTML = (mealName);
		document.getElementById("mealallergens").innerHTML = (mealAllergens);
		document.getElementById("mealingredients").innerHTML = (mealIngredients);
		document.getElementById("mealmethodofpreparation").innerHTML = (mealMethodOfPreparation);
		document.getElementById("mealyettocome").innerHTML = (mealYetToCome);
	}

	nameMealNumber();	*/

	function writeMeal(){
		document.getElementById("mealnumber").innerHTML = (mealNumber);
		
	}
	writeMeal();

}
mealGenerator ();

function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
	
    document.getElementById(pageName).style.display = "block";
	
    elmnt.style.backgroundColor = color;

}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();