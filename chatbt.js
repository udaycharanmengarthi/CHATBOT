let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You", "Have a Nice Day"];

let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");

function sendMsgToChatBox() {
    let userMsg = userInputEl.value;
    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-to-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);

    let userMsgEl = document.createElement("span");
    userMsgEl.textContent = userMsg;
    userMsgEl.classList.add("msg-to-chatbot");
    msgContainerEl.appendChild(userMsgEl);

    userInputEl.value = "";
    getReplyFromChatbot();

}

function getReplyFromChatbot() {
    let noOfChatbotMsgs = chatbotMsgList.length;
    let chatboxMsg = chatbotMsgList[Math.ceil(Math.random() * noOfChatbotMsgs) - 1];

    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-from-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);

    let chatbotMsgEl = document.createElement("span");
    chatbotMsgEl.textContent = chatboxMsg;
    chatbotMsgEl.classList.add("msg-from-chatbot");
    msgContainerEl.appendChild(chatbotMsgEl);
}