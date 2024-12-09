import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";

const CommentsPage = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRating = (rate) => {
    setFormData({ ...formData, rating: rate });
  };

  const saveToLocalStorage = (data) => {
    // Recuperar los comentarios existentes del localStorage
    const existingComments = JSON.parse(localStorage.getItem("comments")) || [];
    // Agregar el nuevo comentario al array
    existingComments.push(data);
    // Guardar el array actualizado de comentarios en localStorage
    localStorage.setItem("comments", JSON.stringify(existingComments));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.comment &&
      formData.rating > 0
    ) {
      // Guardar el comentario en localStorage
      saveToLocalStorage(formData);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Tu comentario ha sido enviado!",
        showConfirmButton: false,
        timer: 1500,
      });

      // Limpiar el formulario
      setFormData({ name: "", email: "", phone: "", comment: "", rating: 0 });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, completa todos los campos y selecciona una calificación.",
      });
    }
  };

  return (
    <div>
      <h1>Deja tu Comentario</h1>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Tu nombre"
            required
          />
        </div>
        <div className="form-group">
          <label>Correo Electrónico:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Tu correo"
            required
          />
        </div>
        <div className="form-group">
          <label>Teléfono:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Tu teléfono"
            required
          />
        </div>
        <div className="form-group">
          <label>Comentario:</label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
            placeholder="Escribe tu comentario"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Calificación:</label>
          <Rating
            onClick={handleRating}
            initialValue={formData.rating}
            allowFraction
            size={30}
            fillColor="#FFD700"
            emptyColor="#CCCCCC"
             aria-label="Calificación"
          />
        </div>
        <button type="submit" className="submit-btn">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default CommentsPage;