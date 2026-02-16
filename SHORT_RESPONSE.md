# Short Response Questions

Answer each of these questions completely but concisely. Use the proper technical terminology. You may refer to the [Marcy Lab School Docs](https://marcylabschool.gitbook.io/marcy-lab-school-docs) or Google but do NOT copy and paste definitions or explanations verbatim.

You can earn up to 6 points for each response (3 points for writing quality, 3 points for technical content).

Before submitting your responses, use a spell checker / AI to ensure that you have no grammar or spelling mistakes.

## Question 1: Asynchronous Code

Functions like `fetch()` are "asynchronous". Explain what that means and why it is so important to be able to execute code asynchronously?

**Your Answer:**

Instead of blocking the program, **asynchronous code** allows the program to **keep running** while waiting for the response. Once the task finishes, the result is handled using `.then()` or `await`.

This is important because many operations like **API requests**, file loading, or database queries take time. If JavaScript executed these synchronously, the entire application would freeze until the operation finished, creating a poor user experience. Asynchronous execution keeps applications responsive, allows users to interact with the UI while data loads, and improves overall performance.

## Question 2: GET vs. POST

What is the difference between a `GET` request and a `POST` request? Provide examples in real world applications where each might be used under the hood?

**Your Answer:**

A `GET` request is used to **retrieve data** from a server. It does not change anything on the server and is mainly used for reading information.

Real-world uses of `GET`:

- Loading a user profile on Instagram

- Searching for products on Amazon

- Loading posts on a social media feed

A `POST` request is used to send data to a server to create or update something. It changes the server’s data.

Real-world uses of `POST`:

- Creating a new account on a website

- Submitting a login form

- Posting a comment on YouTube

## Question 3: What is Vite and Why Use It?

What is Vite? What problem does it solve? And are there alternatives?

**Your Answer:**

Vite is a build tool that aims to provide a **faster** and **leaner** development experience for modern web projects. Vite solves the problem of slow development servers and configuration complexity. It allows developers to use modern JavaScript features like ES modules, and it reloads changes instantly, which improves **development speed** and **productivity**.

It also solves issues with running projects locally, such as `CORS` errors when opening files directly with `file://`, by providing a proper development server.

Alternatives to Vite:

- Webpack

- Parcel

- Create React App

- Next.js

- Snowpack

Vite is popular because it is faster, simpler to configure, and provides a better developer experience compared to older tools like Webpack.
