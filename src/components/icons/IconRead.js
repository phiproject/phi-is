import React, { Component } from 'react'

class IconRead extends Component {
   render() {
      const { title, subtitle } = this.props
      return (
         <div className="svg-icon svg-read">
         <svg viewBox="0 0 225 225" version="1.1" xmlns="http://www.w3.org/2000/svg">
             <defs>
                 <filter x="-8.0%" y="-8.0%" width="115.9%" height="115.9%" filterUnits="objectBoundingBox" id="filter-1">
                     <feGaussianBlur stdDeviation="3" in="SourceGraphic"></feGaussianBlur>
                 </filter>
                 <filter x="-8.0%" y="-8.0%" width="115.9%" height="115.9%" filterUnits="objectBoundingBox" id="filter-2">
                     <feGaussianBlur stdDeviation="3" in="SourceGraphic"></feGaussianBlur>
                 </filter>
                 <text id="text-read-1" fontFamily="ArialMT, Arial" fontSize="18" fontWeight="normal" fill="#FFFFFF">
                     <tspan x="62.1503906" y="218">{subtitle}</tspan>
                 </text>
                 <filter x="-6.5%" y="-25.0%" width="113.1%" height="170.0%" filterUnits="objectBoundingBox" id="filter-4">
                     <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                     <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                     <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                 </filter>
                 <text id="text-read-2" fontFamily="ArialMT, Arial" fontSize="28" fontWeight="normal" fill="#FFFFFF">
                     <tspan x="1" y="113">{title}</tspan>
                 </text>
                 <filter x="-9.0%" y="-16.1%" width="117.9%" height="145.2%" filterUnits="objectBoundingBox" id="filter-6">
                     <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                     <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                     <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                 </filter>
             </defs>
             <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                 <g id="read">
                     <rect id="read_bottom_shape_shadow" fillOpacity="0.5" fill="#000000" fillRule="nonzero" filter="url(#filter-1)" transform="translate(132.158930, 102.861600) rotate(45.000000) translate(-132.158930, -102.861600) " x="75.7094714" y="46.4121414" width="112.898917" height="112.898917"></rect>
                     <rect id="read_bottom_shape" fill="#E4F5FD" fillRule="nonzero" transform="translate(131.158930, 100.861600) rotate(45.000000) translate(-131.158930, -100.861600) " x="74.7094714" y="44.4121414" width="112.898917" height="112.898917"></rect>
                     <rect id="read_top_shape_shadow" fillOpacity="0.5" fill="#000000" fillRule="nonzero" filter="url(#filter-2)" transform="translate(100.867600, 102.841570) rotate(45.000000) translate(-100.867600, -102.841570) " x="44.4181414" y="46.3921114" width="112.898917" height="112.898917"></rect>
                     <rect id="read_top_shape" fill="#D0D5EC" fillRule="nonzero" transform="translate(98.867600, 100.841570) rotate(45.000000) translate(-98.867600, -100.841570) " x="42.4181414" y="44.3921114" width="112.898917" height="112.898917"></rect>
                     <g id="read_subtitle" fillOpacity="1" fill="#FFFFFF">
                         <use filter="url(#filter-4)" xlinkHref="#text-read-1"></use>
                         <use xlinkHref="#text-read-1"></use>
                     </g>
                     <g id="read_title" fillOpacity="1" fill="#FFFFFF">
                         <use filter="url(#filter-6)" xlinkHref="#text-read-2"></use>
                         <use xlinkHref="#text-read-2"></use>
                     </g>
                 </g>
             </g>
         </svg>
         </div>
      );
   }
}

export default IconRead;
