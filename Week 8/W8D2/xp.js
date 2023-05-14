const form = document.querySelector('#my-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from actually submitting

    const formData = new FormData(form); // create a new FormData object from the form

    const params = new URLSearchParams(formData); // create URLSearchParams object from formData

    // perform a GET request with the form data as query parameters
    fetch(`?${params.toString()}`, {
      method: 'GET',
    })
    .then(response => {
      // handle the response
    })
    .catch(error => {
      // handle the error
    });
  });




  const form = document.querySelector('#my-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from actually submitting

    const formData = new FormData(form); // create a new FormData object from the form

    const params = new URLSearchParams(formData); // create URLSearchParams object from formData

    // perform a POST request with the form data as query parameters
    fetch(`?${params.toString()}`, {
      method: 'POST',
    })
    .then(response => {
      // handle the response
    })
    .catch(error => {
      // handle the error
    });
  });


  // Exercise 3 : JSON Mario
  const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }


  const marioGameJSON = JSON.stringify(marioGame);
