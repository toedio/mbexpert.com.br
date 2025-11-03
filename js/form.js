document.getElementById("contact-form").addEventListener("click", async function(event) {
  event.preventDefault(); // Impede o clique do link de recarregar a página

  // Captura os valores dos campos
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const phone = document.getElementById("phone").value.trim();


   if (!name || !email || !message || !phone) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  
  const url = "https://n8n.loto3.vsilva.tec.br/webhook/44082d30-47ee-4efa-aaba-635e1f2f5e08";

  try {
    // Faz o POST
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message, phone })
    });

    console.log("Response:", response);
    if (response.ok) {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("phone").value = "";

        alert("Mensagem enviada com sucesso!");
        setTimeout(() => {
        location.reload();
      }, 1000);
    }
    
  } catch (error) {
    console.error("Erro:", error);
  }
});

