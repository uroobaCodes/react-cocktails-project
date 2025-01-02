# 🔍 Learning About React Router and ContextAPI 
In this project I learned about react router. They are using the older version of react router and I used V7. SO, the syantax is exteremely different. I found a youtube course for the advanced version and had to learn the syntax from that course. This is the website for this project: [Cocktails React Project](https://reactproject-cocktailsdb.netlify.app/)


# 📜 Key Learning Points:

**1- Router Provider** I previously wrapped the Router Provider in a <Final/> component. But I could simply provide the Router Provider to the <App/> component. THis will give the router entry into the component tree and by giving the {router} to the Provider, it will also consume the router. By adding the Router Provider at the top of the component tree, all our components will be able to access the router. V7 syntax has made this extremely simple!  


**2- Paths and Components** I thought If we need to use components like <NavLink/> from React Router, we had to wrap the component in the Router Provider in <App/>. I later learning that this was not neccessary and I can simply include the components in router and easily use Router's components in my app's components. 

**2- translateZ() Property** This was an exciting discovery. I came across translateZ property while working on the loader and found out it is a trick. Animations, especially in older browsers, can become choppy. We can use translateZ property  which is a 3D property. Instead of CPU, the animation will now be loading via the hardware's GPU and as a result will be smoother. It is a css trick used for modals or loaders etc. 

**3- Uncontrolled Components & useRef** In this project we used useRef for uncontrolled components. Then I also wrote the code with controlled components just to learn the difference. 

**4- Unintended Behaviour** We added focus() to the input field and because of that, if we hit enter while the input was empty, the app was re-loading. I have both controlled and uncontrolled forms. So, for uncontrolled inputs, we added a handleSUbmit function to the <form> element and simply add e.preventDefault(). However, When I have had the submit button in controlled input, I needed a gaurd clause as well which checked if the input field was empty, and simply return out of the funciton. 

**5- Unintended Behaviour** The practice of using useEffect and useCallback came in handy. We couldn't simply add the fetch function to useEffect's dependency otherwise it will start an infinite loop, we first needed to memoiz the function with useCallback. We also added the searchTerm state in the useCallback so that the fucntion could easily fetch and not form a closure over the initial searchTerm 'a'. 

### 🔮 Future Learning
This project took me closer to building a bigger project next (the ecommerce project). I need more practice with understanding the structure of components. I also need to understand when to add javascript functions and how to write them to get the desired funcitonality in the app. 

### 😊 Contact me
If you have any suggestions or want to share knowledge about React hooks, feel free to reach out!

🌟 GitHub: uroobaCodes 🌟 Email: urooba.codes@gmail.com
