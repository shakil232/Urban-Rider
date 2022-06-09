import React from 'react';
import serviceInformation from '../../../DataTable/ServiceesInfo';
import './Servicess.css';
// import MoonLoader from "react-spinners/MoonLoader";
// import useAuth from '../../../hooks/useAuth';
import ServicesCard from '../ServicesCard/ServicesCard';

const Servicess = () => {
    // const { isLoading } = useAuth();

    return (
        
            <section className="mt-5 serviceContainer">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="row  p-5 g-3">
                        {
                            serviceInformation.map(service =>
                                <ServicesCard
                                    service={service}
                                    key={service.name}>

                                </ServicesCard>)
                        }
                    </div>
                </div>
            </section>


        // isLoading ?
        //     <div className="d-flex align-content-center justify-content-center p-5">
        //         <MoonLoader color={"#D3216C"} loading={isLoading} size={60} />
        //     </div>
        //     :
        //     <section className="mt-5 serviceContainer">
        //         <div className="d-flex justify-content-center align-items-center">
        //             <div className="row  p-5 g-3">
        //                 {
        //                     serviceInformation.map(service =>
        //                         <ServicesCard
        //                             service={service}
        //                             key={service.name}>

        //                         </ServicesCard>)
        //                 }
        //             </div>
        //         </div>
        //     </section>
    );
};

export default Servicess;