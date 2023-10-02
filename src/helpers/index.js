import { getBebidas, getInvitados } from "./actions";

export const fetchBebidas = async () => {
  try {
    const { data } = await getBebidas();

    return data;
  } catch (error) {
    console.error("Error al cargar invitados:", error);
  }
};

export const fetchInvitados = async () => {
  try {
    const { data } = await getInvitados();
    const newArray = data.map(({ id, name, assist, bebida, music }) => ({
      id,
      name,
      assist,
      music,
      bebida,
    }));

    newArray.sort((a, b) => a.name.localeCompare(b.name));
    return newArray;
  } catch (error) {
    console.error("Error al cargar invitados:", error);
  }
};

// Función para verificar si existen tres claves específicas en el localStorage
export function verificarDatosEspecificos() {
  const invitados = localStorage.getItem("Invitado");
  const bebidas = localStorage.getItem("Bebidas");
  const musica = localStorage.getItem("Musica");

  if (invitados !== null && bebidas !== null && musica !== null) {
    // Los tres datos específicos existen en el localStorage
    // Puedes hacer algo aquí, como mostrar un modal
    console.log("Todos los datos específicos existen en el localStorage");
    return true;
  } else {
    // Al menos una de las claves no existe, espera un tiempo antes de volver a verificar
    setTimeout(verificarDatosEspecificos, 1000); // Espera 1 segundo antes de verificar nuevamente
  }
}
