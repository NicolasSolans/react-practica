import { useState } from "react"

const CardTwFollow = ({userName, name, isFollowing, image}) => {
    const [follow, setFollow] = useState(isFollowing)

    const textFollow = follow ? 'Siguiendo' : 'Seguir'
    const buttonClassName = follow 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
        setFollow(!follow)
    }
    return (
        <div className='tw-followCard'>
            <div className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={image} alt={`${userName}`} />
                
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </div>

            <div>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{textFollow}</span>
                </button>
            </div>
        </div>
    )
}

export default CardTwFollow