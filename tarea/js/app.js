async function mostrarPosts() {
    const lista = document.querySelector("#posts");
    try {
      // 1. Petición a la URL de publicaciones del usuario 1
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
      if (!res.ok) throw new Error("No se pudo obtener la respuesta");
  
      // 2. Convertir la respuesta a JSON
      const posts = await res.json();
  
      // 3. Mostrar los títulos en la lista
      lista.innerHTML = posts
        .map(post => `<li>${post.title}</li>`)
        .join("");
  
    } catch (error) {
      // 4. Mostrar mensaje de error si la petición falla
      lista.innerHTML = "<li>No se pudo cargar la información</li>";
    }
  }
  
  mostrarPosts();
