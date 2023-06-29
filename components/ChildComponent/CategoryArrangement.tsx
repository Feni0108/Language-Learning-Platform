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
        case 0: return (<div className="p-5 flex justify-start rounded rounded-full border-2">
            <Categories
                progress={progress!}
                progressLimit={progressLimit}
                type={type}
                displayType={displayType}
                icon={icon}
            /></div>);
        case 1: return (<div className="p-5  flex justify-center rounded rounded-full border-2">
            <Categories
                progress={progress!}
                progressLimit={progressLimit}
                type={type}
                displayType={displayType}
                icon={icon}
            /></div>);
        case 2: return (<div className="p-5  flex justify-end rounded rounded-full border-2">
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