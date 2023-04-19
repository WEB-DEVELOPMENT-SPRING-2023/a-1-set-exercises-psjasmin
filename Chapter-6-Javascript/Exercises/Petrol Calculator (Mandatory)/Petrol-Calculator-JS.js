function multiplyBy()
{
    num1 = document.getElementById("ppl").value; //Cost of Petrol per liter
    num2 = document.getElementById("liters").value; //Number of liters purchased
    document.getElementById("result").innerHTML = num1 * num2; //Total cost of the petrol
}