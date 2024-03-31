import React from 'react'
import WalletCardsWrapper from './components/WalletCards'
import Transaction from './components/Transaction'
import BankCardsWrapper from './components/BankCards'

function Wallet() {
  return (
    <div>
      <WalletCardsWrapper/>
      <Transaction/>
      <BankCardsWrapper/>
    </div>
  )
}

export default Wallet