import React from 'react'
import PortfolioCards from './components/PortfolioCards'
import FinancialCardsWrapper from './components/FinancialCards'
import InsightsCardsWrapper from './components/InsightsCards'
import TransactionTable from './components/TransactionTable'

function Portfolio() {
  return (
    <div>
      <PortfolioCards/>
      <FinancialCardsWrapper/>
      <InsightsCardsWrapper/>
      <TransactionTable/>
    </div>
  )
}

export default Portfolio