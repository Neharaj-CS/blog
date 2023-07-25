import React from 'react';


const Menu = () => {

    const posts = [
        {
            id: 1,
            title: "Nourishing Our World: Exploring the Power of Food",
            desc: "This project delves into the significance of food in our lives, examining its role in nutrition, culture, and sustainability. It explores topics such as sustainable agriculture, food security, innovative culinary practices, and conscious consumption. By understanding the power of food, we can work towards creating a healthier and more equitable food system that nourishes both individuals and the planet, ensuring a sustainable future for all.",
            img: "https://www.eatingwell.com/thmb/088YHsNmHkUQ7iNGP4375MiAXOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_7866255_foods-you-should-eat-every-week-to-lose-weight_-04-d58e9c481bce4a29b47295baade4072d.jpg",
        },
        {
            id: 2,
            title: "Rhythmic Expressions: Exploring the World of Dance",
            desc: "DThis project celebrates the art of dance and its diverse forms of expression. It delves into the rich history, cultural significance, and transformative power of dance. From traditional folk dances to contemporary styles, this exploration showcases the beauty, grace, and passion that dance embodies. By delving into the artistry and storytelling within dance, we gain a deeper appreciation for its ability to unite communities, convey emotions, and celebrate human creativity.",
            img: "https://cdn.britannica.com/92/189592-050-5023ACF5/dancer-dance-natyam-Indian-Bharata.jpg",
        },
        {
            id: 3,
            title: "Celluloid Chronicles: Journey into the World of Cinema",
            desc: "This project immerses viewers into the captivating realm of film, exploring its history, impact, and artistic significance. From classic masterpieces to modern blockbusters, it delves into the art of storytelling through visual medium. Analyzing various genres, filmmaking techniques, and the influence of cinema on society, this project unravels the magic behind the silver screen. ",
            img: "https://m.media-amazon.com/images/M/MV5BYTMyYzVjYmMtN2MwYi00MTA4LWJlNjAtYWY1NDllMjdiYTI2XkEyXkFqcGdeQXVyMjE4NzUxNDA@._V1_.jpg",
        },
        {
            id: 4,
            title: "Weather Wonders: Unveiling the Mysteries of the Atmosphere",
            desc: "This project delves into the fascinating world of weather, exploring its patterns, phenomena, and impact on our daily lives. From understanding the science behind weather systems to examining climate change and extreme events, it unravels the complexities of the atmosphere. By delving into meteorological concepts, forecasting techniques, and the interconnectedness of weather with our environment, this project aims to foster a greater appreciation for the forces shaping our planet's climate and inspire conversations.",
            img: "https://play-lh.googleusercontent.com/cweCpoG0q7Z4qVBdozGoM1DFhp2U_kHmmbo2F1_qgF6BP-hCRai6uB9U1j28ZhaaYXU",
        },
    ];

    return (
        <div className="menu">
          <h1>Other posts you may like</h1>
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <img src={post.img} alt="" />
              <h2>{post.title}</h2>
              <button>Read More</button>
            </div>
          ))}
        </div>
      );
}

export default Menu;