import { useEffect, useState } from "react";
import isaacImg from './../images/isaac.jpg';
import ishigamiImg from './../images/ishigami.jpg';
import izumiImg from './../images/izumi.jpg';
import kaguyaImg from './../images/kaguya.jpg';
import kenmaImg from './../images/kenma.jpg';
import komiImg from './../images/komi.jpg';
import mikeyImg from './../images/mikey.jpg';
import saikiImg from './../images/saiki.jpg';
import shikimoriImg from './../images/shikimori.jpg';
import tadanoImg from './../images/tadano.jpg';
import Card from "./Card";

function Container(props) {
    const cardContent = [
        {
            id: 1,
            name: 'Isaac Foster',
            image: isaacImg
        }, 
        {
            id: 2,
            name: 'Ishigami Yuu',
            image: ishigamiImg
        }, 
        {
            id: 3,
            name: 'Izumi Yuu',
            image: izumiImg
        }, 
        {
            id: 4,
            name: 'Kaguya Shinomiya',
            image: kaguyaImg
        }, 
        {
            id: 5,
            name: 'Kenma Kozume',
            image: kenmaImg
        }, 
        {
            id: 6,
            name: 'Komi Shouko',
            image: komiImg
        }, 
        {
            id: 7,
            name: 'Mikey(Manjiro Sano)',
            image: mikeyImg
        }, 
        {
            id: 8,
            name: 'Saiki Kusuo',
            image: saikiImg
        }, 
        {
            id: 9,
            name: 'Micchon Shikimori',
            image: shikimoriImg
        }, 
        {
            id: 10,
            name: 'Tadano Hitohito',
            image: tadanoImg
        }
    ]

    const [cards, setCards] = useState(cardContent);

    const shuffle = (cardSet) => {
        for (let i = 0; i < cardSet.length; i++) {
            let randomIndex = Math.floor(Math.random() * 9);
            [cardSet[randomIndex], cardSet[i]] = [cardSet[i], cardSet[randomIndex]]
        }
    }

    useEffect(() => {
        const newCards = [...cards];
        shuffle(newCards);
        setCards(newCards);
    }, [props.score]);

  return (
      <div id="container">
        {cards.map(el => (
            <Card img={el.image} name={el.name} key={el.id} id={el.id} handleClick={props.handleClick}/>
        ))}
      </div>
  );
}

export default Container;
