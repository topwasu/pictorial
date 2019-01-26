function votefunc () {
	var num = this.innerText;
	num = parseInt(num);
	this.innerText = num + 1;
}
document.querySelector("#bt1").addEventListener("click", votefunc);
document.querySelector("#bt2").addEventListener("click", votefunc);
document.querySelector("#bt3").addEventListener("click", votefunc);