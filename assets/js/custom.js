$(function () {
  "use strict";
  $('[data-toggle="tooltip"]').tooltip();
});

$(window).on("load", function () {
  var delayMs = 10000; // delay in milliseconds

  setTimeout(function () {
    $("#enquire-modal").modal("show");
  }, delayMs);
});

$(document).ready(function () {
  //code for Whatsapp message
  let urlString = window.location.href;
  console.log(urlString);
  $(document).ready(function () {
    const url = new URL(urlString);
    $(".website_url").val(url.href);
    const utm_source = url.searchParams.get("utm_source");
    const mainsource = url.searchParams.get("mainsource");

    // Check if the URL parameter is from utm_source
    if (utm_source) {
      // Check if the URL parameter is Google or google
      if (utm_source.toLowerCase() === "google") {
        document.getElementById("discovery").href =
          "https://api.whatsapp.com/send?phone=919004523829&text=Hello%2C%20I%20would%20like%20to%20explore%20further%20details%20about%20Kalpataru-Advay, Borivali.";
        document.getElementById("discovery_mobile").href =
          "https://api.whatsapp.com/send?phone=919004523829&text=Hello%2C%20I%20would%20like%20to%20explore%20further%20details%20about%20Kalpataru-Advay, Borivali.";
        // var whatsappBtnDesktop = document.getElementById("discovery");
        //         if (whatsappBtnDesktop) {
        //             whatsappBtnDesktop.parentNode.removeChild(whatsappBtnDesktop);
        //         }
        //         var whatsappBtnMobile = document.getElementById("discovery_mobile");
        //         if (whatsappBtnMobile) {
        //             whatsappBtnMobile.parentNode.removeChild(whatsappBtnMobile);

        //         }
      } else if (utm_source.toLowerCase() === "ppc") {
        document.getElementById("discovery").href =
          "https://api.whatsapp.com/send?phone=919004523829&text=Hi%20I'm%20interested-20iay, Borivalin%20Learning%20more%20About%20Kalpataru Adv.%20Please%20Share%20Details.";
        document.getElementById("discovery_mobile").href =
          "https://api.whatsapp.com/send?phone=919004523829&text=Hi%20I'm%20interested-20iay, Borivalin%20Learning%20more%20about%20Kalpataru Adv.%20Please%20Share%20Details.";
      }
    } else if (mainsource) {
      // Check if the URL parameter is from mainsource
      // Check if the URL parameter is GoogleY, GoogleA, etc.
      if (mainsource.startsWith("Google")) {
        document.getElementById("discovery").href =
          "https://api.whatsapp.com/send?phone=919004523829&text=Hello%2C%20I%20would%20like%20to%20explore%20further%20details%20about%20Kalpataru-Advay, Borivali.";
        document.getElementById("discovery_mobile").href =
          "https://api.whatsapp.com/send?phone=919004523829&text=Hello%2C%20I%20would%20like%20to%20explore%20further%20details%20about%20Kalpataru-Advay, Borivali.";
        // var whatsappBtnDesktop = document.getElementById("discovery");
        //         if (whatsappBtnDesktop) {
        //             whatsappBtnDesktop.parentNode.removeChild(whatsappBtnDesktop);
        //         }
        //         var whatsappBtnMobile = document.getElementById("discovery_mobile");
        //         if (whatsappBtnMobile) {
        //             whatsappBtnMobile.parentNode.removeChild(whatsappBtnMobile);

        //         }
      } else if (mainsource.toLowerCase() === "ppc") {
        document.getElementById("discovery").href =
          "https://api.whatsapp.com/send?phone=919004523829&text=Hi%20I'm%20interested-20iay, Borivalin%20Learning%20more%20About%20Kalpataru Adv.%20Please%20Share%20Details.";
        document.getElementById("discovery_mobile").href =
          "https://api.whatsapp.com/send?phone=919004523829&text=Hi%20I'm%20interested-20iay, Borivalin%20Learning%20more%20about%20Kalpataru Adv.%20Please%20Share%20Details.";
      }
    }
  });

  /////form name submission code//////////
  $(".custom-btn").click(function () {
    var myBookId = $(this).data("id");
    $(".form_name").val(myBookId);
    //document.getElementsByName('form_name').value = myBookId;
  });

  $(".data-id-btn").click(function () {
    var myBookId = $(this).data("id");
    $(".form_name").val(myBookId);
    //document.getElementsByName('form_name').value = myBookId;
  });

  // code for button more and less
  $(".moreBtn").click(function () {
    if ($(this).html() === 'Read more <i class="fa fa-chevron-down"></i>') {
      $(this).html('Read less <i class="fa fa-chevron-up"></i>');
    } else {
      $(this).html('Read more <i class="fa fa-chevron-down"></i>');
    }
    $(".moreText[data-hit=more" + $(this).data("target") + "]").slideToggle(
      500
    );
  });

  $(".moredisclaimerBtn").click(function () {
    if ($(this).html() === 'Read more <i class="fa fa-chevron-down"></i>') {
      $(this).html('Read less <i class="fa fa-chevron-up"></i>');
    } else {
      $(this).html('Read more <i class="fa fa-chevron-down"></i>');
    }
    $(
      ".moredisclaimerText[data-hit=more" + $(this).data("target") + "]"
    ).slideToggle(500);
  });

  var exampleModal = document.getElementById("enquire-modal");
  exampleModal.addEventListener("show.bs.modal", function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget;

    // Ensure the button is defined
    if (button) {
      // Extract info from data-bs-* attributes
      var recipient = button.getAttribute("data-bs-whatever");

      // Update the modal's content.
      var modalTitle = exampleModal.querySelector(".modal-title");
      var modalBodyInput = exampleModal.querySelector(".modal-body input");
      console.log(recipient);
      modalTitle.textContent = recipient;
      //   modalBodyInput.value = recipient;
    } else {
      console.warn("The modal was triggered without a related target.");
    }
  });

  if ($(window).innerWidth() < 576) {
    clearInterval(formInterval);
  }

  $(".num").on("keyup", function (e) {
    if (this.value != "") {
      $(".check").prop("checked", "checked");
    } else {
      $(".check").prop("checked", "");
    }
  });

  // Popup youtube JS
  $(".popup-youtube").magnificPopup({
    disableOn: 320,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });
});

///form submit///
function submitForm(event, formName) {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  var formData = new FormData(document.forms[formName]);
  var currentUrl = window.location.href; // Capture current URL

  // Clear previous errors
  var errorMessages = document.querySelectorAll(".error");
  errorMessages.forEach(function (error) {
    error.style.display = "none";
  });

  // Get name and phone values
  var nameValue = formData.get("name");
  var phoneValue = formData.get("mobile");
  var formnameValue = formData.get("form_name");

  // Validate name and phone
  // var nameError = document.querySelectorAll('.error')[0];
  // var phoneError = document.querySelectorAll('.error')[1];
  var nameError = document.forms[formName].querySelectorAll(".error")[0];
  var phoneError = document.forms[formName].querySelectorAll(".error")[1];

  // If both fields are empty, display both error messages
  if (!nameValue && !phoneValue) {
    nameError.style.display = "block";
    phoneError.style.display = "block";
    return;
  }
  // Validate name and phone
  if (!nameValue) {
    nameError.style.display = "block";
    document.querySelectorAll(".error")[0].style.display = "block";
    return; // Exit function if name is empty
  }

  if (!phoneValue) {
    phoneError.style.display = "block";
    return; // Exit function if phone is empty
  }

  var form_data = {
    name: formData.get("name"),
    email: formData.get("email"),
    mobile: formData.get("mobile"),
    form_name: formData.get("form_name"),
    website_url: formData.get("website_url"),
    currentUrl,
  };

  // Add current URL to form data
  // Add current URL to form data
  formData += "&currentUrl=" + encodeURIComponent(currentUrl);

  const data = {
    name: form_data.name,
    email: form_data.email,
    mobile: form_data.mobile,
  };

  fetch("https://mailsender-hatk.onrender.com/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((emailResult) => {
      window.location.href = "thank-you.html";
      document.forms[formName].reset();
      var enquireModal = document.getElementById("enquire-modal");
      var modalInstance = bootstrap.Modal.getInstance(enquireModal);
      if (modalInstance) {
        modalInstance.hide();
      }
    })
    .catch((error) => {
      console.error("Email sending failed.", error);
    });
}
