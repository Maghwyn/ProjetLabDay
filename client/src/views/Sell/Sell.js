import React, { useState } from "react";
import { Link } from "react-router-dom";
import SellLayout from "../../components/forms/SellLayout";
import Layout from "../../components/layout/Layout";
import Background from "../../components/layout/Background";
import Switch from "../../components/others/Switch";
import { Formulaire } from "../../utils/functions/FormManagement";


const form = new Formulaire("sell");

const Sell = () => {
    const [formState, setFormState] = useState({product: null, material: null, zip: null, city: null});
    
    const handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const nodes = e.currentTarget.parentNode.childNodes;

             if(name === "product" ) setFormState(valid => ({...valid, product: form.verifyProductName(value, nodes)}));
        else if(name === "material") setFormState(valid => ({...valid, material: form.verifyProductCondition(value)}));
        else if(name === "zip"     ) setFormState(valid => ({...valid, zip: form.verifyZipValidity(value, nodes)}));
        else if(name === "city"    ) setFormState(valid => ({...valid, city: form.verifyCityValidity(value)}));
    }

    return (
        <> 
            <Layout bg="sell-bg">
                <main className="forms" id="main-content">
                    <div className="form-title">
                        <h1>Formulaire Vendre</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eveniet dolore sunt est maxime fugiat omnis ea commodi debitis, repellat illum libero tempore odio ex, molestias recusandae placeat ad et.</p>
                    </div>
                    <div className="forms-box">
                        <div className="form-wrapper">
                            <form className="form">
                                <SellLayout event={handleUserInput}/>

                                <div className="form-btn">
                                { 
                                    form.verifyFormValidity(formState) ?
                                    <Link to="/vendre/resultats" state={{product: form.fetchProduct(), city: form.fetchCity()}}>
                                        <button className="button valid">Chercher</button>
                                    </Link>
                                    :
                                    <Link to="#"><button className="button" disabled>Chercher</button></Link>
                                }
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </Layout>
            <Background color={"purple"}/>
        </>
    )
}

export default Sell;