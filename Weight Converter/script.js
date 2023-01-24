

document.getElementById('output').style.visibility="hidden";

document.getElementById('input').addEventListener('input',function(e)
{
  document.getElementById('output').style.visibility="visible";

  let kgs=e.target.value;
  document.getElementById('gmout').innerHTML=kgs*1000;
});

document.getElementById('input').addEventListener('input',function(e)
{
  let kgs=e.target.value;
  document.getElementById('poundout').innerHTML=kgs*2.205;
});

document.getElementById('input').addEventListener('input',function(e)
{
  let kgs=e.target.value;
  document.getElementById('onout').innerHTML=kgs*35.274;
});
document.getElementById('input').addEventListener('input',function(e)
{
  let kgs=e.target.value;
  document.getElementById('tonout').innerHTML=kgs/1000;
});
