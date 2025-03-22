const button = document.querySelector(".btn-image");
const image = document.querySelector(".img-cat");
const errorMessage = document.querySelector(".error-message");
const url = "https://api.thecatapi.com/v1/images/search";

const fetchHandler = async () => {
  try {
    if (!image) return;
    if (errorMessage) {
      errorMessage.textContent = "";
    }

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);

    }
    const data = await response.json();

    image.src = data[0].url;
  } catch (error) {
    console.log("Ошибка загрузки изображения", error);
    image.src = "../image/placeholder.gif";

    if (errorMessage) {
      errorMessage.textContent = "Не удалось загрузить картинку 😿";
    }
  }
};

if (button && image) {
  button.addEventListener("click", () => {
    if (image.complete) {
      fetchHandler();
    }
  });
}
fetchHandler();
