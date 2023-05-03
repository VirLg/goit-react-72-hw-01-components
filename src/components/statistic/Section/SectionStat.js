import PropTypes from 'prop-types'
import css from './SectionStat.module.css'
// import PageTitle from './statistic/BaseTitle/BaseTitle'


export default function SectionStat({children}){
  
    return(<div className={css.section__stat}>
      
            {children}
        
           </div>)
}
SectionStat.propTypes={
title:PropTypes.string,
children:PropTypes.node,
}