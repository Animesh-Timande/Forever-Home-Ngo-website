
for(let i=0;i<18;i++){
let heart=document.createElement("div");
heart.className="heart";
heart.innerHTML="❤️";
heart.style.left=Math.random()*100+"%";
heart.style.animationDuration=(4+Math.random()*4)+"s";
document.body.appendChild(heart);
}


let selectedAmount=0;
let totalDonation=3050;
let goal=50000;

function updateProgress(){
let percent=(totalDonation/goal)*100;
document.getElementById("progressBar").style.width=percent+"%";
}
updateProgress();

function selectAmount(amount){
selectedAmount=amount;
document.querySelectorAll(".amount-buttons button").forEach(btn=>btn.classList.remove("active"));
event.target.classList.add("active");
document.getElementById("customAmount").value="";
}

function openModal(){
let custom=document.getElementById("customAmount").value;
if(custom && custom>0){
selectedAmount=parseInt(custom);
}
document.getElementById("qrModal").classList.add("active");
}

function completeDonation(){
document.getElementById("qrModal").classList.remove("active");
if(selectedAmount>0){
totalDonation+=selectedAmount;
document.getElementById("donationCounter").innerText="₹"+totalDonation;
updateProgress();
document.getElementById("donationSound").play();
}
document.getElementById("thankYou").classList.add("active");
setTimeout(()=>{
document.getElementById("thankYou").classList.remove("active");
},4000);
}

function copyUPI(){
let upi=document.getElementById("upiId").innerText;
navigator.clipboard.writeText(upi);
alert("UPI ID Copied Successfully!");
}