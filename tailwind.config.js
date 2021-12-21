module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeDesktop:
          "url('/src/assets/assets/home/background-home-desktop.jpg')",
        homeTablet: "url('/src/assets/assets/home/background-home-tablet.jpg')",
        homeMobile: "url('/src/assets/assets/home/background-home-mobile.jpg')",
        destinationDesktop:
          "url('/src/assets/assets/destination/background-destination-desktop.jpg')",
        destinationMobile:
          "url('/src/assets/assets/destination/background-destination-mobile.jpg')",
        destinationTablet:
          "url('/src/assets/assets/destination/background-destination-tablet.jpg')",
        crewDesktop:
          "url('/src/assets/assets/crew/background-crew-desktop.jpg')",
        crewMobile: "url('/src/assets/assets/crew/background-crew-mobile.jpg')",
        crewTablet: "url('/src/assets/assets/crew/background-crew-tablet.jpg')",
      },
    },
  },
  plugins: [],
};
