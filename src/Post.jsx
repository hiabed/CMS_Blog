import "./Post.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Don't forget to import the styles!

const Post = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const pictureFile = e.target.picture.files[0];
    formData.append('picture', pictureFile);
    formData.append('email', e.target.email.value);
    formData.append('message', e.target.message.value);

    // In a real application, you would send this formData to your server
    console.log('Form Data:', formData.get('picture'), formData.get('email'), formData.get('message'));
    alert('Form submitted (check console for data)');
  };

  return (
    <div id="Contact" style={{ position: "relative" }}>
      <h1 className="about" style={{ width: 367 }}>
        ARTICLE
      </h1>
      <p>
        you can add your thoughts and ideas here, and interact with the community.
      </p>
      <div className="separator" style={{marginTop: 0}}></div>
      <form id="contact-form" onSubmit={handleSubmit}>
         <label htmlFor="picture" className="upload-label">
           Add a picture
         </label>
         <input
           type="file"
           name="picture"
           id="picture"
           accept="image/*"
           onChange={handleFileChange}
           className="upload-input"
         />
         {selectedImage && (
           <div className="image-preview-container">
             <img src={selectedImage} alt="Preview" className="image-preview" />
           </div>
         )}
        <label htmlFor="title" className="sr-only">
          Email
        </label>
        <input
          type="text"
          name="title"
          id="email"
          placeholder="Post Title*"
          required
        />
        <label htmlFor="message" className="sr-only">
          message
        </label>
        <input name="message" id="message" placeholder="YOUR MESSAGE*" required />
        <input id="submit" type="submit" value="Submit" />
      </form>
      
      {/* Toast Container - This will render all the toast notifications */}
      <ToastContainer position="bottom-right" autoClose={5000} />
    </div>
  );
};

export default Post;
