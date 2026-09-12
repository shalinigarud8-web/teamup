const menuBtn=document.getElementById("menuBtn");
const navMenu=document.getElementById("navMenu");

menuBtn.addEventListener("click",()=>{
  navMenu.classList.toggle("open");
  menuBtn.textContent=navMenu.classList.contains("open")?"✕":"☰";
});

document.querySelectorAll(".nav-menu a").forEach(link=>{
  link.addEventListener("click",()=>{
    navMenu.classList.remove("open");
    menuBtn.textContent="☰";
  });
});

const form=document.getElementById("contactForm");
const message=document.getElementById("formMessage");

form.addEventListener("submit",(event)=>{
  event.preventDefault();
  const name=document.getElementById("name").value.trim();
  message.textContent=`Thanks, ${name}! Your message has been received.`;
  form.reset();
});

document.getElementById("year").textContent=new Date().getFullYear();
