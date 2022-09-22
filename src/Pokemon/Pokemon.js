import './Pokemon.css'

const Pokemon = (
    {
        pokemon: {
            id, name, height, stats,
            sprites: {front_default}
        }
    }) => {

    const styleInput = {height: '10px',borderRadius:'10px', border:'2px'}
    let bestStat = 0;

    stats.forEach(element => {
        if (element.base_stat > bestStat) {
            bestStat = element.base_stat
        }
    })


    return (
        <>
            {id < -1 ? (
                <h1>Tokemon No exits</h1>
            ) : (
                <div className="container  d-flex">
                    <div className="card col-4 shadow">
                        <img src={front_default} className="card-img-top" alt={name}/>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            {
                                stats.map((elemet) => {
                                    let porcent = Math.trunc((elemet.base_stat / bestStat) * 100).toString() + '%'
                                    let barColor = Math.trunc((elemet.base_stat / bestStat) * 100);

                                    switch (true) {
                                        case barColor > 80:
                                            barColor = 'greenyellow'
                                            break;
                                        case barColor > 60:
                                            barColor = 'yellow'
                                            break;
                                        case barColor > 40:
                                            barColor = 'orange'
                                            break;
                                        case barColor > 20:
                                            barColor = '#F9C619'
                                            break;
                                        case barColor < 20:
                                            barColor = 'red'
                                            break;
                                        default:
                                            barColor = 'greenyellow'
                                            break;
                                    }

                                    return (<div className="d-block align-content-start">
                                        <label className="d-flex">{elemet.stat.name} {elemet.base_stat}</label>
                                        <input disabled={true}
                                               style={{...styleInput, width: porcent, backgroundColor: barColor}}/>
                                    </div>)
                                })
                            }
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk
                                of
                                the card's content.</p>
                        </div>
                    </div>
                    <div>
                        <table className="table col-7">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th><th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th><th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    )
}

export default Pokemon;
