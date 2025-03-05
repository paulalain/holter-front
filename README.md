# Holter Record Summary App - Front End

A normal heartbeat produces three entities on the ECG — a P wave, a QRS complex, a T wave.
[See Electrocardiography theory here.](https://en.wikipedia.org/wiki/Electrocardiography#Theory)

Identifying those entities in a signal is called delineation.
[Here are CSV of an algorithm output for a 24h ECG](https://cardiologs-public.s3.amazonaws.com/python-interview/record.csv)

Rows have the following fields:
   - Wave type: P, QRS, T or INV (invalid)
   - Wave onset: Start of the wave in ms
   - Wave offset: End of the wave in ms
    - Optionally, a list of wave tags

Write a simple application, including a web interface and an HTTP server with the following
functionalities:
- Providing the following measurements to a physician when a delineation file is uploaded on the app with a POST /delineation request:
    - The mean heart rate of the recording (Frequency at which QRS complexes appear).
    - The minimum and maximum heart rate, each with the time at which they happened.
- [BONUS QUESTION] Providing a possibility to set up the date and the time of the recording, as they are not included in the file. This should impact the date and the time seen in the measurements.

Cardiologs should be able to recover your work, understand it, trust it easily, maintain it, make changes to it, etc

---

## Solution

I decided to build a React app separate from the backend to improve maintainability. To speed up development, I chose Vite.js for its fast and lightweight dev server, along with Tailwind CSS to minimize the need for writing custom styles.

The app consists of a simple page with three components: a file upload component, an error display, and a result display.

---

## Results with the given file

---

## 📌 Requirements
- **Node v23.6.0**
- **npm 10.9.2**
- **Docker (optional, for containerized deployment)**

---

## 🔧 Installation & Running Locally

1️⃣ **Clone the repository**
```sh
git clone git@github.com:paulalain/holter-front.git
cd holter-front
```

2️⃣ **Install dependencies**
```sh
npm install
```

3️⃣ **Run the application**
```sh
npm run dev
```

The App will be available at **http://localhost:3000/**.
The app is configured to work with a local backend. Make sure it's running at **[http://127.0.0.1:80](http://127.0.0.1:80)**, or update the settings in **`.env.development`** accordingly.

---

## 🚀 Deployment with Docker

1️⃣ **Build the Docker image**
```sh
docker build -t holter-front .
```

2️⃣ **Run the Docker container**
```sh
docker run -p 5000:5000 holter-front
```

The App will be available at **http://localhost:5000**.

---

## 📜 License
This project is licensed under the MIT License.

