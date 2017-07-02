import React, { Component } from 'react'

// This is pretty an SVG file dumped into a React component, with a few adjustments:
// React components can't contain hyphenated properties e.g: 'stroke-width' must be 'strokeWidth'.
// If you feed this component a 'title', and 'subtitle', it will render into the diagram.

class IconPlay extends Component {
   render() {
      const { title, subtitle } = this.props
      return (
         <div className="svg-icon svg-play">
         <svg viewBox="0 0 225 225" version="1.1" xmlns="http://www.w3.org/2000/svg">
             <defs>
                 <filter x="-6.4%" y="-6.4%" width="112.7%" height="112.7%" filterUnits="objectBoundingBox" id="filter-1">
                     <feGaussianBlur stdDeviation="3" in="SourceGraphic"></feGaussianBlur>
                 </filter>
                 <filter x="-6.0%" y="-7.0%" width="112.1%" height="113.9%" filterUnits="objectBoundingBox" id="filter-2">
                     <feGaussianBlur stdDeviation="3" in="SourceGraphic"></feGaussianBlur>
                 </filter>
                 <text id="text-play-1" fontFamily="ArialMT, Arial" fontSize="18" fontWeight="normal" fill="#FFFFFF">
                     <tspan x="60.1616211" y="218">{subtitle}</tspan>
                 </text>
                 <filter x="-6.4%" y="-25.0%" width="112.8%" height="170.0%" filterUnits="objectBoundingBox" id="filter-4">
                     <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                     <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                     <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                 </filter>
                 <text id="text-play-2" fontFamily="ArialMT, Arial" fontSize="28" fontWeight="normal" fill="#FFFFFF">
                     <tspan x="1" y="114">{title}</tspan>
                 </text>
                 <filter x="-10.0%" y="-16.1%" width="120.0%" height="145.2%" filterUnits="objectBoundingBox" id="filter-6">
                     <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                     <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                     <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                 </filter>
             </defs>
             <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                 <g id="play">
                     <circle className="bottom_shape play_bottom_shape_shadow" fillOpacity="0.5" fill="#000000" fillRule="nonzero" filter="url(#filter-1)" cx="145.3" cy="116.9" r="70.8"></circle>
                     <circle className="bottom_shape play_bottom_shape" fill="#E4F5FD" fillRule="nonzero" cx="143.3" cy="114.9" r="70.8"></circle>
                     <polygon className="top_shape play_top_shape_shadow" fillOpacity="0.5" fill="#000000" fillRule="nonzero" filter="url(#filter-2)" points="90.6 132.1 16 132.1 53.3 67.6 90.6 3 127.8 67.6 165.1 132.1"></polygon>
                     <polygon className="top_shape play_top_shape" fill="#D0D5EC" fillRule="nonzero" points="88.6 130.1 14 130.1 51.3 65.6 88.6 1 125.8 65.6 163.1 130.1"></polygon>
                     <g id="play_subtitle" fillOpacity="1" fill="#FFFFFF">
                         <use filter="url(#filter-4)" xlinkHref="#text-play-1"></use>
                         <use xlinkHref="#text-play-1"></use>
                     </g>
                     <g id="play_title" fillOpacity="1" fill="#FFFFFF">
                         <use filter="url(#filter-6)" xlinkHref="#text-play-2"></use>
                         <use xlinkHref="#text-play-2"></use>
                     </g>
                 </g>
             </g>
         </svg>
         </div>
      );
   }
}

export default IconPlay;
