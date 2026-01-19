//image management API
const BASE_URL = "http://localhost:5000/api/images";

/* ✅ Fetch images by type + page + section */
export const fetchImages = async (
  type: string,
  page: string,
  section: string
) => {
  let url = "";

if (type === "landingpage" && section === "services") {
  url = `${BASE_URL}/landing/services`;
}
else if (type === "landingpage") {
  url = `${BASE_URL}/page/${section}`;
}
else if (type === "services") {
  url = `${BASE_URL}/services/${page.toLowerCase()}/${section}`;
}


  console.log("📡 Fetching:", url); // ✅ Debug

  const res = await fetch(url);
  return res.json();
};

/* ✅ Delete */
export const deleteImage = async (id: string) => {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
};



export const uploadImage = async (formData: FormData) => {
  const res = await fetch(`${BASE_URL}/upload`, {
    method: "POST",
    body: formData,
  });
  return res.json();
};

