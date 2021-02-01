var modalWindow=document.createElement('div');
	modalWindow.setAttribute('class','modal text-center')
var backDrop=document.createElement('div');
	backDrop.setAttribute('class','backdrop');
let lineBreak=document.createElement('br')
var text="Hello ,Myself Mayur keswani , I am a MERN-STACK Developer"

let container=document.createElement('div');
	container.setAttribute('class','container');
	document.body.appendChild(container);

let demoContainer=document.createElement('div');
	demoContainer.setAttribute('class','demo-container')
	container.appendChild(demoContainer);

let heading=document.createElement('h3')
	heading.classList.add('text-center')
	heading.textContent="Enter your Description here ⬇️"
	demoContainer.appendChild(heading)

var description=document.createElement('textarea')
	description.setAttribute('rows','10');
	description.setAttribute('cols','55');
	description.setAttribute('readonly','true');
	description.textContent=text;
	demoContainer.appendChild(description)

	demoContainer.appendChild(lineBreak)
let triggerModal=document.createElement('button');
	triggerModal.setAttribute('class','btn-edit')
	triggerModal.textContent="EDIT";
	demoContainer.appendChild(triggerModal);
/* ======================================================== */
let closeModalBtn=document.createElement('button');
	closeModalBtn.setAttribute('class','btn-cancel')
	closeModalBtn.textContent="SUBMIT";

let modalHeading=document.createElement('h3')
	modalHeading.classList.add('text-center')
	modalHeading.textContent="Edit your Description here ⬇️"



var modalDescription=document.createElement('textarea')
	modalDescription.setAttribute('rows','10');
	modalDescription.setAttribute('cols','55');
	modalDescription.textContent='Hello ,Myself Mayur keswani , I am a MERN-STACK Developer';


	modalWindow.appendChild(modalHeading);
	modalWindow.appendChild(modalDescription);
	modalWindow.appendChild(closeModalBtn);
/*============================================================= */	





let modalOpen=()=>{
	
		container.appendChild(backDrop);
		container.appendChild(modalWindow);

	
}
let closeModal=()=>{
	text=modalDescription.value;
	description.value=text;
	backDrop.remove();
	modalWindow.remove();
	
}

  

   triggerModal.addEventListener('click',(event)=>{
		modalOpen();
   })
   closeModalBtn.addEventListener('click',(event)=>{
	   closeModal();
   })



// 	demoContainer.appendChild(closeModalBtn)


