document.getElementById("my-work-btn").addEventListener("click", function() {
    window.location.href = "https://github.com/arzucaner";
  });
  
  var linkedinLink = document.getElementById("linkedin-link");
  linkedinLink.addEventListener("click", function() {
    window.location.href = "https://www.linkedin.com/in/arzucaner/";
  });
  
  var twitterLink = document.getElementById("twitter-link");
twitterLink.addEventListener("click", function() {
  window.location.href = "https://twitter.com/arzuguneycaner";
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
   
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  
    document.getElementById('contact-form').reset();
  });
  