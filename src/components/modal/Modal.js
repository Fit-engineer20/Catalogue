import React from 'react'
import { Pie } from 'react-chartjs-2'
import './modal.css'

const Modal = ({category, AllData, toggle}) => {

    const filter = category.filter((curr)=>{
        return (curr!="All");
    });

    const Itemcount = [];
    for(let i=0;i<filter.length;i++)
    {
        let count=0;
        for(let j=0; j<AllData.length;j++)
        {
            if(AllData[j].category === filter[i])
            {
                count=count+1;
            }
        }

        Itemcount.push(count);
    }

    return (
        <div className="modal d-flex justify-content-center align-items-center">
            <div className="modal_view d-flex justify-content-center align-items-center">
                <i class="fas fa-times close_modal" onClick={toggle}></i>
                <Pie 
                    data = {{
                       labels:filter,
                       datasets:[{
                           data:Itemcount,
                           backgroundColor:["#E05D5D","#1597E5","#FFCE45","#2FDD92"],
                       }],
                    }}
                    options={{
                        maintainAspectRatio:false,
                        responsive:true,
                    }}
                />
            </div>
        </div>
    )
}

export default Modal
