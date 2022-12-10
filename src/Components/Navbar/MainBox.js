import React from 'react';
import Slider from "./Slider";
import TopLine from "./TopLine"
import SearchInput from './Search/SearchInput';

export default function MainBox(){
  return (
     <div>
        <TopLine />
        <SearchInput />
         <Slider /> 
        
    </div>
    
  )
}
