
  const form = document.querySelector('.feedback-form');

function saveFormDataToLocalStorage() {
    const formData = {
      email: form.email.value.trim(),
      message: form.message.value.trim()
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }

 
  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedFormData) {
    form.email.value = savedFormData.email;
    form.message.value = savedFormData.message;
  }

  
  form.addEventListener('input', function () {
    saveFormDataToLocalStorage();
  });

  
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    
    const formData = {
      email: form.email.value,
      message: form.message.value
    };
    console.log(formData);

   
    localStorage.removeItem('feedback-form-state');
    form.reset();
  });


  
