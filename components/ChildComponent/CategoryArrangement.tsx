import React from "react";
import Categories from "@/components/ChildComponent/Categories";


type CategoriesArrangamentProps = {
    progress: number;
    progressLimit: number;
    type: string;
    displayType: string;

    order: number
    icon: object
}

const CategoryArrangement = ({progress, progressLimit, type, displayType, order, icon} : CategoriesArrangamentProps) => {
    switch(order%3){
        case 0: return (<div className="p-5 flex justify-start">
            <Categories
                progress={progress!}
                progressLimit={progressLimit}
                type={type}
                displayType={displayType}
                icon={icon}
            /></div>);
        case 1: return (<div className="p-5  flex justify-center">
            <Categories
                progress={progress!}
                progressLimit={progressLimit}
                type={type}
                displayType={displayType}
                icon={icon}
            /></div>);
        case 2: return (<div className="p-5  flex justify-end">
            <Categories
                progress={progress!}
                progressLimit={progressLimit}
                type={type}
                displayType={displayType}
                icon={icon}
            /></div>);
    }

}

export default CategoryArrangement;