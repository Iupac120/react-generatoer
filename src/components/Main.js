import React from "react"
import memeData from "./memeData"


const Main=()=>{
    const [memeImage,getMemeImage] = React.useState({
        randomImage: 'http://i.imgflip.com/1bij.jpg',
        topText: '',
        bottomText: '',
        email:'',
        comment:'',
        isFriendly:true,
        employment:"",
        favouriteColor:""

    })
    let imageData = memeData.data.memes
    function handleImage(){
        const data = imageData.map((item)=>{
            return item.url 
        })
        const noData = Math.floor(Math.random()*imageData.length)
        let newData = data[noData]
        console.log(newData)
        getMemeImage((prevState)=>{
            return{
                ...prevState,randomImage:newData
            }
        })
    }
    console.log(memeImage)
    
    function handChange(event){
        const {name,value,type,checked} = event.target
        getMemeImage((preFormData)=>{
            
            return{
                ...preFormData,
                [name]:type==="checkbox"? checked:value,
                
            }
        })
        
    }
    function handleSubmit(event){
        event.preventDefault()
        console.log(memeImage)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="form">
            <input type="text" 
                    className="form--input" 
                    placeholder="Top Text"
                    name="topText"
                    value={memeImage.topText}
                    onChange={handChange}
                    />
            <input type="text" 
                    className="form--input" 
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={memeImage.bottomText}
                    onChange={handChange}
                    />
            <input type= "email"
                    onChange={handChange}
                    name="email"
                    value={memeImage.email}
                    placeholder="email"
                    />
            <textarea 
                    onChange={handChange}
                    name="comment"
                    value={memeImage.comment}
                    placeholder="comment"
                    />
             <input type= "checkbox"
                    onChange={handChange}
                    name="isFriendly"
                    id="isFriendly"
                    checked={memeImage.isFriendly}
                    />
            <label htmlFor="isFriendly">Are you a programmer?</label>
            
            <fieldset>
            <legend>Current Employment Status</legend>
                <input type="radio"
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        onChange={handChange}
                        checked={memeImage.employment ==="unemployed"}
                 />
                 <label htmlFor="unemployed">Unemployed</label>
                 <br/>
                 <input type="radio"
                        id="part-time"
                        name="employment"
                        value="part-time"
                        onChange={handChange}
                        checked={memeImage.employment ==="part-time"}
                 />
                 <label htmlFor="part-time">Part-Time</label>
                 <br/>
                 <input type="radio"
                        id="full-time"
                        name="employment"
                        value="full-time"
                        onChange={handChange}
                        checked={memeImage.employment ==="full-time"}
                 />
                 <label htmlFor="full-time">Full-Time</label>
                 <br/>
            </fieldset>
            <br/>
            <br/>
            <label htmlFor="favouriteColor">What is your favourite color?</label>
            <select id="favouriteColor"
                    onChange={handChange}
                    name="favouriteColor"
                    value={memeImage.favouriteColor}
                    >
                <option value="">---Choose---</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigi">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br/>
            <br/>
            <button className="form--button" onClick={handleImage}>Get a new meme image</button>
            </div>
            <div>
                <img src={memeImage.randomImage} alt="meme-troll" className="meme--image"/>
            </div>
            <br/>
            <br/>
            <button>Submit</button>
        </form>
    )
}

export default Main