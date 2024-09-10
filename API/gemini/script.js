const typingForm = document.querySelector(".typing-form");
const chatList = document.querySelector(".chat-list");
const toggleTheme = document.querySelector("#toggle-theme")
const deleteButtton = document.querySelector("#delete")
const micButton = document.getElementById("audioToText")

let userMessage = null;

const API_KEY = "AIzaSyDNvesCy1LVNtbuBTDqoqpKEedaj2vwzSM"

const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`

const createMessageElement = (content , ...classes) => {
    const div = document.createElement("div");
    div.classList.add("message", ...classes);
    div.innerHTML = content;
    return div;
}

const generateAPIResponse = async (incomingMessageDiv) => {
    const textElement = incomingMessageDiv.querySelector(".text")
    try {
        let response = await fetch(API_URL, {
            method: "POST",
            headers : { "Content-Type" : "application/json" },
            body: JSON.stringify({
                contents: [
                    {
                        role: "user",
                        parts : [{text : userMessage}]
                    }
                ]
            })
        });

        let data = await response.json();
        const apiResponse = data?.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1');
        console.log(apiResponse);
        
        // Display the response with typing effect
        showTypingEffect(apiResponse, textElement);

        // Convert the response text to speech
        textToSpeech(apiResponse);

    } catch (error) {
        console.log(error);
    } finally {
        incomingMessageDiv.classList.remove("loading")
    }
}

const localStorageData = () =>{
    const savedChats = localStorage.getItem("savedChats");
    chatList.innerHTML = savedChats || " ";
    document.body.classList.toggle("hide-header", savedChats)
    chatList.scrollTo(0 , chatList.scrollHeight)
}

const showTypingEffect = (text, textElement) => {
    const words = text.split(' ');
    let currentWordIndex = 0;

    const typingInterval = setInterval(() => {
        textElement.innerText += (currentWordIndex === 0 ? ' ' : ' ') + words[currentWordIndex++];

        if (currentWordIndex === words.length) {
            clearInterval(typingInterval);
            chatList.scrollTo(0 , chatList.scrollHeight)
        }
        localStorage.setItem("savedChats", chatList.innerHTML);
    }, 75);
}

const showLoadingAnimation = ()=>{
    const html = ` <div class="message-content">
          <img src="" alt="gemini" class="avatar" />
          <p class="text"></p>
          <div class="loading-indicator">
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
          </div>
        </div>
        <span onclick="copyMessage(this)" class="icon material-symbols-outlined"> content_copy </span>`;
    const incomingMessageDiv = createMessageElement(html , "incoming" , "loading");
    chatList.appendChild(incomingMessageDiv);
    chatList.scrollTo(0 , chatList.scrollHeight);
    generateAPIResponse(incomingMessageDiv);
}

const handleOutgoingChat = () => {
    userMessage = typingForm.querySelector(".typing-input").value.trim();
    if (!userMessage) return;

    const html = ` <div class="message-content">
          <img src="" alt="user" class="avatar" />
          <p class="text"></p>
        </div> `

    const outgoingMessageDiv = createMessageElement(html, "outgoing");
    outgoingMessageDiv.querySelector(".text").innerText = userMessage;
    chatList.appendChild(outgoingMessageDiv);

    typingForm.reset();
    chatList.scrollTo(0 , chatList.scrollHeight);
    document.body.classList.add("hide-header")
    setTimeout(showLoadingAnimation, 500);
}

// Toggle theme
toggleTheme.addEventListener("click", () => {
   const isLightMode =  document.body.classList.toggle("light-mode");
   toggleTheme.innerText = isLightMode ? "dark_mode" : "light_mode";
})

typingForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    handleOutgoingChat();
});

const copyMessage = (copyIcon) => {
    const messageText = copyIcon.parentElement.querySelector(".text").innerText;
    navigator.clipboard.writeText(messageText);
    copyIcon.innerText = "done";
    setTimeout(() => copyIcon.innerText = "content_copy", 1000);
}

// Delete all messages
deleteButtton.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete all messages?")) {
        localStorage.removeItem("savedChats");
        localStorageData();
    }
})

// Speech-to-Text function
const startSpeechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.onstart = () => {
        console.log("Voice recognition started...");
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.querySelector(".typing-input").value = transcript;
    };

    recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
    };

    recognition.start();
}

// Text-to-Speech function
const textToSpeech = (text) => {
    const speechSynthesis = window.speechSynthesis;
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speechSynthesis.speak(speech);
}

// Trigger Speech-to-Text on mic button click
micButton.addEventListener("click", () => {
    startSpeechRecognition();
});
