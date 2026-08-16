const modal=document.getElementById('characterModal'),title=document.getElementById('modalTitle'),copy=document.getElementById('modalCopy'),start=document.getElementById('startChat');
const intros={
"Em":"Okay. Tell me everything — but start with what actually happened.",
"Emma":"Tell me what we're working with. Who is it for, and what do you want it to feel like?",
"Miss Path":"Start wherever you are. We can sort out what you know, what you feel, and what keeps repeating.",
"Mr. Goodson":"I'm not interested in what they promised. Show me what happened next."
};
document.querySelectorAll('.talk-btn').forEach(btn=>btn.addEventListener('click',()=>{const n=btn.dataset.character;title.textContent=`You chose ${n}.`;copy.textContent=intros[n];start.dataset.character=n;modal.classList.add('open');modal.setAttribute('aria-hidden','false')}));
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
document.querySelector('.close').addEventListener('click',closeModal);document.querySelector('.modal-backdrop').addEventListener('click',closeModal);
start.addEventListener('click',()=>alert(`${start.dataset.character}'s room is ready for your chat integration.`));