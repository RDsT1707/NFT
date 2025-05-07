import './App.css';

function App() {
  return (
<div className="nft-container">
  <div className="nft-card">
    {/* NFT Image avec overlay */}
    <div className="nft-image-wrapper">
      <img
        src="/src/assets/img/image-equilibrium.jpg"
        alt="Equilibrium #3429"
        className="nft-image"
      />
      <div className="image-overlay">
        <img
          src="/src/assets/img/icon-view.svg"
          alt="Equilibrium #3429"
          className="view-icon"
        />
      </div>
    </div>
    {/* NFT Details */}
    <div className="nft-content">
      <h2 className="nft-title">Equilibrium #3429</h2>
      <p className="nft-description">
        Our Equilibrium collection promotes balance and calm.
      </p>
      {/* Price and Time */}
      <div className="nft-stats">
        <div className="eth-price">
          <img
            src="/src/assets/img/icon-ethereum.svg"
            alt="Equilibrium #3429"
            className="ethereum-icon"
          />
          <span>0.041 ETH</span>
        </div>
        <div className="time-left">
          <img
            src="/src/assets/img/icon-clock.svg"
            alt="Equilibrium #3429"
            className="clock-icon"
          />
          <span>3 days left</span>
        </div>
      </div>
      {/* Creator */}
      <div className="creator-section">
        <div className="avatar">
          <img
            src="/src/assets/img/image-avatar.png"
            alt="Creator avatar"
          />
        </div>
        <p className="creator-text">
          Creation of <span className="creator-name">Jules Wyvern</span>
        </p>
      </div>
    </div>
  </div>
</div>
  )
}


export default App;
