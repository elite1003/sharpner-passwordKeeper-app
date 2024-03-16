const formSubmitHandler = (event) => {
  event.preventDefault();
  const title = event.target.title.value;
  const password = event.target.password.value;
  addElementToUl({ title, password });
  event.target.title.value = "";
  event.target.password.value = "";
};

const deleteListItem = (event) => {
  const listItem = event.target.parentNode;
  if (listItem && listItem.parentNode) {
    listItem.parentNode.removeChild(listItem);
    const totalPassword = document.getElementById("totalPassword");
    totalPassword.textContent = +totalPassword.textContent - 1;
  }
};
const editListItem = (event) => {
  const titlePasswordForm = document.getElementById("titlePasswordForm");
  const listItem = event.target.closest("li");
  const [title, password] = listItem.textContent.split("\u200B");
  titlePasswordForm.title.value = title;
  titlePasswordForm.password.value = password;
  deleteListItem(event);
};

const addElementToUl = (item) => {
  const passwordList = document.getElementById("passwordList");
  const listElement = document.createElement("li");
  listElement.innerHTML = `${item.title} \u200B ${item.password} \u200B<button type="button" onclick="deleteListItem(event)">Delete</button> <button type="button" onclick="editListItem(event)">Edit</button>`;
  passwordList.appendChild(listElement);
  const totalPassword = document.getElementById("totalPassword");
  totalPassword.textContent = +totalPassword.textContent + 1;
};

const searchAndHide = (searchString) => {
  const ulElement = document.getElementById("passwordList");
  const liElements = ulElement.getElementsByTagName("li");

  for (const li of liElements) {
    const text = li.textContent.toLowerCase();
    if (text.includes(searchString.toLowerCase())) {
      li.style.display = "";
    } else {
      li.style.display = "none";
    }
  }
};

const searchPasswordHandler = (event) => {
  const searchString = event.target.value.trim();
  searchAndHide(searchString);
};
