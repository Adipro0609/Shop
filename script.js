
"use strict";

const DISCORD_URL =
  "https://discord.com/users/1525941505691353195";

document.addEventListener("DOMContentLoaded", () => {
  // Update footer year
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Home, Stats, Shop and Contact navigation
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const id = link.getAttribute("href").slice(1);
      const section = document.getElementById(id);

      if (section) {
        event.preventDefault();
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        history.replaceState(null, "", "#" + id);
      }
    });
  });

  // Buy buttons: show selected product and scroll to Contact
  document.querySelectorAll(".buy-button").forEach(button => {
    button.addEventListener("click", () => {
      const name = button.dataset.product;
      const price = button.dataset.price;

      if (!name || !price) {
        console.error("Missing product name or price.");
        return;
      }

      const title = document.getElementById("contact-title");
      const description =
        document.getElementById("contact-description");
      const selection =
        document.getElementById("selected-product");
      const discord =
        document.getElementById("discord-link");
      const contact = document.getElementById("contact");

      if (!title || !description || !selection ||
          !discord || !contact) {
        console.error("Contact section elements are missing.");
        return;
      }

      title.textContent = "Buy " + name;
      description.textContent =
        "You selected " + name +
        ". Contact me on Discord to discuss availability and payment.";
      selection.textContent =
        "Selected item: " + name + " — " + price;

      discord.href = DISCORD_URL;

      contact.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      history.replaceState(null, "", "#contact");
    });
  });

  // Make the Discord contact button work
  const discordLink = document.getElementById("discord-link");

  if (discordLink) {
    discordLink.href = DISCORD_URL;
  }

  console.log("WE1RD website JavaScript loaded!");
});
