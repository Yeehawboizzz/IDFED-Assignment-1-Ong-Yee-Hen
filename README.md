# IDFED-Assignment-1-Ong-Yee-Hen
My project is to create a website for a fictional dance studio named Konfluenze Dance Studio.

KONFLUENZE DANCE STUDIO
Established in 2005, Konfluenze Dance Studio originated from a close-knit group of friends who shared a profound passion for street dance and its vibrant culture. We recognized the dearth of a robust street dance scene in Singapore during those early years. Undeterred, we seized every opportunity that came our way and, through battles, competitions, and showcases, evolved into a stronger and more expansive community.

The Konfluenze website serves as a dynamic platform, offering opportunities for both dancers and non-dancers alike. It is a safe space where individuals can pursue their dreams or simply revel in the joy of dance. We take pride in providing a diverse range of dance classes encompassing various genres. Each instructor is recognized for their expertise in a specific genre, ensuring a rich and authentic learning experience.

At Konfluenze, we believe in the power of diversity and the fusion of experiences. Our team includes foreign, experienced, and older generation instructors such as Mr. Wiggles and Greenteck, who bring a wealth of knowledge and authenticity to our studio. Through their guidance, students have the opportunity to delve deep into the true essence of street dance.

Whether you are looking to learn, improve, or simply have fun, Konfluenze invites you to join our community. Together, we strive to cultivate and support the vibrant street dance culture in Singapore.


# DESIGN PROCESS
The primary objective of our website is to extend dance classes to all. Our mission is to broaden the exposure of street dance culture and actively contribute to its flourishing community. At Konfluenze, we welcome individuals of all ages who are keen on exploring the world of dance, creating an inclusive space for anyone with a passion for movement.

Recognizing the lack of recognition for street dance within Singapore, our website has been strategically designed to bridge this gap. We have incorporated various dance-related elements, including captivating images from past events. These visual representations serve as a testament to our commitment, showcasing the energy, skill, and vibrancy that define the street dance culture. By providing a glimpse into our dynamic and engaging activities, we aim to instill trust, faith, and ultimately gain the recognition of the wider community.

Through these efforts, we aspire to not only impart dance skills but also foster a sense of community and appreciation for street dance. Konfluenze stands as a welcoming hub where individuals of diverse backgrounds can come together, learn, and contribute to the ever-evolving tapestry of street dance in Singapore. Join us on this exciting journey of discovery, expression, and collective growth.


Non-dancers:

The website is intentionally crafted with straightforward language to ensure easy navigation for users without prior dance experience. All essential features are prominently displayed on the main navigation bar, streamlining the user experience and minimizing complexity. Users can effortlessly explore different sections of the website to understand its offerings without feeling overwhelmed.

Seasoned Dancers:

A simplified purchase process allows seasoned dancers, who are clear about their goals, to efficiently book classes directly on the website. The booking system is user-friendly, eliminating the need for users to download additional apps or navigate through complex steps. The focus is on providing a seamless and efficient experience for dancers who are familiar with the booking process and are ready to engage with our classes.

All Users:

Regardless of their dance background, users can access information about the studio's history, past events, and the expertise of our instructors. Contact details are easily accessible, encouraging communication and fostering a sense of connection between the studio and its community. By offering a glimpse into our past events, the website aims to showcase the vibrancy and energy that defines Konfluenze Dance Studio, creating a welcoming space for all users. Through these tailored features, the website aims to cater to the diverse needs of both novice and experienced dancers, fostering inclusivity and providing a positive online experience for all users.


# FEATURES
The Javascript features are concentrated in the Dance Classes.html and Booking.html, where all the forms submission works. There is also an interactive function in the OurSpace.html, where user can see the instructors' name and genre.  

**Dance Classes.html**:

Calendar:
Allows users to select specific dates they wish to book classes. Dynamically updates the available classes based on the chosen date, providing a personalized and responsive experience.

Chosen Class:
Enables users to pick a class, initiating a smooth transition to the Booking.html page. Passes relevant details about the chosen class to Booking.html, ensuring a seamless continuation of the booking process.

Membership Signup:
Provides users with the option to sign up as a member directly from the Dance Classes page. Validates user input in the signup form and generates a promo code for first-timers. Offers a streamlined process for users to become members while incentivizing their initial engagement with a promotional offer.

**Booking.html**:

Display Chosen Class:
Clearly displays the details of the dance class chosen by the user at the top of the Booking.html page, ensuring transparency and confirmation.

Purchase Form Validation:
Requires users to input necessary information, such as credit card number and email address, to successfully submit the form. Validates the completeness and accuracy of the provided information, ensuring a smooth and error-free transaction process.

Promo Code:
Integrates the use of promo codes, allowing users to redeem a free class. Discounts the class price from $15 to $0 when a valid promo code from the Membership Signup is applied, providing an incentive for users to engage with the membership program.

**OurSpace.html**

Hover For Information:
The use of hovering for information saved spaces and display a cleaner interface. Hovering user's mouse over the pictures of the instructors allow them to find out about the instructor's name and genre. For mobile view, users can simply tap on the pictures for the information.

# TECHNOLOGIES USED
This website was constructed with the use of HTML, CSS and JavaScript. No library or framework was used in JavaScript.

# TESTING
There are four main interactable functions in this website. A calendar to choose different dance classes (DanceClasses.html), a membership signup form (DanceClasses.html), a purchase class form (Booking.html), and the instructor information (OurSpace.html). The functions remain the same for both desktop and mobile view.

**Desktop View**
1) Calendar:
Go to the "Dance Class" page through the navigation bar / footer / box in Homepage.
Input the desired date, a calendar will pop up for convenience when choosing.
Try date with 1st as the day (Output 1).
Try date with 15th as the day (Output 2).
Try date with 30th as the day (Output 3).

2) Membership Form:
Go to the "Dance Class" page through the navigation bar / footer / box in Homepage.
Scroll to the bottom.
Try typing gibberish into either email or password and press sign up(Output: "Invalid format")
Try typing proper email format and standard password requirement and press sign up(8 characters, one cap, one number, one symbol) (Output: Pop up to indicate promo code has been copied to clipboard, paste to apply.) 

3) Purchase Form:
Go to the "Dance Class" and pick any dance class.
The class's time should be displayed on top according to chosen dance class.
Try typing gibberish in any of the input (Output: "Invalid format or empty form")
Try leaving empty inputs (Output: "Invalid format or empty form")
Try typing proper email, credit card and date format. (**Without promo code**: $15 deducted)
Try typing proper email, credit card and date format. (**With promo code**: free dance class)
Try typing proper email, credit card and date format. (**Invalid promo code**: invalid code)

4) Instructor Information:
Go to the "Our Space & Instructors" page through the navigation bar / footer / box in Homepage.
Hover mouse over each instructor's image to see their name and genre. (Touch the image for mobile view)

**Mobile View**
Homepage:
The background images will reduce to one image to prevent distortion. The two boxes which were in horizontal arrangement in desktop view, changes to vertical arrangement.

Dance Class:
The dance classes options changes from horizontal arrangement into vertical arrangement. The membership form becomes narrower to adapt to mobile screen size.

Booking:
The purchase form stretches vertically to adapt to the mobile screen size, while not affecting the input boxes significantly.

Event:
The event images changes from horizontal arrangement into vertical arrangement.

Our Space & Instructors:
The instructor images changes from grid arrangement into vertical arrangement.

# CREDITS
All text content are fictional and not copied from any websites/sources. 
The images are real and taken from multiple online sources.

**Image Reference**

Background1
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theguardian.com%2Ftravel%2F2017%2Foct%2F04%2Fnew-york-subway-breakdancing-street-parks-performers-free&psig=AOvVaw0FGk5jdnj0TaPb9e39Z1XC&ust=1701424294453000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLiKvOe664IDFQAAAAAdAAAAABAE

Background2
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.estiloblack.com.br%2F2014%2F11%2Fos-5-estilos-de-street-dance.html&psig=AOvVaw1fDZo8skH3F98vDkYzD8Ss&ust=1701504806608000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjX6t7m7YIDFQAAAAAdAAAAABAJ

DanceClassOption
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.helsinkitimes.fi%2Fculture%2F24064-red-bull-dance-your-style-street-dance-competition-arrives-in-finland-for-the-first-time.html&psig=AOvVaw20Jv4IeEqLkvRL3uxJcYSI&ust=1701504711684000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjnxbHm7YIDFQAAAAAdAAAAABAE

EventOption & Event2017-03
https://www.google.com/url?sa=i&url=https%3A%2F%2Fdance.fandom.com%2Fwiki%2FHip-hop&psig=AOvVaw1fDZo8skH3F98vDkYzD8Ss&ust=1701504806608000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjX6t7m7YIDFQAAAAAdAAAAABAR

Event2017-01
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.themusicman.uk%2Fhilty-and-bosch%2F&psig=AOvVaw0RNM7JErHWUpGYc_z_P1iK&ust=1701504973143000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOihia7n7YIDFQAAAAAdAAAAABAE

Event2017-02
https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fbrotherhood&psig=AOvVaw0F0PF_dJC9VK0O6A5LKHzR&ust=1701505017178000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjVjMPn7YIDFQAAAAAdAAAAABAE

Event2023-01
https://www.google.com/url?sa=i&url=https%3A%2F%2Fcampstogo.com%2Furban-dance-camp&psig=AOvVaw0Mywq_Myl3veZh5UNXtrYu&ust=1701505058085000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPjWwNbn7YIDFQAAAAAdAAAAABAE

Event2023-02
https://www.youtube.com/watch?v=UZA9O3b36pA

Event2023-03
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.redbull.com%2Fgb-en%2F6-popping-dance-videos-that-went-viral&psig=AOvVaw2kBfxrQUlG6n6lGQ6AzhM3&ust=1701505731291000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCODExJfq7YIDFQAAAAAdAAAAABAE

Instructor1 & DanceClass1
https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2FMRWIGGLESEB&psig=AOvVaw0UmP0WDWgd1YrXJGbjoOVy&ust=1701505783174000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMjUoLDq7YIDFQAAAAAdAAAAABAE

Instructor2 & DanceClass2
https://www.google.com/url?sa=i&url=https%3A%2F%2Flasvegasmagazine.com%2Fentertainment%2F2019%2Fjan%2F25%2Fjabbawockeez-mgm-grand-dance-theater%2F&psig=AOvVaw17WUZlXjPNuBB9l5W0qCPE&ust=1701505857420000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJCb6dPq7YIDFQAAAAAdAAAAABAL

Instructor3 & DanceClass3
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCbNObaRz-jgDmgwg_DY8xrQ&psig=AOvVaw0CUnNgyOfyj9d6TN67gL4y&ust=1701505881944000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLD2sd_q7YIDFQAAAAAdAAAAABAE

Instructor4 & DanceClass4
https://www.google.com/url?sa=i&url=https%3A%2F%2Fkinjaz.fandom.com%2Fwiki%2FAnthony_Lee&psig=AOvVaw3JnnFzsZaCVfM0rkbn5PQq&ust=1701505906823000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCID0k-vq7YIDFQAAAAAdAAAAABAE

Instructor5 & DanceClass5
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Fname%2Fnm5631571%2F&psig=AOvVaw1y7t-K-qL7B5dX2Dds7Ocu&ust=1701505927798000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOiDnfXq7YIDFQAAAAAdAAAAABAE

Instructor6 & DanceClass6
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.redbull.com%2Fhr-hr%2Fvideos%2Fgreenteck&psig=AOvVaw0wvfCby-S8Sn7kAFe6O2hx&ust=1701505942865000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiotfzq7YIDFQAAAAAdAAAAABAR

Instructor7 & DanceClass7
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2F%40H0ZIN&psig=AOvVaw1CLFL8FfAjbO15jBtVNya2&ust=1701505977205000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj37Yzr7YIDFQAAAAAdAAAAABAE

Instructor8 & DanceClass8
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.prodance.co.uk%2Fartists%2Finfo%2FSALAH&psig=AOvVaw0pDSXZqBztlIF0FeyBgNud&ust=1701506021526000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKC5iaLr7YIDFQAAAAAdAAAAABAE

Instructor9 & DanceClass9
https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2FKeoneMadrid&psig=AOvVaw3UFJDvp7QxxMek8-Fj_pL_&ust=1701506037194000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOC6sqnr7YIDFQAAAAAdAAAAABAE

**Acknowledgement**
I used Chatgpt for explanations on the use of advance JS functions, and checking the structure of the code.
This website was inspired by Recognize Studio of Singapore. Website: https://recognizestudios.com/



