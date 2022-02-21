import React from "react";

const Atleta =({nome,equipe,onclick}) =>{
    return (
        <div className="atleta">
            <div className="atleta-header">
                <div>
                    <p className="atleta-title">{nome}</p>
                </div>
                <div>
                    <a href="#" className="close" onClick={onclick}>X</a>
                </div>
            </div>
            <div className="atleta-content">
                <p>{equipe}</p>
            </div>
        </div>
    )
}

export {Atleta}