useParams extracts dynamic values from the current URL. It returns an object of key/value pairs, allowing you to easily read parameters like IDs and render specific data.
useNavigate programmatically redirects users to a different URL. It provides a function that you call inside event handlers to change pages dynamically.
THey both are available in react-router-dom

The find() method in JavaScript iterates through an array and returns the first element that matches your specific condition. If no match is found, it returns undefined.


Tailwind css setup ----->>>>>

npm i tailwindcss @tailwindcss/vite


add in vite.config -->
import tailwindcss from '@tailwindcss/vite'

add in plugins in vite in config-->
tailwindcss(),


import tailwind css in index.css/main / most frontal css file -->
@import "tailwindcss"; 
( make sure that index.css is added in main.jsx or the main react file )