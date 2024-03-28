import React from 'react'
import WalletCardsWrapper from './components/WalletCards'
import Transaction from './components/Transaction'

function Wallet() {
  return (
    <div>
      <WalletCardsWrapper/>
      <Transaction/>
    </div>
  )
}

export default Wallet