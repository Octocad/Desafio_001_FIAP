document.getElementById("groupForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Capturando os valores do formulário
    const data = {
        name1: document.getElementById("name1").value,
        name2: document.getElementById("name2").value,
        name3: document.getElementById("name3").value,
        name4: document.getElementById("name4").value,
        name5: document.getElementById("name5").value,
        history: document.getElementById("history").value
    };

    try {
        const response = await fetch("https://seu-endpoint-aqui.com/api/grupo", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert("Dados enviados com sucesso!");
            document.getElementById("groupForm").reset();
        } else {
            alert("Erro ao enviar os dados.");
        }
    } catch (error) {
        console.error("Erro:", error);
        alert("Erro ao conectar ao servidor.");
    }
});