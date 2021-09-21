const readmorebtn=document.querySelector('#mark');
const text=document.querySelector('.moretext');
readmorebtn.addEventListener('click',(e)=>{
    text.classList.toggle('show-more');
})
const readmorebtn1=document.querySelector('#mark1');
const text1=document.querySelector('.gpa_moretext');
readmorebtn1.addEventListener('click',(e)=>{
    text1.classList.toggle('show-more');
})
const calculate=document.querySelector('#calculate_grade');
calculate.addEventListener('click',(e)=>{
    let m1=parseInt(document.getElementById("m1").value);
    let c1=parseFloat(document.getElementById("c1").value);
    let m2=parseInt(document.getElementById("m2").value);
    let c2=parseFloat(document.getElementById("c2").value);
    let m3=parseInt(document.getElementById("m3").value);
    let c3=parseFloat(document.getElementById("c3").value);
    let m4=parseInt(document.getElementById("m4").value);
    let c4=parseFloat(document.getElementById("c4").value);
    let m5=parseInt(document.getElementById("m5").value);
    let c5=parseFloat(document.getElementById("c5").value);
    let m6=parseInt(document.getElementById("m6").value);
    let c6=parseFloat(document.getElementById("c6").value);
    let d=(m1*c1+m2*c2+m3*c3+m4*c4+m5*c5+m6*c6);
    let v=(c1+c2+c3+c4+c5+c6);
    let result=d/v;
    document.getElementById("result").innerHTML="Your CGPA is "+ result;
})
const calculate1=document.querySelector('#calculate_gpa');
calculate1.addEventListener('click',(e)=>{
    let g1=parseFloat(document.getElementById("g1").value);
    let g2=parseFloat(document.getElementById("g2").value);
    let g3=parseFloat(document.getElementById("g3").value);
    let g4=parseFloat(document.getElementById("g4").value);
    let g5=parseFloat(document.getElementById("g5").value);
    let g6=parseFloat(document.getElementById("g6").value);
    let g7=parseFloat(document.getElementById("g7").value);
    let g8=parseFloat(document.getElementById("g8").value);
    let result1=(g1+g2+g3+g4+g5+g6+g7+g8)/8;
    document.getElementById("result").innerHTML="Your CGPA is "+ result1;
})