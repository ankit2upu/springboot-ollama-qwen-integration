# 🤖 Spring AI + Ollama (Qwen) Chat API

This project demonstrates how to build an AI-powered backend using **Spring AI** in a Spring Boot application. It integrates with a locally running LLM via Ollama and uses the Qwen model to generate intelligent responses.

## 🌐 Live Demo

Check out the running application here:
[🚀 Try the Live Demo](https://springboot-ollama-qwen-integration.onrender.com/)

## 🚀 Features

* Built with Spring Boot and **Spring AI**
* Uses ChatClient for AI interaction
* Integration with Ollama (local LLM runtime)
* Qwen model for response generation
* REST API for chat-based queries
* No external API dependency (runs locally)

## 🛠️ Tech Stack

* Java
* Spring Boot
* Spring AI
* Ollama
* Qwen LLM

## 🧠 How It Works

Spring AI provides the `ChatClient` abstraction, which simplifies communication with LLMs.
The application sends user prompts to Ollama, which runs the Qwen model locally and returns generated responses.

## ⚙️ Setup Instructions

### 1. Run Ollama with Qwen

```bash
ollama run qwen
```

### 2. Start the Application

```bash
mvn spring-boot:run
```

## 📡 API Endpoint

### GET /chat?q=your_prompt

Example:

```bash
curl "http://localhost:8080/chat?q=What is Spring Boot?"
```

## ⚙️ Configuration

```properties
spring.ai.ollama.base-url=http://localhost:11434
spring.ai.ollama.chat.model=qwen:latest
```

## 💡 Future Improvements

* Add POST API with request body
* Implement chat memory (conversation context)
* Streaming responses
* Frontend UI integration
* Docker support

## 🎯 Learning Outcome

This project highlights how **Spring AI simplifies LLM integration** in Java applications by providing a clean abstraction over model communication, making it easy to build AI-powered services.
