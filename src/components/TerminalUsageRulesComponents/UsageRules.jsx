import React from 'react'
import RulesList from './RulesList';
import term from '../../assets/img/shirin/term.jpg';

const UsageRules = () => {
    return (
        <section className='usage_rules_section'>
            <div className='usage_rules_container'>
                <h1>Ödəniş <span>terminallarının</span> istifadə qaydaları.</h1>
                <RulesList />
            </div>
            <div className='person_image'>
                <img src={term} alt="" />
            </div>
        </section>
    )
}

export default UsageRules;