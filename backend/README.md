# ChatNest Backend

This is the backend for the ChatNest project, built with **FastAPI** (Python) and **MongoDB** for data storage. It is designed to handle user messages, timestamps, and conversation history, providing a robust API for chat applications.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Data Model](#data-model)
- [API Endpoints](#api-endpoints)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Running the Server](#running-the-server)
- [Development](#development)
- [License](#license)

---

## Features
- User message storage
- Timestamps for each message
- Conversation history retrieval
- Fast, async API with FastAPI
- MongoDB for flexible, scalable data storage

---

## Tech Stack
- **Backend Framework:** FastAPI (Python 3.8+)
- **Database:** MongoDB (local or cloud, e.g., MongoDB Atlas)
- **ODM:** Motor (async MongoDB driver for Python)

---

## Data Model

### Message
| Field           | Type      | Description                       |
|-----------------|-----------|-----------------------------------|
| `id`            | string    | Unique message ID                 |
| `user_id`       | string    | ID of the user who sent the msg   |
| `content`       | string    | Message text                      |
| `timestamp`     | datetime  | When the message was sent         |
| `conversation_id`| string   | (Optional) Conversation reference |

### Conversation (Optional)
| Field           | Type      | Description                       |
|-----------------|-----------|-----------------------------------|
| `id`            | string    | Unique conversation ID            |
| `user_ids`      | [string]  | Users in the conversation         |
| `messages`      | [Message] | List of messages                  |
| `created_at`    | datetime  | When the conversation started     |

---

## API Endpoints

### Message Endpoints
- `POST /messages/` — Send a new message
- `GET /messages/{conversation_id}` — Get all messages in a conversation

### Conversation Endpoints
- `POST /conversations/` — Create a new conversation
- `GET /conversations/{user_id}` — List all conversations for a user

---

## Setup & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/chatnest.git
cd chatnest/backend
```

### 2. Create a Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Set Up MongoDB
- **Local:** Install MongoDB and run it locally (default: `mongodb://localhost:27017`)
- **Cloud:** Use MongoDB Atlas and get your connection string

---

## Environment Variables
Create a `.env` file in the backend directory:
```
```

---

## Running the Server
```bash
uvicorn main:app --reload
```
- The API will be available at `http://localhost:8000`
- Interactive docs: `http://localhost:8000/docs`

---

## Development
- Use [FastAPI docs](https://fastapi.tiangolo.com/)
- Use [Motor docs](https://motor.readthedocs.io/en/stable/)
- Use [MongoDB docs](https://docs.mongodb.com/)

---

## License
MIT 
