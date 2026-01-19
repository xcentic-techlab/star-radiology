const API = import.meta.env.VITE_API_URL;
export const fetchImages = async (
  type: string,
  page: string,
  section: string
) => {
  let url = "";

if (type === "landingpage" && section === "services") {
  url = `${API}/landing/services`;
}
else if (type === "landingpage") {
  url = `${API}/page/${section}`;
}
else if (type === "services") {
  url = `${API}/services/${page.toLowerCase()}/${section}`;
}

  const res = await fetch(url);
  return res.json();
};

export const deleteImage = async (id: string) => {
  await fetch(`${API}/${id}`, { method: "DELETE" });
};



export const uploadImage = async (formData: FormData) => {
  const res = await fetch(`${API}/upload`, {
    method: "POST",
    body: formData,
  });
  return res.json();
};

