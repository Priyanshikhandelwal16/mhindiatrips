async function testCloudinaryUpload() {
  try {
    const imageUrl = "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1080&auto=format&fit=crop&q=80"; // standard unsplash image
    const formData = new FormData();
    formData.append("file", imageUrl);
    formData.append("upload_preset", "mhindiatrips");
    formData.append("folder", "mhindiatrips");

    console.log("Uploading to Cloudinary...");
    const res = await fetch("https://api.cloudinary.com/v1_1/irrjgm1b/image/upload", {
      method: "POST",
      body: formData
    });
    console.log("Status:", res.status);
    const data = await res.json();
    console.log("Response:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}

testCloudinaryUpload();
