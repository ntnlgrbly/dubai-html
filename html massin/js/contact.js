window.onload = function () {
  declareEvents();
}
function declareEvents() {
  let form = document.querySelector("#id_form");
  let passInp = document.querySelector("#id_pass")
  let checkPass = document.querySelector("#id_checkPass");
  passInp.addEventListener("input", function (e) {
    let password_val = document.querySelector("#id_pass").value;
    e.preventDefault();
    if (password_val.length < 2) {
      checkPass.innerHTML = "weak";

    }
    else if (password_val.length < 6 && password_val.length >= 2) {
      checkPass.innerHTML = "Meduim";
    }
    else {
      checkPass.innerHTML = "strong";
    }
  }

  )
  form.addEventListener("submit", function (e) {
    let name_val = document.querySelector("#name").value;
    let phone_val = document.querySelector("#phone").value;
    let email_val = document.querySelector("#email").value;
    let email2_val = document.querySelector("#email2").value;
    let password_val = document.querySelector("#id_pass").value;
    e.preventDefault();

    if (name_val < 2) {
      return alert("Name too short");
    }
    else if (phone_val < 9) {
      return alert("phone too short");
    }
    else if (!email_val.includes("@") || !email_val.includes(".")) {
      return alert("Enter valid Email")
    }
    else if (email_val !== email2_val) {
      return alert("Email not equl to email2")
    }
    else if (password_val < 2) {
      return alert("Password too short!");
    }
    window.location.replace("https://www.getyourguide.com/-l173/-tc1/?cmp=ga&cq_src=google_ads&cq_cmp=12233358188&cq_con=120222015787&cq_term=%D7%9E%D7%93%D7%A8%D7%99%D7%9A%20%D7%98%D7%99%D7%95%D7%9C%D7%99%D7%9D%20%D7%91%D7%93%D7%95%D7%91%D7%90%D7%99&cq_med=&cq_plac=&cq_net=g&cq_pos=&cq_plt=gp&campaign_id=12233358188&adgroup_id=120222015787&target_id=kwd-1351455996712&loc_physical_ms=20514&match_type=e&ad_id=586528528514&keyword=%D7%9E%D7%93%D7%A8%D7%99%D7%9A%20%D7%98%D7%99%D7%95%D7%9C%D7%99%D7%9D%20%D7%91%D7%93%D7%95%D7%91%D7%90%D7%99&ad_position=&feed_item_id=&placement=&device=c&partner_id=CD951&gclid=CjwKCAjwx7GYBhB7EiwA0d8oexYIP7qAY1hP6rKvF69Rp13TJ93S1kmlWPJOseV5bHoeb7R7ZoMN6BoCspoQAvD_BwE");

  })

}