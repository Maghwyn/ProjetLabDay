const GiveResearch = () => {
    const fetchResearch = () => {
        return [
            {research : "Whatever 1", text : "Bullshit 1"},
            {research : "Whatever 2", text : "Bullshit 2"}
        ]
    }

    let key = 0;
    const json = fetchResearch();
    return (
        <li><span className="tree">Ce que je dois donner</span>
            <ul className="nested">
            {
                json.map(el => {
                    return (
                        <li key={key++}><span className="tree">{el.research}</span>
                            <div className="tree-content">
                                <div className="tree-content-location">
                                    <p>NULL</p>
                                    <p>NULL</p>
                                </div>
                                <div className="tree-content-controller">
                                    <button className="small-button">Afficher la carte</button>
                                    <button className="small-button">Supprimer la tâche</button>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
            </ul>
        </li>
    )
}

export default GiveResearch;