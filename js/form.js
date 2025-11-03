document.getElementById("contact-form").addEventListener("click", async function(event) {
  event.preventDefault(); // Impede o clique do link de recarregar a página

  // Captura os valores dos campos
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const phone = document.getElementById("phone").value.trim();

  
  const url = "https://n8n.loto3.vsilva.tec.br/webhook/44082d30-47ee-4efa-aaba-635e1f2f5e08";

  try {
    // Faz o POST
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message, phone })
    });

    console.log("Response:", response);
    
  } catch (error) {
    console.error("Erro:", error);
  }
});

