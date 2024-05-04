import React, {useEffect,useState} from 'react'
import axios from 'axios'

const endpoint = 'http://localhost:8000/api'; 
const ShowHeroe = () => {
    const [name,setName] = useState('')

    const [gender,setGender] = useState('')
    const [race,setRace] = useState('')
    const [height,setHeight] = useState('')
    const [weight,setWeight] = useState('')
    const [eyeColor,setEyeColor] = useState('')
    const [hairColor,setHairColor] = useState('')

    const [intelligence,setIntelligence] = useState('')
    const [strength,setStrength] = useState('')
    const [speed,setSpeed] = useState('')
    const [durability,setDurability] = useState('')
    const [power,setPower] = useState('')
    const [combat,setCombat] = useState('')

    const [fullName,setFullName] = useState('')
    const [alterEgos,setEgos] = useState('')
    const [aliases,setAliases] = useState('')

    const [groupAffiliation,setGroupAffiliation] = useState('')
    const [relatives,SetRelatives] = useState('')

    const [image,setImages] = useState('')
    useEffect( () => {
        const getHeroe = async () => {
            const response = await axios.get(`${endpoint}/heroe`)
            setName(response.data.name)

            setGender(response.data.appearance.gender)
            setRace(response.data.appearance.race)
            setHeight(response.data.appearance.height[1])
            setWeight(response.data.appearance.weight[1])
            setEyeColor(response.data.appearance.eyeColor)
            setHairColor(response.data.appearance.hairColor)

            setIntelligence(response.data.powerstats.intelligence)
            setStrength(response.data.powerstats.strength)
            setSpeed(response.data.powerstats.speed)
            setDurability(response.data.powerstats.durability)
            setPower(response.data.powerstats.power)
            setCombat(response.data.powerstats.combat)

            setFullName(response.data.biography.fullName)
            setEgos(response.data.biography.alterEgos)
            setAliases(response.data.biography.aliases)

            setGroupAffiliation(response.data.connections.groupAffiliation)
            SetRelatives(response.data.connections.relatives)

            setImages(response.data.images.lg)
        }
        getHeroe()
    },[] )
    
    return (
        <>
        <div className='container mt-4'>
             <div className='row'>
             <table className='table'>
                <tbody >
                    <tr>
                        <td style={{ width:"50%" }} >
                            <h1>{name}</h1>
                            <h2>Appearance</h2>
                            <ul className='list-group'>
                            <li className='list-group-item'>{gender}</li>
                            <li className='list-group-item'>{race}</li>
                            <li className='list-group-item'>{height} , {weight}</li>
                            <li className='list-group-item'>{eyeColor}</li>
                            <li className='list-group-item'>{hairColor}</li>
                        </ul>
                        </td>
                        <td><img src={image} alt="img" style={{ borderRadius: 50 }}/></td>
                    </tr>
                    <tr>
                        <td style={{ width:"50%" }} >
                            <h1>Powerstats</h1>
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Intelligence</label>
                                <div className="progress">
                                    <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: intelligence+'%' }}  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Strength</label>
                                <div className="progress">
                                    <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: strength+'%' }}  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Speed</label>
                                <div className="progress">
                                    <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: speed+'%' }}  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Durability</label>
                                <div className="progress">
                                    <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" style={{ width:durability+'%' }}  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Power</label>
                                <div className="progress">
                                    <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: power+'%' }}  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Combat</label>
                                <div className="progress">
                                    <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: combat+'%' }}  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <h1>Biography</h1>
                            <div className="accordion accordion-flush" id="accordionFlush">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        FullName
                                    </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlush">
                                    <div className="accordion-body">{fullName}</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        AlterEgos 
                                    </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlush">
                                    <div className="accordion-body">{alterEgos}</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        aliases
                                    </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlush">
                                    <div className="accordion-body">{aliases}</div>
                                    </div>
                                </div>
                            </div>
                            <h1>Connections</h1>
                            <p>
                            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Group Affiliation and Relatives</button>
                            </p>
                            <div className="row">
                                <div className="col">
                                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                                        <div className="card card-body">
                                        {groupAffiliation}
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="collapse multi-collapse" id="multiCollapseExample2">
                                        <div className="card card-body">
                                        {relatives}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
             </div>
         </div>
         </>    
    )
}

export default ShowHeroe