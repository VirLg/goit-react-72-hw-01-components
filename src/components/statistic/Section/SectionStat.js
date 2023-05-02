import PropTypes from 'prop-types'
// import PageTitle from './statistic/BaseTitle/BaseTitle'


export default function SectionStat({children}){
    console.log(children);
    return(<div>
      
            {children}
        
           </div>)
}
SectionStat.propTypes={
title:PropTypes.string,
children:PropTypes.node,
}