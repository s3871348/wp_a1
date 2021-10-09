function planMeal(){
    anythingchecked = document.getElementById("anything").checked;
    veganchecked = document.getElementById("vegan").checked;
    calory = document.getElementById("calory").value;
    meal = document.getElementById("meal").value;

    if (( anythingchecked == false) && (veganchecked == false)) {
        hideAllErrors();
        document.getElementById("dietError").style.display = "inline";
        return false;
    }
    else if (calory == "choose") 
    {
	hideAllErrors();
	document.getElementById("caloryError").style.display = "inline";
	document.getElementById("calory").focus();
	return false;
    }

    else if (meal == "choose") 
    {
	hideAllErrors();
	document.getElementById("mealError").style.display = "inline";
	document.getElementById("meal").focus();
	return false;
    }



}

function hideAllErrors() {
    document.getElementById("dietError").style.display = "none";
    document.getElementById("caloryError").style.display = "none";
    document.getElementById("mealError").style.display = "none";
}
