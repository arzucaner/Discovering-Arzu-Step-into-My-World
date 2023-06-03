  s  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
   
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
  
    fetch('/arzuguneycaner@gmail.com', {
    method: 'POST',
    body: formData
  })

   .then(response => {
    if (response.ok) {
      
    } else {
      
    }
  })
    .catch(error => {
    
  });
  
    document.getElementById('contact-form').reset();
  });
  