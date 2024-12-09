import { describe, test, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommentsPage from "../../../pages/CommentsPage";

afterEach(() => {
  cleanup();
});

describe("Test <CommentsPage />", () => {
  test("Debe renderizar el formulario correctamente", () => {
    // Arrange
    render(<CommentsPage />);

    const inputName = screen.getByPlaceholderText("Tu nombre");
    const inputEmail = screen.getByPlaceholderText("Tu correo");
    const inputPhone = screen.getByPlaceholderText("Tu teléfono");
    const inputComment = screen.getByPlaceholderText("Escribe tu comentario");
    const buttonSubmit = screen.getByRole("button", { name: /enviar/i });

    // Assert
    expect(inputName).toBeDefined();
    expect(inputName.getAttribute("type")).toBe("text");

    expect(inputEmail).toBeDefined();
    expect(inputEmail.getAttribute("type")).toBe("email");

    expect(inputPhone).toBeDefined();
    expect(inputPhone.getAttribute("type")).toBe("tel");

    expect(inputComment).toBeDefined();
    expect(inputComment.tagName).toBe("TEXTAREA");


    expect(buttonSubmit).toBeDefined();
    expect(buttonSubmit.getAttribute("type")).toBe("submit");
  });

  test("Debe permitir escribir en los campos y enviar el formulario", async () => {
    // Arrange
    render(<CommentsPage />);
    const user = userEvent.setup();

    const inputName = screen.getByPlaceholderText("Tu nombre");
    const inputEmail = screen.getByPlaceholderText("Tu correo");
    const inputPhone = screen.getByPlaceholderText("Tu teléfono");
    const inputComment = screen.getByPlaceholderText("Escribe tu comentario");
    const buttonSubmit = screen.getByRole("button", { name: /enviar/i });

    // Act
    await user.type(inputName, "Juan Pérez");
    await user.type(inputEmail, "juan.perez@correo.com");
    await user.type(inputPhone, "123456789");
    await user.type(inputComment, "Excelente producto, me encantó.");
    await user.click(buttonSubmit);

    // Assert
    expect(inputName.value).toBe("Juan Pérez");
    expect(inputEmail.value).toBe("juan.perez@correo.com");
    expect(inputPhone.value).toBe("123456789");
    expect(inputComment.value).toBe("Excelente producto, me encantó.");
  });
});
