import React from "react";

export default function CardForQuiz(props) {
  return (
    <div className="card-for-quiz">
      <h1>Quiz App in a Day</h1>
      <p>
        During a{" "}
        <a href="https://schoolofcode.co.uk/" style={{ color: "#ff6d80" }}>
          School of code{" "}
        </a>{" "}
        workshop, Our team of three cohorts Tristan, Nich and myself
        successfully completed the Fetch Hackathon project, working
        collaboratively and efficiently under a tight deadline. In just one day,
        we were able to deliver a functional application.<br></br>
        We started by exploring different APIs, sending requests, and
        familiarising ourselves with the data they provided. After breaking down
        the problem into smaller tasks, we began building our application, using
        JavaScript and the DOM.<br></br>
        We used pair programming techniques, supporting ideas and work-flow.
        This collaborative approach allowed us to overcome challenges and
        deliver a high-quality solution.<br></br>
        In conclusion, the Fetch Hackathon project was a successful
        demonstration of our teamwork, problem-solving abilities, and
        proficiency in API integration.
      </p>
    </div>
  );
}
