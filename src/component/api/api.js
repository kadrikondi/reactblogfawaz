const apiUsers = "https://api.github.com/users";
const blogUrl = "https://jsonplaceholder.typicode.com/posts";

export const fetchUsers = async () => {
  const response = await fetch(apiUsers);
  return await response.json();
};

export const fetchPost = async () => {
  const response = await fetch(blogUrl);
  return await response.json();
};

export const fetchUser = async (id) => {
  const response = await fetch(`https://api.github.com/user/${id}`);
  return await response.json();
  // .then((data) => console.log(data));
};

export const fetchSinglePost = async (id) => {
  const response = await fetch(`${blogUrl}/${id}`);
  return await response.json();
  // const data = await response.json();
  // console.log(data);
};
