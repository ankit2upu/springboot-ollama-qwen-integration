async function sendMessage() {
        const input = document.getElementById("prompt");
        const chatBox = document.getElementById("chatBox");

        const userText = input.value.trim();
        if (!userText) return;

        const userMessage = document.createElement("div");
        userMessage.className = "message user";
        userMessage.textContent = `🧑: ${userText}`;
        chatBox.appendChild(userMessage);
        input.value = "";

        const aiMessage = document.createElement("div");
        aiMessage.className = "message ai";
        aiMessage.textContent = "🤖: Thinking...";
        chatBox.appendChild(aiMessage);
        chatBox.scrollTop = chatBox.scrollHeight;

        const response = await fetch(`/chat?q=${encodeURIComponent(userText)}`);
        const data = await response.text();

        aiMessage.textContent = `🤖: ${data}`;
        aiMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    function clearChat() {
        const chatBox = document.getElementById("chatBox");
        chatBox.innerHTML = "";
        chatBox.scrollTop = 0;
    }

    document.addEventListener("DOMContentLoaded", () => {
        const input = document.getElementById("prompt");
        input.addEventListener("keydown", (event) => {
            if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                sendMessage();
            }
        });

    });