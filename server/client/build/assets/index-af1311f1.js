import{g as o,a as e,j as r}from"./index-c532219d.js";import{R as m,P as c}from"./index-5395b612.js";import{T as l}from"./index-a2692f30.js";import{I as g}from"./index-43b592c3.js";import{S as a}from"./Stack-9a7d6fdd.js";import{G as t}from"./Grid-b8fb3a11.js";import{T as d}from"./Typography-cb50676a.js";const P=({product:i})=>{const n=i.images.length!==0?i.images[0]:"/imgs/No-Image-Placeholder.png",s=o();return e(a,{direction:"row",justifyContent:"flex-start",alignItems:"center",spacing:2,sx:{overflow:"hidden",borderRadius:"0.5rem",cursor:"pointer"},onClick:()=>s(`/product/${i._id}`),children:r(t,{container:!0,spacing:2,children:[e(t,{item:!0,xs:3,sm:3,md:3,lg:2,children:e(g,{image:n})}),e(t,{item:!0,xs:9,sm:9,md:9,lg:10,children:r(a,{direction:"column",spacing:1,children:[e(l,{productTitle:i.title}),r(a,{direction:"row",alignItems:"center",spacing:1,children:[e(m,{rateValue:i.rating.rate/i.rating.count}),e(d,{variant:"body2",children:`(${i.rating.count})`})]}),e(c,{price:i.price,discount:i.discount})]})})]})})};export{P};
