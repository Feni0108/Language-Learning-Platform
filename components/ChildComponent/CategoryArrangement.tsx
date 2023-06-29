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
    switch(order%4){
        case 0: return (<div className="pl-28 flex justify-start">
            <Categories
                progress={progress!}
                progressLimit={progressLimit}
                type={type}
                displayType={displayType}
                icon={icon}
            /></div>);
        case 1: case 3: return (<div className="  flex justify-center">
            <Categories
                progress={progress!}
                progressLimit={progressLimit}
                type={type}
                displayType={displayType}
                icon={icon}
            /></div>);
        case 2: return (<div className="pr-28  flex justify-end">
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