import PropTypes from 'prop-types'
// import PageTitle from './statistic/BaseTitle/BaseTitle'


export default function Section({title,children}){
    console.log(children);
    return(<div>
            {children}
        <h2>{title}</h2>
        
           </div>)
}
Section.propTypes={
title:PropTypes.string,
children:PropTypes.node,
}