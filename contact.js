let emailReceiver = 'husnibarking@gmail.com';
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function submitForm() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;

  // console.log(name);
  // console.log(email);
  // console.log(phone);
  // console.log(subject);
  // console.log(message);

  // alert(`
  //   Name: ${name}
  //   Email: ${email}
  //   Phone: ${phone}
  //   Subject: ${subject}
  //   Message: ${message}
  // `);

  // OBJECT
  let dataObject = {
    name: name,
    email: email,
    phoneNumber: phone,
    subject: subject,
    message: message,
};

  console.table(dataObject);
 
  let a = document.createElement('a');
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo perkenalkan nama saya ${name}, ${message}`; `mailform:${email}`
  // a.click();

  if (name == ''){
    alert('Nama tidak boleh kosong');
  }

  if (phone == ''){
    alert('Nomor hp harus diisi ya');
  }

  if (email.match(mailformat)) {
    alert('Oke email adress valid');
    return a.click();
  }
  else
  {
    alert("Email adress ga valid tuh!");
  }

}






