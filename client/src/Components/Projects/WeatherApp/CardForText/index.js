import React from "react";

export default function CardForText(props) {
  return (
    <div className="CardForText">
      <h1>Weather App in a day!</h1>
      <p>
        During a{" "}
        <a href="https://schoolofcode.co.uk/" style={{ color: "#ff6d80" }}>
          School of Code
        </a>{" "}
        workshop, I had the exciting opportunity to build a weather application
        with two other cohorts Max and Katie. The challenge was to complete the
        project within a day, time management was key. We we asked to build the
        app using TypeScript, I later converted it back to JavaScript to
        showcase it in my portfolio.
      </p>
      <p>
        The Weather App provides up-to-date weather information for any location
        around the world. It offers a simple and intuitive user interface,
        allowing users to search for a specific location and instantly retrieve
        the weather data. The app fetches real-time weather information from a
        reliable API.
      </p>
      <p>
        The app's main features include:
      </p>
      <h3>1. Search Functionality:</h3>
      <p>
        Users can enter the name of any city or location to retrieve the current
        weather conditions for that area. The app dynamically updates the displayed
        information as soon as the search is executed.
      </p>
      <h3>2. Weather Details:</h3>
      <p>
        The Weather App provides detailed information about the temperature, weather
        description, perceived temperature (feels like), maximum and minimum temperatures,
        wind speed, and humidity. These details help users get a comprehensive
        understanding of the current weather conditions.
      </p>
      <h3>3. Icon Representation:</h3>
      <p>
        To enhance the user experience, the app visually represents the weather
        conditions using intuitive icons. Whether it's a sunny day, rainy weather,
        or cloudy skies, the corresponding icon provides a quick and easily recognisable
        representation.
      </p>
      <p>
        Building this Weather App within such a tight timeframe challenged my
        problem-solving skills and ability to prioritise tasks effectively. It
        required careful planning, efficient code organisation, and quick
        decision-making. Despite the time constraints, I was able to deliver a
        functional and visually appealing application that meets the core
        requirements of a weather forecasting tool.
      </p>
    </div>
  );
}
