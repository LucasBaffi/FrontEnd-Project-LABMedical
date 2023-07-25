import './CardInfo.css'


function CardInfo({ titulo, valor, IconComponent }) {


    return (

        <div>
            <div>
                <div>
                    {IconComponent && <IconComponent className="icon-card-info" />}
                    <span className="span-length-pacients">

                        {valor}

                    </span>
                    <p className=" p-info-estatistica">{titulo}</p>
                </div>
            </div>
        </div>


    )


}


export default CardInfo;