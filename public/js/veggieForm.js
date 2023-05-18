const veggieForm = document.querySelector("#veggie-form");

const submit = async (e) => {
    e.preventDefault();
    // let li=document.createElement("li");
    // li.textContent=document.querySelector("#name-input").value + " : " + document.querySelector("#color-input").value;
    // document.querySelector(".veggielist").appendChild(li);
    const response = await fetch("/api/veggies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: document.querySelector("#name-input").value,
        color: document.querySelector("#color-input").value,
      }),
    });
    console.log(response);
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  };
  
  veggieForm.addEventListener("submit", submit);
  