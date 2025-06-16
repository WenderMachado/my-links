const root = document.documentElement
const btn = document.getElementById('switchBtn')
const profileImg = document.querySelector('#profile')
const headerLogo = document.querySelector('.logo')
const nameLogo = document.querySelector("#name")

function switchTheme() {
  const isDark = document.body.dataset.theme === "dark"

  if (isDark) {
    root.style.setProperty("--bg-color", "#f1f5f9")
    root.style.setProperty("--border-color", "#aaa")
    root.style.setProperty("--font-color", "#212529")
    root.style.setProperty("--primary-color", "#26834a")
    document.body.dataset.theme = "light"
    btn.textContent = "Dark"

    profileImg.src = "imgs/profile-back-and-white.jpg"
    headerLogo.src = "/simbol.svg"
    nameLogo.src = "/imgs/Namedark color.svg"
    
  } else {
    root.style.setProperty("--bg-color", "#212529")
    root.style.setProperty("--border-color", "#666")
    root.style.setProperty("--font-color", "#f1f5f9")
    root.style.setProperty("--primary-color", "#4dff91")
    document.body.dataset.theme = "dark"
    btn.textContent = "Light"

    
    profileImg.src = "imgs/profile.jpg"
    headerLogo.src = "/imgs/white-symbol.svg"
    nameLogo.src = "/imgs/NameWhiteColor.svg"

  }
}

btn.addEventListener('click', switchTheme)
