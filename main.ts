// listing input elements
// preventdefault is liye hota takay form submit hoty hway page reload na ho

document.getElementById('resume')?.addEventListener('submit',function(event){
    event.preventDefault()

    const nameElement = document.getElementById('name') as HTMLInputElement
    const fNameElement = document.getElementById('fathername') as HTMLInputElement
    const emailElement = document.getElementById('email') as HTMLInputElement
    const contactElement = document.getElementById('number') as HTMLInputElement
    const addressElement = document.getElementById('address') as HTMLInputElement
    const educationElement = document.getElementById('education') as HTMLInputElement
    const experienceElement = document.getElementById('experience') as HTMLInputElement
    const skillElement = document.getElementById('skill') as HTMLInputElement

    //creating output

    if(nameElement && fNameElement && emailElement && contactElement && addressElement && educationElement &&experienceElement &&skillElement){
        const name= nameElement.value
        const fName= fNameElement.value
        const email= emailElement.value
        const contact= contactElement.value
        const address= addressElement.value
        const education= educationElement.value
        const experience= experienceElement.value
        const skill= skillElement.value
    

    const generatedOutput = `
    <h2>My Resume </h2>
    <p><strong> Name: </strong> ${name}</p>
    <p><strong> Father Name: </strong> ${fName}</p>
    <p><strong> Email address: </strong> ${email}</p>
    <p><strong> Contact Number: </strong> ${contact}</p>
    <p><strong> Address: </strong> ${address}</p>
    <h3> Education:</h3> 
    
    <p>${education}</p>
    <h3> Experience:</h3> 
    <p>${experience}</p>
    <h3> Skills:</h3> 
    <p>${skill}</p>
   `;
   const resumeOutputElement= document.getElementById('generatedOutput')
   if(resumeOutputElement){
    resumeOutputElement.innerHTML = generatedOutput
   }else{
    console.error('Something is mising in element output')
   }
   
}
    })