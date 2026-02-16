document.addEventListener("DOMContentLoaded", () => {
  // select the elements
  const dropZone = document.getElementById("dropZone");
  const fileInput = document.getElementById("fileInput");
  const selectButton = document.getElementById("selectButton");
  const originalImage = document.getElementById("originalImage");
  const processedImage = document.getElementById("processedImage");
  const removeBackgroundBtn = document.getElementById("removeBackground");
  const downloadBtn = document.getElementById("download");
  const loading = document.querySelector(".loading");
  // Hide the loading
  loading.style.display = "none";
  //! Drag and drop feature
  //? 1. dragover
  dropZone.addEventListener("dragover", (e) => {
    // prevent the image preview
    e.preventDefault();
    dropZone.classList.add("dragover");
  });
  //? 2. dragleave
  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragover");
  });
  //? 3. drop
  dropZone.addEventListener("drop", (e) => {
    // prevent the image preview
    e.preventDefault();
    dropZone.classList.remove("dragover");
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      //Handle upload here
      handleImageUpload(file);
    }
  });

  // click to upload
  selectButton.addEventListener("click", () => {
    fileInput.click();
  });
  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageUpload(file);
    }
  });

  // Handle upload here
  function handleImageUpload(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      originalImage.src = e.target.result;
      originalImage.hidden = false;
      processedImage.hidden = true;
      removeBackgroundBtn.disabled = false;
      downloadBtn.disabled = true;
    };
    reader.readAsDataURL(file);
  }

  // removeBackgroundBtn
  removeBackgroundBtn.addEventListener("click", async () => {
    // show loading
    loading.style.display = "flex";
    try {
      // formdata
      const formdata = new FormData();
      // blob
      const blob = await fetch(originalImage.src).then((r) => r.blob());
      formdata.append("source_image_file", blob);
      // api: https://api.slazzer.com/v2.0/remove_image_background
      const apiKey = "Your API Key";
      const response = await fetch(
        "https://api.slazzer.com/v2.0/remove_image_background",
        {
          method: "POST",
          headers: {
            "API-KEY": apiKey,
          },
          body: formdata,
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error ${response.status}: ${errorText}`);
      }

      const blob_response = await response.blob();
      const url = URL.createObjectURL(blob_response);
      processedImage.src = url;
      processedImage.hidden = false;
      downloadBtn.disabled = false;
    } catch (error) {
      console.error(error);
      removeBackgroundBtn.disabled = false;
      alert("Something went wrong. Please try again.");
    } finally {
      //hide the loading
      loading.style.display = "none";
    }
  });
  downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = processedImage.src;
    link.download = "processed_img.png";
    link.click();
  });
});
