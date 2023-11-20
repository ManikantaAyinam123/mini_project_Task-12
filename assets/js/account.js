function account() {


    let c = nameValidation();
    if (c == 1) {
      let d = lastnameValidation();
      if (d == 1) {
        let e = emailValidation();
        if (e == 1) {
          let f = phonenumberValidate();
          if (f == 1) {
            $(".star-input span").removeClass("checked");
            $(this).parent().addClass("checked");
            var userRating = $('input[name="rating"]:checked')
              .attr("id")
              .split("-")[1];
            const modal = document.getElementById("successModal");
            var name = $("#tname").val();
          $("#nu").text("Thank You "+name+" for giving "+ userRating + " Stars.");
        modal.style.display = "block";
          } else {
          }
        } else {
          $("#phoneNumberHelp").text("");
          $("#phonenumber").css({ border: "1px solid black" });
        }
      } else {
        $("#exampleInputEmail1").css({ border: "1px solid black" });
        $("#emailHelp").text("");
        $("#phoneNumberHelp").text("");
        $("#phonenumber").css({ border: "1px solid black" });
      }
    } else {
      $("#lname").css({ border: "1px solid black" });
      $("#lnameHelp").text("");
      $("#exampleInputEmail1").css({ border: "1px solid black" });
      $("#emailHelp").text("");
      $("#phoneNumberHelp").text("");
      $("#phonenumber").css({ border: "1px solid black" });
    }
}
  function nameValidation() {
    let c = 0;
    var name = $("#tname").val();

    if (name === "") {
      $("#nameHelp").text("Name Cant'be Empty");
      $("#tname").css({ border: "1px solid red" });

      c = c - 1;
    } else if (!checkName(name)) {
      $("#nameHelp").text("Name Should Contain Only Letters");
      $("#tname").css({ border: "1px solid red" });
      c = c - 1;
    } else {
      $("#nameHelp").text("");
      $("#tname").css({ border: "1px solid green" });
      c++;
    }
    console.log(c);
    return c;
  }
  function lastnameValidation() {
    let c = 0;
    var name = $("#lname").val();

    if (name === "") {
      $("#lnameHelp").text("Last Name Can't be Empty");
      $("#lname").css({ border: "1px solid red" });
      c = c - 1;
    } else if (!checkName(name)) {
      $("#lnameHelp").text("Last Name Should Contain Only Letters");
      $("#lname").css({ border: "1px solid red" });
      c = c - 1;
    } else {
      $("#lnameHelp").text("");
      $("#lname").css({ border: "1px solid green" });
      c++;
    }
    console.log(c);
    return c;
  }

  function emailValidation() {
    let c = 0;
    var email = $("#exampleInputEmail1").val();

    if (email === "") {
      $("#emailHelp").text("Email Cant'be Empty");
      $("#exampleInputEmail1").css({ border: "1px solid red" });
      c = c - 1;
    } else if (!emailCheck(email)) {
      $("#emailHelp").text("Enter Valid Email");
      $("#exampleInputEmail1").css({ border: "1px solid red" });
      c = c - 1;
    } else {
      $("#emailHelp").text("");
      $("#exampleInputEmail1").css({ border: "1px solid green" });
      c++;
    }
    return c;
  }
  function phonenumberValidate() {
    let c = 0;
    var PhoneNumber = $("#phonenumber").val();
    console.log(PhoneNumber.charAt(0));
    if (PhoneNumber === "") {
      $("#phoneNumberHelp").text("Phonumber Cant'be Empty");
      $("#phonenumber").css({ border: "1px solid red" });
      c = c - 1;
    } else if (
      PhoneNumber.charAt(0) !== "9" &&
      PhoneNumber.charAt(0) !== "6" &&
      PhoneNumber.charAt(0) !== "7" &&
      PhoneNumber.charAt(0) !== "8"
    ) {
      $("#phoneNumberHelp").text("Enter Valid Mobile Number");
      $("#phonenumber").css({ border: "1px solid red" });
      c = c - 1;
    } else if (!phoneNumberCheck(PhoneNumber)) {
      $("#phoneNumberHelp").text("Enter Valid Mobile Number");
      $("#phonenumber").css({ border: "1px solid red" });
      c = c - 1;
    } else {
      $("#phoneNumberHelp").text("");

      $("#phonenumber").css({ border: "1px solid green" });
      c++;
    }
    return c;
  }

  function checkName(input) {
    let nameReg = /^[a-zA-Z]+$/;
    let valid = nameReg.test(input);
    return valid;
  }

  function emailCheck(input) {
    let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let valid = emailReg.test(input);
    return valid;
  }
  function passwordCheck(input) {
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let valid = regex.test(input);
    return valid;
  }
  function phoneNumberCheck(input) {
    let reg = /^[0-9]{10}$/;
    let valid = reg.test(input);
    return valid;
  }

