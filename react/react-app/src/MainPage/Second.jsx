import React, { Component } from "react";
 
const images = [
    { src: 'https://cs11.pikabu.ru/images/big_size_comm/2020-06_4/1592486654118117958.jpg', alt: 'I don`t want to go to the front' }, 
    { src: 'https://www.meme-arsenal.com/memes/f6d217fad139be9943f2c8d563ee422d.jpg', alt: 'Sorry, but the front was not included in the deal' }
  ];

class Second extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <h2>Second tab of my perfect app</h2>
        <p>These are the reasons why I love front-end development:</p>
        <ol>
          <ol>-</ol>
          <ol>-</ol>
          <ol>-</ol>
          <ol>-</ol>
          <ol>-</ol>
          <ol>- Funny memes:</ol>
          {images.map(function(imageProps) {
            return (
              <ol key={ imageProps.src }>
                <h3>{imageProps.alt}</h3>
                <img src={ imageProps.src } alt={ imageProps.alt + ' meme shoulb be there' } />
              </ol>
            );
          })}
          <ol>And so on...</ol>
        </ol>
      </div>
    );
  }
}
 
export { Second };